/**
* Sign Up Page of the Myntra Website
* The original Sign Up page also contains OTP Verification,
* for simplicity username, email and password is used.
* @returns a sign up page with link for login page
* @author Sanjana Rao
*/
/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@mui/material';
import { ClipLoader } from 'react-spinners';
import { useHistory } from 'react-router-dom';
import useForm from '../../utils/formValidation';
import validate from '../../utils/loginValidation';
import { signUp } from '../../service/userService';
import loginStatus from '../../actions/userActions';
import Appbar from '../header/Appbar';
import InputBox from '../commonComponents/InputBox';
import ActionButton from '../commonComponents/ActionButton';
import logo from '../../assets/login.webp';

/**
 * @description Makes use of makeStyles from MUI to generate custom styling to components
 */
const useStyles = makeStyles(() => ({
  backdrop: {
    color: '#fff',
    position: 'absolute',
    zIndex: 100,
  },
  root: {
    backgroundColor: '#FFE6F3',
    height: '100vh',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5vh',
  },
  content: {
    width: '400px',
  },
  bannerContainer: {
    height: '160px',
    backgroundColor: '#FFF9E7',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    width: '100%',
    height: '250px',
  },
  loginLabel: {
    marginBottom: '20px',
    fontWeight: 550,
    fontFamily: 'WhitneySSm',
    color: '#424553',
    fontSize: '20px',
  },
  loginContainer: {
    padding: '30px',
    backgroundColor: '#fff',
  },
  primaryBtn: {
    color: '#fff',
    backgroundColor: '#ff3e6c',
    borderColor: '#ff3e6c',
    fontWeight: 600,
    padding: '12px',
    marginRight: '20px',
    '&:hover': {
      backgroundColor: '#ec5e80',
    },
  },
  signup: {
    fontFamily: 'WhitneySSm,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
    fontSize: '13px',
    lineHeight: '1.42857143',
    color: '#424553',
    textAlign: 'center',
    marginTop: '4px',
    cursor: 'pointer',
  },
  forgot: {
    fontFamily: 'WhitneySSm,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
    fontSize: '13px',
    lineHeight: '1.42857143',
    color: '#424553',
    textAlign: 'right',
    cursor: 'pointer',
    paddingBottom: '1em',
  },
}));

export default function Signup() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  // Function to connect with strapi as well as to know if the user has logged in or not via redux
  const handleSignup = () => {
    signUp(values.name, values.email, values.password);
    dispatch(loginStatus());
    setLoading(false);
    history.push('/login');
  };
  const {
    values, errors, handleChange, handleSubmit,
  } = useForm(
    handleSignup,
    validate,
  );

  // Routing function to visit loginPage when clicked
  const loginPage = () => {
    window.location = '/login';
  };

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
              Sign Up
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
                id="name"
                name="name"
                fullWidth
                required
                value={values.name || ''}
                onChange={handleChange}
                helperText={errors.name}
                placeholder="Enter your Full Name*"
              />
              {' '}
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
              <ActionButton
                kind="PRIMARY"
                type="submit"
                label={
                  loading ? (
                    <ClipLoader color="#ffffff" loading size={20} />
                  ) : (
                    'Sign Up'
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
              onClick={loginPage}
              aria-hidden="true"
            >
              Already have an account?&nbsp;
              <span style={{ color: '#ff3f6c' }}><b>Login here</b></span>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
