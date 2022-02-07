/**
* Dropdown of the menu 'Men' of the Myntra Website
* Gives the dropdown menu of the category 'Men' and has various sub-categories
* @returns the dropdown menu with sub-categories
* @author Sanjana Rao
*/
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

/**
 * @description Makes use of makeStyles from MUI to generate custom styling to components
 */
const useStyles = makeStyles(() => ({
  catContainerMen: {
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
}));

/**
 * @description Makes use of styled from MUI to generate custom styling to Menu items
 */
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

/**
 * @description Makes use of styled from MUI to generate custom styling to Menu items
 */
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

/**
 * @description Makes use of styled from MUI to generate custom styling to heading in Menu items
 */
const Heading = styled(MenuItem)(() => ({
  fontSize: '14px',
  fontFamily:
    ' Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif',
  color: '#ee5f73',
  '&:hover': {
    color: '#ee5f73',
    background: '#fff',
  },
}));

/**
 * @description Makes use of styled from MUI to generate custom styling to heading in Menu items
 */
const Heading2 = styled(MenuItem)(() => ({
  fontSize: '14px',
  fontFamily:
    ' Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif',
  color: '#ee5f73',
  '&:hover': {
    color: '#ee5f73',
    background: 'rgba(245,245,246,.4)',
  },
}));

/**
 * @description Function to draw a line with certain specifications
 */
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

export default function MenDropdown() {
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
            <div className={`${classes.catContainerMen}`}>
              <span>
                <b>MEN</b>
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
                <b>Topwear </b>
              </Heading>
              <MenuBold>T-Shirts</MenuBold>
              <MenuBold>Casual Shirts</MenuBold>
              <MenuBold>Formal Shirts</MenuBold>
              <MenuBold>Sweatshirts</MenuBold>
              <MenuBold>Sweaters</MenuBold>
              <MenuBold>Jackets</MenuBold>
              <MenuBold>Blazers & Coats</MenuBold>
              <MenuBold>Suits</MenuBold>
              <MenuBold>Rain Jackets</MenuBold>
              <ColoredLine color="rgba(245,245,246,.4)" />
              <Heading>
                <b>Indian & Festive Wear </b>
              </Heading>
              <MenuBold>Kurtas & Kurta Sets</MenuBold>
              <MenuBold>Sherwanis</MenuBold>
              <MenuBold>Nehru Jackets</MenuBold>
              <MenuBold>Dhotis</MenuBold>
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
                <b>Bottomwear </b>
              </Heading2>
              <MenuBold2>Jeans</MenuBold2>
              <MenuBold2>Casual Trousers</MenuBold2>
              <MenuBold2>Formal Trousers</MenuBold2>
              <MenuBold2>Shorts</MenuBold2>
              <MenuBold2>Track Pants & Joggers</MenuBold2>
              <ColoredLine color="rgba(245,245,246,.4)" />
              <Heading2>
                <b>Innerwear & Sleepwear </b>
              </Heading2>
              <MenuBold2>Briefs & Trunks</MenuBold2>
              <MenuBold2>Boxers</MenuBold2>
              <MenuBold2>Vests</MenuBold2>
              <MenuBold2>Sleepwear & Loungewear</MenuBold2>
              <MenuBold2>Thermals</MenuBold2>
              <ColoredLine color="rgba(245,245,246,.4)" />
              <Heading2>
                <b>Plus Size </b>
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
                <b>Footwear </b>
              </Heading>
              <MenuBold>Casual Shoes</MenuBold>
              <MenuBold>Sports Shoes</MenuBold>
              <MenuBold>Formal Shoes</MenuBold>
              <MenuBold>Sneakers</MenuBold>
              <MenuBold>Sandals & Floaters</MenuBold>
              <MenuBold>Flip Flops</MenuBold>
              <MenuBold>Socks</MenuBold>
              <ColoredLine color="rgba(245,245,246,.4)" />
              <Heading>
                <b>Personal Care & Grooming </b>
              </Heading>
              <Heading>
                <b>Sunglasses & Frames </b>
              </Heading>
              <Heading>
                <b>Watches </b>
              </Heading>
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
                <b>Sports & Active Wear </b>
              </Heading2>
              <MenuBold2>Sports Shoes</MenuBold2>
              <MenuBold2>Sports Sandals</MenuBold2>
              <MenuBold2>Active T-Shirts</MenuBold2>
              <MenuBold2>Track Pants & Shorts</MenuBold2>
              <MenuBold2>Tracksuits</MenuBold2>
              <MenuBold2>Jackets & Sweatshirts</MenuBold2>
              <MenuBold2>Sports Accessories</MenuBold2>
              <MenuBold2>Swimwear</MenuBold2>
              <ColoredLine color="rgba(245,245,246,.4)" />
              <Heading2>
                <b>Gadgets </b>
              </Heading2>
              <MenuBold2>Smart Wearables</MenuBold2>
              <MenuBold2>Fitness Gadgets</MenuBold2>
              <MenuBold2>Headphones</MenuBold2>
              <MenuBold2>Speakers</MenuBold2>
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
                <b>Fashion Accessories </b>
              </Heading>
              <MenuBold>Wallets</MenuBold>
              <MenuBold>Belts</MenuBold>
              <MenuBold>Perfumes & Body Mists</MenuBold>
              <MenuBold>Trimmers</MenuBold>
              <MenuBold>Deodorants</MenuBold>
              <MenuBold>Ties, Cufflinks & Pocket Squares</MenuBold>
              <MenuBold>Accessory Gift Sets</MenuBold>
              <MenuBold>Caps & Hats</MenuBold>
              <MenuBold>Mufflers, Scarves & Gloves</MenuBold>
              <MenuBold>Phone Cases</MenuBold>
              <MenuBold>Rings & Wristwear</MenuBold>
              <MenuBold>Helmets</MenuBold>
              <ColoredLine color="rgba(245,245,246,.4)" />
              <Heading>
                <b>Bags & Bagpacks </b>
              </Heading>
              <Heading>
                <b>Luggages & Trolleys </b>
              </Heading>
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
