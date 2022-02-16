import React from 'react';
import {
  Box, Typography, Button, Grid,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import BagItem from '../../components/bagComponents/BagItem';
import TotalPrice from '../../components/bagComponents/TotalPrice';
import EmptyBag from '../../components/bagComponents/EmptyBag';
import BagHeader from '../../components/bagComponents/BagHeader';
import Footer from '../../components/footer/FooterMain';
import { getAddress } from '../../service/addressService';
import setAddress from '../../actions/addressActions';
import useStyle from './bagStyles';

export default function Bag() {
  const classes = useStyle();
  const history = useHistory();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.allCarts.cart);
  const handleCart = () => {
    getAddress()
      .then((res) => { dispatch(setAddress(res)); });
  };
  return (
    <Box className={classes.cartContainer}>
      <BagHeader />
      { Object.keys(cartItems).length !== 0 ? (
        <Grid container className={classes.component}>
          <Grid item lg={8} md={8} sm={12} xs={12} className={classes.leftComponent}>
            <Box className={classes.header}>
              <Typography style={{ fontWeight: 600, fontSize: 16, textTransform: 'uppercase' }}>
                My Shopping Bag (
                {cartItems.length}
                {' '}
                items )
              </Typography>
            </Box>
            {cartItems.map((item) => (
              <BagItem item={item} />
            ))}
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <TotalPrice cartItems={cartItems} />
            <Button variant="contained" className={classes.placeOrder} onClick={() => { handleCart(); history.push('/address'); }}>
              Place Order
            </Button>
            <div className={classes.safeMessageContainer}>
              <div className={classes.safeMessage}>
                Safe and Secure Payments. Easy returns. 100% Authentic products.
              </div>
            </div>
          </Grid>
        </Grid>
      ) : <EmptyBag /> }
      <Footer />
    </Box>
  );
}
