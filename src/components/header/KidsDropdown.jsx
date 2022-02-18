/**
* Dropdown of the menu 'Kids' of the Myntra Website
* Gives the dropdown menu of the category 'Kids' and has various sub-categories
* @returns the dropdown menu with sub-categories
* @author Sanjana Rao
*/
import * as React from 'react';
import './appbar.css';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import {
  useStyles, MenuBold, MenuBold2, HeadingKids, HeadingKids2,
} from './styles';

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

export default function KidsDropdown() {
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
          <div className={`${classes.catContainerKids}`}>
            <span>
              <b>KIDS</b>
            </span>
          </div>
        </IconButton>
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
              <HeadingKids>
                <b>Boys Clothing </b>
              </HeadingKids>
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
              <HeadingKids2>
                <b>Girls Clothing </b>
              </HeadingKids2>
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
              <HeadingKids>
                <b>Footwear </b>
              </HeadingKids>
              <MenuBold>Casual Shoes</MenuBold>
              <MenuBold>Flipflops</MenuBold>
              <MenuBold>Sports Shoes</MenuBold>
              <MenuBold>Flats</MenuBold>
              <MenuBold>Sandals</MenuBold>
              <MenuBold>Heels</MenuBold>
              <MenuBold>School Shoes</MenuBold>
              <MenuBold>Socks</MenuBold>
              <ColoredLine color="rgba(245,245,246,.4)" />
              <HeadingKids>
                <b>Toys </b>
              </HeadingKids>
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
              <HeadingKids>
                <b>Infants </b>
              </HeadingKids>
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
              <HeadingKids2>
                <b>Home & Bath </b>
              </HeadingKids2>
              <HeadingKids2>
                <b>Personal Care </b>
              </HeadingKids2>
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
              <HeadingKids>
                <b>Kids Accessories </b>
              </HeadingKids>
              <MenuBold>Bags & Backpacks</MenuBold>
              <MenuBold>Watches</MenuBold>
              <MenuBold>Jewellery & Hair accessory</MenuBold>
              <MenuBold>Sunglasses</MenuBold>
              <MenuBold>Masks & Protective Gears</MenuBold>
              <MenuBold>Caps & Hats</MenuBold>
              <ColoredLine color="rgba(245,245,246,.4)" />
              <HeadingKids>
                <b>Brands </b>
              </HeadingKids>
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
