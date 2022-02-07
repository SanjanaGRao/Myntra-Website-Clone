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
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@material-ui/core';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Neww from '../../assets/new_icon.png';
/**
 * @description Makes use of makeStyles from MUI to generate custom styling to components
 */
const useStyles = makeStyles(() => ({
  catContainerProfile: {
    fontSize: '14px',
    paddingLeft: '1.3em',
    fontFamily:
              ' Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif',
    color: '#3e4152',
  },
}));

/**
 * @description Makes use of styled from MUI to generate custom styling to a button
 */
const LoginButton = styled(Button)(() => ({
  color: '#ff3f6c',
  borderColor: '#eaeaec',
  borderRadius: '2px',
  '&:hover': {
    borderColor: '#ff3f6c',
  },
}));

/**
 * @description Makes use of styled from MUI to generate custom styling to Menu items
 */
const MenuBold = styled(MenuItem)(() => ({
  fontSize: '14px',
  fontFamily: ' Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif',
  color: '#3e4152',
  '&:hover': {
    color: '#3e4152',
    fontWeight: '700',
    background: 'white',
  },
}));

export default function Profile() {
  const classes = useStyles();
  const [dropDownOpen, setDropDownOpen] = React.useState(null);
  const open = Boolean(dropDownOpen);

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
    window.location = '/login';
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
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <span className={classes.catContainerProfile}>
          {' '}
          <b>Welcome</b>
          {' '}
        </span>
        <br />
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
        <br />
        <Divider />
        <MenuBold>
          {' '}
          Orders
          {' '}
        </MenuBold>
        <MenuBold>
          {' '}
          Wishlist
          {' '}
        </MenuBold>
        <MenuBold>
          {' '}
          Gift Cards
          {' '}
        </MenuBold>
        <MenuBold>
          {' '}
          Contact Us
          {' '}
        </MenuBold>
        <MenuBold>
          {' '}
          Myntra Insider &nbsp;&nbsp;
          <img src={Neww} alt="new_icon" className="new_icon_logo" />
        </MenuBold>
        <Divider />
        <MenuBold>
          {' '}
          Myntra Credit
          {' '}
        </MenuBold>
        <MenuBold>
          {' '}
          Coupons
          {' '}
        </MenuBold>
        <MenuBold>
          {' '}
          Saved Addresses
          {' '}
        </MenuBold>
        <MenuBold>
          {' '}
          Logout
          {' '}
        </MenuBold>
      </Menu>
    </>
  );
}
