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
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import {
  useStyles, MenuBold, MenuBold2, HeadingMen, HeadingMen2,
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
              <HeadingMen>
                <b>Topwear </b>
              </HeadingMen>
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
              <HeadingMen>
                <b>Indian & Festive Wear </b>
              </HeadingMen>
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
              <HeadingMen2>
                <b>Bottomwear </b>
              </HeadingMen2>
              <MenuBold2>Jeans</MenuBold2>
              <MenuBold2>Casual Trousers</MenuBold2>
              <MenuBold2>Formal Trousers</MenuBold2>
              <MenuBold2>Shorts</MenuBold2>
              <MenuBold2>Track Pants & Joggers</MenuBold2>
              <ColoredLine color="rgba(245,245,246,.4)" />
              <HeadingMen2>
                <b>Innerwear & Sleepwear </b>
              </HeadingMen2>
              <MenuBold2>Briefs & Trunks</MenuBold2>
              <MenuBold2>Boxers</MenuBold2>
              <MenuBold2>Vests</MenuBold2>
              <MenuBold2>Sleepwear & Loungewear</MenuBold2>
              <MenuBold2>Thermals</MenuBold2>
              <ColoredLine color="rgba(245,245,246,.4)" />
              <HeadingMen2>
                <b>Plus Size </b>
              </HeadingMen2>
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
              <HeadingMen>
                <b>Footwear </b>
              </HeadingMen>
              <MenuBold>Casual Shoes</MenuBold>
              <MenuBold>Sports Shoes</MenuBold>
              <MenuBold>Formal Shoes</MenuBold>
              <MenuBold>Sneakers</MenuBold>
              <MenuBold>Sandals & Floaters</MenuBold>
              <MenuBold>Flip Flops</MenuBold>
              <MenuBold>Socks</MenuBold>
              <ColoredLine color="rgba(245,245,246,.4)" />
              <HeadingMen>
                <b>Personal Care & Grooming </b>
              </HeadingMen>
              <HeadingMen>
                <b>Sunglasses & Frames </b>
              </HeadingMen>
              <HeadingMen>
                <b>Watches </b>
              </HeadingMen>
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
              <HeadingMen2>
                <b>Sports & Active Wear </b>
              </HeadingMen2>
              <MenuBold2>Sports Shoes</MenuBold2>
              <MenuBold2>Sports Sandals</MenuBold2>
              <MenuBold2>Active T-Shirts</MenuBold2>
              <MenuBold2>Track Pants & Shorts</MenuBold2>
              <MenuBold2>Tracksuits</MenuBold2>
              <MenuBold2>Jackets & Sweatshirts</MenuBold2>
              <MenuBold2>Sports Accessories</MenuBold2>
              <MenuBold2>Swimwear</MenuBold2>
              <ColoredLine color="rgba(245,245,246,.4)" />
              <HeadingMen2>
                <b>Gadgets </b>
              </HeadingMen2>
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
              <HeadingMen>
                <b>Fashion Accessories </b>
              </HeadingMen>
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
              <HeadingMen>
                <b>Bags & Bagpacks </b>
              </HeadingMen>
              <HeadingMen>
                <b>Luggages & Trolleys </b>
              </HeadingMen>
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
