/**
* Dropdown of the menu 'Women' of the Myntra Website
* Gives the dropdown menu of the category 'Women' and has various sub-categories
* @returns the dropdown menu with sub-categories
* @author Sanjana Rao
*/
import * as React from 'react';
import './appbar.css';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import {
  useStyles, MenuBold, MenuBold2, HeadingWomen, HeadingWomen2,
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

export default function WomenDropdown() {
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
            <div className={`${classes.catContainerWomen}`}>
              <span>
                <b>WOMEN</b>
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
              <HeadingWomen>
                <b>Indian & Fusion Wear </b>
              </HeadingWomen>
              <MenuBold>Kurtas & Suits</MenuBold>
              <MenuBold>Kurtis, Tunics & Tops</MenuBold>
              <MenuBold>Ethnic Wear</MenuBold>
              <MenuBold>Leggings, Salwars & Churidars</MenuBold>
              <MenuBold>Skirts & Palazzos</MenuBold>
              <MenuBold>Sarees</MenuBold>
              <MenuBold>Dress Materials</MenuBold>
              <MenuBold>Lehenga Cholis</MenuBold>
              <MenuBold>Dupattas & Shawls</MenuBold>
              <MenuBold>Jackets</MenuBold>
              <ColoredLine color="rgba(245,245,246,.4)" />
              <HeadingWomen>
                <b>Belts, Scarves & More </b>
              </HeadingWomen>
              <HeadingWomen>
                <b>Watches & Wearables </b>
              </HeadingWomen>
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
              <HeadingWomen2>
                <b>Western Wear </b>
              </HeadingWomen2>
              <MenuBold2>Dresses</MenuBold2>
              <MenuBold2>Jumpsuits</MenuBold2>
              <MenuBold2>Tops</MenuBold2>
              <MenuBold2>Jeans</MenuBold2>
              <MenuBold2>Trousers & Capris</MenuBold2>
              <MenuBold2>Shorts & Skirts</MenuBold2>
              <MenuBold2>Shrugs</MenuBold2>
              <MenuBold2>Sweaters & Sweatshirts</MenuBold2>
              <MenuBold2>Jackets & Coats</MenuBold2>
              <MenuBold2>Blazers & Waistcoats</MenuBold2>
              <ColoredLine color="rgba(245,245,246,.4)" />
              <HeadingWomen2>
                <b>Plus Size </b>
              </HeadingWomen2>
              <HeadingWomen2>
                <b>Sunglasses & Frames </b>
              </HeadingWomen2>
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
              <HeadingWomen>
                <b>Footwear </b>
              </HeadingWomen>
              <MenuBold>Flats</MenuBold>
              <MenuBold>Casual Shoes</MenuBold>
              <MenuBold>Heels</MenuBold>
              <MenuBold>Boots</MenuBold>
              <MenuBold>Sports Shoes & Floaters</MenuBold>
              <ColoredLine color="rgba(245,245,246,.4)" />
              <HeadingWomen>
                <b>Sports & Active Wear </b>
              </HeadingWomen>
              <MenuBold>Clothing</MenuBold>
              <MenuBold>Footwear</MenuBold>
              <MenuBold>Sports Accessories</MenuBold>
              <MenuBold>Sports Equipment</MenuBold>
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
              <HeadingWomen2>
                <b>Lingerie & Sleepwear </b>
              </HeadingWomen2>
              <MenuBold2>Bra</MenuBold2>
              <MenuBold2>Briefs</MenuBold2>
              <MenuBold2>Shapewear</MenuBold2>
              <MenuBold2>Sleepwear & Loungewear</MenuBold2>
              <MenuBold2>Swimwear</MenuBold2>
              <MenuBold2>Camisoles & Thermals</MenuBold2>
              <ColoredLine color="rgba(245,245,246,.4)" />
              <HeadingWomen2>
                <b>Beauty & Personal Care </b>
              </HeadingWomen2>
              <MenuBold2>Makeup</MenuBold2>
              <MenuBold2>Skincare</MenuBold2>
              <MenuBold2>Premium Beauty</MenuBold2>
              <MenuBold2>Lipsticks</MenuBold2>
              <MenuBold2>Fragrances</MenuBold2>
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
              <HeadingWomen>
                <b>Gadgets </b>
              </HeadingWomen>
              <MenuBold>Smart Wearables</MenuBold>
              <MenuBold>Fitness Gadgets</MenuBold>
              <MenuBold>Headphones</MenuBold>
              <MenuBold>Speakers</MenuBold>
              <ColoredLine color="rgba(245,245,246,.4)" />
              <HeadingWomen>
                <b>Jewellery </b>
              </HeadingWomen>
              <MenuBold>Fashion Jewellery</MenuBold>
              <MenuBold>Fine Jewellery</MenuBold>
              <MenuBold>Earrings</MenuBold>
              <ColoredLine color="rgba(245,245,246,.4)" />
              <HeadingWomen>
                <b>Bagpacks </b>
              </HeadingWomen>
              <HeadingWomen>
                <b>Handbags, Bags & Wallets </b>
              </HeadingWomen>
              <HeadingWomen>
                <b>Luggages & Trolleys </b>
              </HeadingWomen>
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
