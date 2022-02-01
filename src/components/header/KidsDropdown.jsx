import * as React from 'react';
import './appbar.css';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  catContainerKids: {
    paddingTop: '1.65em',
    color: '#282c3f',
    fontSize: '14px',
    letterSpacing: '0.5px',
    fontFamily:
      'Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    fontWeight: '500',
    textTransform: 'uppercase',
    '&:hover ': {
      borderBottom: '4px solid #f26a10',
    },
  },
}));

const MenuBold = styled(MenuItem)(() => ({
  fontSize: '14px',
  paddingTop: '2px',
  paddingBottom: '2px',
  paddingRight: '6px',
  fontFamily:
    ' Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif',
  color: '#3e4152',
  '&:hover': {
    color: '#3e4152',
    fontWeight: '700',
    background: 'white',
  },
}));

const MenuBold2 = styled(MenuItem)(() => ({
  fontSize: '14px',
  paddingTop: '2px',
  paddingBottom: '2px',
  paddingRight: '6px',
  fontFamily:
    ' Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif',
  color: '#3e4152',
  '&:hover': {
    color: '#3e4152',
    fontWeight: '700',
    background: 'rgba(245,245,246,.4)',
  },
}));

const Heading = styled(MenuItem)(() => ({
  fontSize: '14px',
  fontFamily:
    ' Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif',
  color: '#f26a10',
  '&:hover': {
    color: '#f26a10',
    background: '#fff',
  },
}));

const Heading2 = styled(MenuItem)(() => ({
  fontSize: '14px',
  fontFamily:
    ' Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif',
  color: '#f26a10',
  '&:hover': {
    color: '#f26a10',
    background: 'rgba(245,245,246,.4)',
  },
}));

function ColoredLine({ color }) {
  return (
    <hr
      style={{
        color,
        backgroundColor: color,
        width: '185px',
      }}
    />
  );
}

export default function KidsDropdown() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip>
          <IconButton
            onClick={handleClick}
            className="nav_items"
            onMouseOver={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <div className={`${classes.catContainerKids}`}>
              <span>
                <b>KIDS</b>
              </span>
            </div>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
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
      >
        <Grid container>
          <Grid item>
            <div
              style={{
                backgroundColor: '#fff',
                padding: '6px',
                height: '440px',
                width: '220px',
              }}
            >
              <Heading>
                <b>Boys Clothing </b>
              </Heading>
              <MenuBold>T-Shirts</MenuBold>
              <MenuBold>Shirts</MenuBold>
              <MenuBold>Shorts</MenuBold>
              <MenuBold>Jeans</MenuBold>
              <MenuBold>Trousers</MenuBold>
              <MenuBold>Clothing Sets</MenuBold>
              <MenuBold>Ethnic Wear</MenuBold>
              <MenuBold>Track Pants & Pyjamas</MenuBold>
              <MenuBold>Jacket, Sweater & Sweatshirts</MenuBold>
              <MenuBold>Party Wear</MenuBold>
              <MenuBold>Innerwear & Thermals</MenuBold>
              <MenuBold>Nightwear & Loungewear</MenuBold>
              <MenuBold>Value Packs</MenuBold>
            </div>
          </Grid>
          <Grid item>
            <div
              style={{
                backgroundColor: 'rgba(245,245,246,.4)',
                padding: '6px',
                height: '440px',
                width: '220px',
              }}
            >
              <Heading2>
                <b>Girls Clothing </b>
              </Heading2>
              <MenuBold2>Dresses</MenuBold2>
              <MenuBold2>Tops</MenuBold2>
              <MenuBold2>Tshirts</MenuBold2>
              <MenuBold2>Clothing Sets</MenuBold2>
              <MenuBold2>Lehenga choli</MenuBold2>
              <MenuBold2>Kurta Sets</MenuBold2>
              <MenuBold2>Party wear</MenuBold2>
              <MenuBold2>Dungarees & Jumpsuits</MenuBold2>
              <MenuBold2>Skirts & shorts</MenuBold2>
              <MenuBold2>Tights & Leggings</MenuBold2>
              <MenuBold2>Jeans, Trousers & Capris</MenuBold2>
              <MenuBold2>Jacket, Sweater & Sweatshirts</MenuBold2>
              <MenuBold2>Innerwear & Thermals</MenuBold2>
              <MenuBold2>Nightwear & Loungewear</MenuBold2>
              <MenuBold2>Value Packs</MenuBold2>
            </div>
          </Grid>
          <Grid item>
            <div
              style={{
                backgroundColor: '#fff',
                padding: '6px',
                height: '440px',
                width: '220px',
              }}
            >
              <Heading>
                <b>Footwear </b>
              </Heading>
              <MenuBold>Casual Shoes</MenuBold>
              <MenuBold>Flipflops</MenuBold>
              <MenuBold>Sports Shoes</MenuBold>
              <MenuBold>Flats</MenuBold>
              <MenuBold>Sandals</MenuBold>
              <MenuBold>Heels</MenuBold>
              <MenuBold>School Shoes</MenuBold>
              <MenuBold>Socks</MenuBold>
              <ColoredLine color="rgba(245,245,246,.4)" />
              <Heading>
                <b>Toys </b>
              </Heading>
              <MenuBold>Learning & Development</MenuBold>
              <MenuBold>Activity Toys</MenuBold>
              <MenuBold>Soft Toys</MenuBold>
              <MenuBold>Action Figure / Play set</MenuBold>
            </div>
          </Grid>
          <Grid item>
            <div
              style={{
                backgroundColor: 'rgba(245,245,246,.4)',
                padding: '6px',
                height: '440px',
                width: '220px',
              }}
            >
              <Heading>
                <b>Infants </b>
              </Heading>
              <MenuBold>Bodysuits</MenuBold>
              <MenuBold>Rompers & Sleepsuits</MenuBold>
              <MenuBold>Clothing Sets</MenuBold>
              <MenuBold>Tshirts & Tops</MenuBold>
              <MenuBold>Dresses</MenuBold>
              <MenuBold>Bottom wear</MenuBold>
              <MenuBold>Winter Wear</MenuBold>
              <MenuBold>Innerwear & Sleepwear</MenuBold>
              <MenuBold>Infant Care</MenuBold>
              <ColoredLine color="rgba(245,245,246,.4)" />
              <Heading2>
                <b>Home & Bath </b>
              </Heading2>
              <Heading2>
                <b>Personal Care </b>
              </Heading2>
            </div>
          </Grid>
          <Grid item>
            <div
              style={{
                backgroundColor: '#fff',
                padding: '6px',
                height: '440px',
                width: '220px',
              }}
            >
              <Heading>
                <b>Kids Accessories </b>
              </Heading>
              <MenuBold>Bags & Backpacks</MenuBold>
              <MenuBold>Watches</MenuBold>
              <MenuBold>Jewellery & Hair accessory</MenuBold>
              <MenuBold>Sunglasses</MenuBold>
              <MenuBold>Masks & Protective Gears</MenuBold>
              <MenuBold>Caps & Hats</MenuBold>
              <ColoredLine color="rgba(245,245,246,.4)" />
              <Heading>
                <b>Brands </b>
              </Heading>
              <MenuBold>H&M</MenuBold>
              <MenuBold>Max Kids</MenuBold>
              <MenuBold>Pantaloons</MenuBold>
              <MenuBold>United Colors Of Benetton Kids</MenuBold>
              <MenuBold>YK</MenuBold>
              <MenuBold>U.S. Polo Assn. Kids</MenuBold>
              <MenuBold>Mothercare</MenuBold>
              <MenuBold>HRX</MenuBold>
            </div>
          </Grid>
        </Grid>
      </Menu>
    </>
  );
}
ColoredLine.propTypes = {
  color: PropTypes.string,
};
ColoredLine.defaultProps = {
  color: 'rgba(245,245,246,.4)',
};
