/**
 * @description This page contains product details of an item
 * The details of the product are coming from backend and is styles using MUI.
 * @returns a page containing all product details
 * @author Sanjana Rao
 * @since 11-02-2022
 */
import React from 'react';
import './products.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TextField from '@mui/material/TextField';
import deliveryIcon from '../../assets/delivery.png';
import bestIcon from '../../assets/best.png';
import line from '../../assets/line.png';
import paper from '../../assets/paper.png';
import useStyle from './oneProductStyle';
import Appbar from '../../components/header/Appbar';
import Footer from '../../components/footer/FooterMain';
import { setCart } from '../../service/cartService';
import { addToCart } from '../../actions/cartActions';

export default function OneProduct() {
  const classes = useStyle();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.allItems.oneProduct);
  const products = useSelector((state) => state.allItems.products);

  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'right',
  });

  const { vertical, horizontal, open } = state;

  // Function is used to add an item to the cart. The item details are sent to strapi
  const handleClick = (newState, item) => {
    setState({ open: true, ...newState });
    const data = {
      data: {
        ProductID: item.ProductID,
        Brand: item.Brand,
        Title: item.Title,
        Qty: 1,
        discountPrice: item.discountPrice,
        costPrice: item.costPrice,
        discount: item.discount,
        imageURL: item.imageURL,
      },
    };
    setCart(data)
      .then((res) => { dispatch(addToCart(res)); })
      .catch();
  };

  // Function to close the snackbar
  const handleClose = () => {
    setState({ ...state, open: false });
  };
  return (
    <Box className={classes.container}>
      <Appbar />
      { products.length !== 0 ? (
        <>
          <div className="topText">
            <Link to="/">Home</Link>
            <span className="topTextSpan">/</span>
            <Link to={`/dealsOfDay/${products[0].attributes.categoryId}`}>{products[0].attributes.category}</Link>
            <span className="topTextSpan">/</span>
            <span><b>{product.attributes.Brand}</b></span>
          </div>
          <br />
          <Grid container spacing={3} className={classes.productContainer}>
            <Grid item xs={12} md={3} className={classes.productImage}>
              <img className={classes.image} src={product.attributes.imageURL} width="100%" alt="product" />
            </Grid>
            <Grid item xs={12} md={3} className={classes.productImage}>
              <img className={classes.image} src={product.attributes.image2URL} width="100%" alt="product" />
            </Grid>
            <Grid item xs={12} md={6} className={classes.productDesc}>
              <div className={classes.productDetails}>
                <Typography variant="h5" className={classes.desc}><b>{product.attributes.Brand}</b></Typography>
                <Typography variant="subtitle1" className={classes.title}>{product.attributes.Title}</Typography>
                <Typography component="div" className={classes.ratingContainer}>
                  <span className={classes.ratings}>{`${product.attributes.ratings}`}</span>
                  <StarIcon className={classes.star} fontSize="small" />
                  <span className={classes.raters}>
                    |
                    {' '}
                    {`${product.attributes.raters}`}
                    {' '}
                    Ratings
                  </span>
                </Typography>
                <br />
                <img src={line} alt="line" width="80%" />
                <Typography component="div" className={classes.priceContainer}>
                  <span className={classes.sp}>{`Rs. ${product.attributes.discountPrice}`}</span>
                  <span className={classes.op}>{`Rs. ${product.attributes.costPrice}`}</span>
                  <span className={classes.discount}>
                    (
                    {product.attributes.discount}
                    )
                  </span>
                </Typography>
                <Typography component="div">
                  <span className={classes.smallText}><b>inclusive of all taxes</b></span>
                </Typography>
                <Typography component="div">
                  <span className={classes.sizing}><b>SELECT SIZE</b></span>
                  <span className={classes.selectSize}>
                    <b>
                      SIZE CHART
                      {'  '}
                      {'>'}
                    </b>
                  </span>
                </Typography>
                <Typography component="div" style={{ paddingTop: '20px' }}>
                  <button type="submit" className={classes.sizes}>Onesize</button>
                </Typography>
                <div className={classes.CartButtons}>
                  <Button onClick={() => handleClick({ vertical: 'top', horizontal: 'right' }, product.attributes)} className={classes.button} style={{ marginRight: 10, background: '#ff3e6c', fontSize: '14px' }} variant="contained">
                    <ShoppingBagIcon sx={{ color: 'white' }} />
                    <b>Add to Bag</b>
                  </Button>
                  <Button
                    className={classes.wishlist}
                    style={{
                      background: '#fff', color: 'black', fontSize: '14px',
                    }}
                    variant="contained"
                  >
                    <FavoriteBorderIcon />
                    {' '}
                    <b>Wishlist</b>
                  </Button>
                </div>
                <Typography component="div" className={classes.deliveryOp}>
                  <span className={classes.delivery}>Delivery Options</span>
                  <img src={deliveryIcon} alt="truck_icon" width="2%" height="3%" className={classes.img} />
                </Typography>
                <Typography component="div" className={classes.deliveryDetails}>
                  <TextField
                    id="outlined-basic"
                    label="Enter a PIN Code"
                    variant="outlined"
                    placeholder="Enter a PIN Code"
                    helperText="Please enter PIN code to check delivery time & Pay on Availability"
                    size="small"
                    sx={{ width: '30ch' }}
                  />
                  <span className={classes.selectCheck}><b>CHECK</b></span>
                  <div className={classes.deliveryText}>
                    <span className={classes.deliveryText}>
                      100% Original Products
                    </span>
                    <br />
                    <span className={classes.deliveryText}>
                      Pay on delivery might be available
                    </span>
                    <br />
                    <span className={classes.deliveryText}>
                      Easy 30 days returns and exchanges
                    </span>
                    <br />
                    <span className={classes.deliveryText}>
                      Try & Buy might be available
                    </span>
                  </div>
                </Typography>
                <Typography component="div" className={classes.deliveryOp}>
                  <span className={classes.delivery}>Best Offers</span>
                  <img src={bestIcon} alt="truck_icon" width="2%" height="3%" className={classes.img} />
                  <br />
                  <br />
                  <span className={classes.bestOfferText}>
                    This product is already at its best price.
                  </span>
                </Typography>
                <br />
                <img src={line} alt="line" width="80%" />
                <Typography component="div" className={classes.deliveryText}>
                  <span className={classes.delivery}>Product Details</span>
                  <img src={paper} alt="paper" width="2%" height="3%" className={classes.img} />
                  <p>{product.attributes.DescriptionOne}</p>
                  <span className={classes.descDetails}>Size & Fit:</span>
                  <p>{product.attributes.DescriptionTwo}</p>
                  <span className={classes.descDetails}>Material & Care:</span>
                  <p>{product.attributes.DescriptionThree}</p>
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Footer />
        </>
      ) : null }
      <div>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          message="Your product has been Added to Bag!"
          key={vertical + horizontal}
        />
      </div>
    </Box>
  );
}
