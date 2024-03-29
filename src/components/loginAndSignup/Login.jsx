/* eslint-disable no-use-before-define */
/**
* Login Page of the Myntra Website
* The original Login page usually contains OTP Verification,
* for simplicity email and password is used.
* @returns a login page with links for signup and forgot Password(static for now)
* @author Sanjana Rao
*/
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Grid } from '@mui/material';
import { ClipLoader } from 'react-spinners';
import { useHistory } from 'react-router-dom';
import useForm from '../../utils/formValidation';
import validate from '../../utils/loginValidation';
import { loginUser } from '../../service/userService';
import { loginStatus } from '../../actions/userActions';
import Appbar from '../header/Appbar';
import InputBox from '../commonComponents/InputBox';
import ActionButton from '../commonComponents/ActionButton';
import logo from '../../assets/login.webp';
import useStyles from './loginStyles';

export default function Login() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  // Function to connect with strapi as well as to know if the user has logged in or not via redux
  const handleLogin = () => {
    loginUser(values.email, values.password).then(() => {
      dispatch(loginStatus(true));
      setLoading(false);
      history.push('/');
    }).catch();
  };
  const {
    values, errors, handleChange, handleSubmit,
  } = useForm(
    handleLogin,
    validate,
  );

  // Routing Function to go to signup page
  const signUpPage = () => {
    history.push('/signup');
  };

  localStorage.setItem('email', values.email);
  return (
    <div className={classes.root}>
      <div><Appbar /></div>
      <Grid container className={classes.container}>
        <Grid className={classes.content}>
          <div className={classes.bannerContainer}>
            <img src={logo} alt="login_banner" width="400" height="187" />
          </div>
          <div className={classes.loginContainer}>
            <div className={classes.loginLabel}>
              Login
              {' '}
              <span
                style={{
                  color: '#535766',
                  fontSize: '16px',
                  fontWeight: 400,
                }}
              />
              {' '}
            </div>
            <form onSubmit={handleSubmit}>
              <InputBox
                id="email"
                name="email"
                fullWidth
                required
                value={values.email || ''}
                onChange={handleChange}
                helperText={errors.email}
                placeholder="Enter your E-Mail*"
              />
              {' '}
              <InputBox
                fullWidth
                required
                id="password"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                helperText={errors.password}
                placeholder="Enter your Password*"
              />
              <div
                className={classes.forgot}
                aria-hidden="true"
              >
                <span style={{ color: '#ff3f6c' }}>Forgot Password?</span>
              </div>
              <ActionButton
                kind="PRIMARY"
                type="submit"
                label={
                  loading ? (
                    <ClipLoader color="#ffffff" loading size={20} />
                  ) : (
                    'login'
                  )
                }
                style={{
                  width: '100%',
                  padding: '6px 45px',
                  borderRadius: '0px',
                }}
              />
            </form>
            <div
              className={classes.signup}
              onClick={signUpPage}
              aria-hidden="true"
            >
              New user?&nbsp;
              <span style={{ color: '#ff3f6c' }}><b>Sign Up here</b></span>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
