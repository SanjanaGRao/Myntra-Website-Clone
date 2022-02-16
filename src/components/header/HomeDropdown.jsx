/**
* Dropdown of the menu 'Home & Living' of the Myntra Website
* Gives the dropdown menu of the category 'Home & Living' and has various sub-categories
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
  useStyles, MenuBold, MenuBold2, HeadingHome, HeadingHome2,
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

export default function HomeDropdown() {
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
            <div className={`${classes.catContainerHome}`}>
              <span>
                <b>HOME&LIVING</b>
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
              <HeadingHome>
                <b>Bed Linen & Furnishing </b>
              </HeadingHome>
              <MenuBold> Bedsheets</MenuBold>
              <MenuBold> Bedding Sets</MenuBold>
              <MenuBold> Blankets, Quilts & Dohars</MenuBold>
              <MenuBold> Pillows & Pillow Covers</MenuBold>
              <MenuBold> Bed Covers</MenuBold>
              <MenuBold> Diwan Sets</MenuBold>
              <MenuBold> Chair Pads & Covers</MenuBold>
              <MenuBold> Sofa Covers </MenuBold>
              <ColoredLine color="rgba(245,245,246,.4)" />
              <HeadingHome>
                <b>Flooring </b>
              </HeadingHome>
              <MenuBold>Carpets</MenuBold>
              <MenuBold>Floor Mats & Dhurries</MenuBold>
              <MenuBold>Door Mats</MenuBold>
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
              <HeadingHome2>
                <b>Bath </b>
              </HeadingHome2>
              <MenuBold2>Bath Towels</MenuBold2>
              <MenuBold2>Hand & Face Towels</MenuBold2>
              <MenuBold2>Beach Towels</MenuBold2>
              <MenuBold2>Towels Set</MenuBold2>
              <MenuBold2>Bath Rugs</MenuBold2>
              <MenuBold2>Bath Robes</MenuBold2>
              <MenuBold2>Bathroom Accessories</MenuBold2>
              <MenuBold2>Shower Curtains</MenuBold2>
              <ColoredLine color="rgba(245,245,246,.4)" />
              <HeadingHome2>
                <b>Lamps & Lighting </b>
              </HeadingHome2>
              <MenuBold2>Floor Lamps</MenuBold2>
              <MenuBold2>Ceiling Lamps</MenuBold2>
              <MenuBold2>Table Lamps</MenuBold2>
              <MenuBold2>Wall Lamps</MenuBold2>
              <MenuBold2>Outdoor Lamps</MenuBold2>
              <MenuBold2>String Lights</MenuBold2>
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
              <HeadingHome>
                <b>Home Décor </b>
              </HeadingHome>
              <MenuBold> Plants & Planters</MenuBold>
              <MenuBold> Aromas & Candles</MenuBold>
              <MenuBold> Clocks</MenuBold>
              <MenuBold> Mirrors</MenuBold>
              <MenuBold> Wall Décor</MenuBold>
              <MenuBold> Festive Decor</MenuBold>
              <MenuBold> Pooja Essentials</MenuBold>
              <MenuBold> Wall Shelves</MenuBold>
              <MenuBold> Fountains</MenuBold>
              <MenuBold> Showpieces & Vases</MenuBold>
              <ColoredLine color="rgba(245,245,246,.4)" />
              <HeadingHome>
                <b>Cushions & Cushion Covers </b>
              </HeadingHome>
              <HeadingHome>
                <b>Curtains </b>
              </HeadingHome>
              <HeadingHome>
                <b>Home Gift Set </b>
              </HeadingHome>
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
              <HeadingHome2>
                <b>Kitchen & Table </b>
              </HeadingHome2>
              <MenuBold2>Dinnerware & Serveware</MenuBold2>
              <MenuBold2>Cups and Mugs</MenuBold2>
              <MenuBold2>Bakeware & Cookware</MenuBold2>
              <MenuBold2> Kitchen Storage & Tools</MenuBold2>
              <MenuBold2>Bar & Drinkware</MenuBold2>
              <MenuBold2>Table Covers & Furnishings</MenuBold2>
              <ColoredLine color="rgba(245,245,246,.4)" />
              <HeadingHome2>
                <b>Storeage </b>
              </HeadingHome2>
              <MenuBold2>Organisers</MenuBold2>
              <MenuBold2>Hooks & Holders</MenuBold2>
              <MenuBold2>Laundry Bags</MenuBold2>
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
              <HeadingHome>
                <b>Brands </b>
              </HeadingHome>
              <MenuBold>Home Centre</MenuBold>
              <MenuBold>Spaces</MenuBold>
              <MenuBold>D&apso;Decor</MenuBold>
              <MenuBold>Portico New York</MenuBold>
              <MenuBold>Story@Home</MenuBold>
              <MenuBold>Pure Home & Living</MenuBold>
              <MenuBold>Swayam</MenuBold>
              <MenuBold>Raymond Home</MenuBold>
              <MenuBold>Maspar</MenuBold>
              <MenuBold>Corelle</MenuBold>
              <MenuBold>Trident</MenuBold>
              <MenuBold>Cortina</MenuBold>
              <MenuBold>Random</MenuBold>
              <MenuBold>Ellementry</MenuBold>
              <MenuBold>ROMEE</MenuBold>
              <MenuBold>SEJ by Nisha Gupta</MenuBold>
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
