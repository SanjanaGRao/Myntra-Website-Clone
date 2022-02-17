/**
* Dropdown of the menu 'Profile' of the Myntra Website
* Gives the dropdown menu of the category 'Profile' and has various sub-categories
* @returns the dropdown menu with sub-categories
* @author Sanjana Rao
*/
import * as React from 'react';
import './appbar.css';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Tooltip from '@mui/material/Tooltip';
import { useHistory } from 'react-router-dom';
import { loginStatus } from '../../actions/userActions';
import Neww from '../../assets/new_icon.png';
import { removeUserSession } from '../../utils/tokenOperations';
import {
  useStyles, MenuBoldProfile, LoginButton,
} from './styles';

export default function Profile() {
  const classes = useStyles();
  const [dropDownOpen, setDropDownOpen] = React.useState(null);
  const open = Boolean(dropDownOpen);
  const login = useSelector((state) => state.login.isLogin);
  const userEmail = localStorage.getItem('email');
  const dispatch = useDispatch();
  const history = useHistory();

  // Function for the dropdown menus to show when clicked
  const handleClick = (event) => {
    setDropDownOpen(event.currentTarget);
  };

  // Function for the dropdown menu to close when not needed
  const handleClose = () => {
    setDropDownOpen(null);
  };

  // Function to go to login page when clicked
  const loginPage = () => {
    history.push('/login');
  };

  const handleLogout = () => {
    removeUserSession();
    dispatch(loginStatus());
    history.push('/');
  };

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip>
          <IconButton
            onClick={handleClick}
            onMouseOver={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : 'false'}
          >
            <PermIdentityIcon className="headerIdentity" />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={dropDownOpen}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        onMouseLeave={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transparency: '50%',
              zIndex: 0,
            },
            '&:hover': {
              color: 'black',
            },
          },
        }}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      >
        <span className={classes.catContainerProfile}>
          {' '}
          <b>Welcome</b>
          {' '}
        </span>
        <br />
        { (login) ? (
          <div>
            <span className={classes.catContainerProfile}>{userEmail}</span>
            <br />
          </div>
        )
          : (
            <div>
              <span
                className={classes.catContainerProfile}
              >
                {' '}
                To access account and manage orders &nbsp;&nbsp;&nbsp;&nbsp;
                {' '}
              </span>
              <br />
              <div style={{ paddingTop: '0.5em', paddingLeft: '1.3em' }}>
                <LoginButton variant="outlined" onClick={loginPage}><b>LOGIN / SIGNUP</b></LoginButton>
              </div>
            </div>
          )}
        <br />
        <Divider />
        <MenuBoldProfile>
          {' '}
          Orders
          {' '}
        </MenuBoldProfile>
        <MenuBoldProfile>
          {' '}
          Wishlist
          {' '}
        </MenuBoldProfile>
        <MenuBoldProfile>
          {' '}
          Gift Cards
          {' '}
        </MenuBoldProfile>
        <MenuBoldProfile>
          {' '}
          Contact Us
          {' '}
        </MenuBoldProfile>
        <MenuBoldProfile>
          {' '}
          Myntra Insider &nbsp;
          <img src={Neww} alt="new_icon" className="new_icon_logo" />
          {' '}
        </MenuBoldProfile>
        <Divider />
        <MenuBoldProfile>
          {' '}
          Myntra Credit
          {' '}
        </MenuBoldProfile>
        <MenuBoldProfile>
          {' '}
          Coupons
          {' '}
        </MenuBoldProfile>
        <MenuBoldProfile>
          {' '}
          Saved Addresses
          {' '}
        </MenuBoldProfile>
        <MenuBoldProfile onClick={handleLogout}>
          {' '}
          Logout
          {' '}
        </MenuBoldProfile>
      </Menu>
    </>
  );
}
