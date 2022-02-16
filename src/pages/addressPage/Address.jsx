import React from 'react';
import {
  Box, Typography, Button, Grid,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AddressHeader from '../../components/addressComponents/AddressHeader';
import OrderSummary from '../../components/addressComponents/OrderSummary';
import { getAddress } from '../../service/addressService';
import setAddress from '../../actions/addressActions';
import DeliveryEstimates from '../../components/addressComponents/DeliveryEstimates';
import CustomerAddress from '../../components/addressComponents/CustomerAddress';
import Footer from '../../components/footer/FooterMain';
import useStyle from './addressStyles';

export default function Address() {
  const classes = useStyle();
  const history = useHistory();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.allCarts.cart);
  const handleAddress = () => {
    getAddress()
      .then((res) => { dispatch(setAddress(res)); });
  };
  return (
    <Box className={classes.cartContainer}>
      <AddressHeader />
      <Grid container className={classes.component}>
        <Grid item lg={9} md={9} sm={12} xs={12} className={classes.leftComponent}>
          <Box className={classes.header}>
            <Typography style={{ fontWeight: 600, fontSize: 16, textTransform: 'uppercase' }}>
              YOUR Delivery Address
            </Typography>
          </Box>
          <CustomerAddress />
        </Grid>
        <Grid item lg={3} md={3} sm={12} xs={12}>
          <DeliveryEstimates />
          <OrderSummary cartItems={cartItems} />
          <Button variant="contained" className={classes.placeOrder} onClick={() => { handleAddress(); history.push('/payment'); }}>
            Continue
          </Button>
          <div className={classes.safeMessageContainer}>
            <div className={classes.safeMessage}>
              Safe and Secure Payments. Easy returns. 100% Authentic products.
            </div>
          </div>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
}
