/**
* Dropdown of the menu 'Studio' of the Myntra Website
* Gives the dropdown menu of the category 'Studio' and has various sub-categories
* @returns the dropdown menu with sub-categories
* @author Sanjana Rao
*/
import * as React from 'react';
import './appbar.css';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import StudioImg from '../../assets/studio_img.png';

/**
 * @description Makes use of makeStyles from MUI to generate custom styling to components
 */
const useStyles = makeStyles(() => ({
  catContainerStudio: {
    paddingTop: '1.65em',
    color: '#282c3f',
    fontSize: '14px',
    letterSpacing: '0.5px',
    fontFamily:
      'Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    fontWeight: '500',
    textTransform: 'uppercase',
    '&:hover ': {
      borderBottom: '4px solid #ee5f73',
    },
  },
  newSign: {
    color: '#ff3f6c',
    top: '-0.4rem',
    fontSize: '65%',
    lineHeight: '0',
    position: 'relative',
    verticalAlign: 'baseline',
    textTransform: 'uppercase',
  },
}));

/**
 * @description Makes use of styled from MUI to generate custom styling to a button
 */
const ExploreButton = styled(Button)(() => ({
  color: 'black',
  fontFamily:
      'Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
  border: '1px solid #d4d5d8',
  borderRadius: '2px',
  '&:hover': {
    borderColor: '#d4d5d8',
  },
}));

export default function StudioDropdown() {
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

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip>
          <IconButton
            onClick={handleClick}
            className="navItems"
            onMouseOver={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : 'false'}
          >
            <div className={`${classes.catContainerStudio}`}>
              <span>
                <b>Studio</b>
                <span className={classes.newSign}>
                  <b>New</b>
                </span>
              </span>
            </div>
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
            filter: 'drop-shadow(0px 2px 6px rgba(0,0,0,0.32))',
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
      >
        <Grid container>
          <Grid item>
            <img src={StudioImg} alt="studio_image" className="studio_img_logo" width="450" height="320" />
            <br />
            <div style={{ paddingTop: '0.5em', paddingLeft: '8.8em' }}>
              <ExploreButton variant="outlined">
                <b>EXPLORE STUDIO</b>
                <span>
                  <b>{'>'}</b>
&nbsp;&nbsp;
                  {' '}
                </span>
              </ExploreButton>
            </div>
            <br />
          </Grid>
        </Grid>
      </Menu>
    </>
  );
}
