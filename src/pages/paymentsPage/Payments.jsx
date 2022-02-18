/**
 * @description This is a payments page for buying the product
 * Currently only COD is enabled for simplicity
 * @returns a page payment details and captcha.
 * @author Sanjana Rao
 * @since 16-02-2022
 */
import React from 'react';
import {
  Box, Typography, Grid,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import PaymentHeader from '../../components/paymentComponents/PaymentHeader';
import OrderSummary from '../../components/addressComponents/OrderSummary';
import Footer from '../../components/footer/FooterMain';
import DeliveryAddress from '../../components/paymentComponents/DeliveryAddress';
import ModeOfPayment from '../../components/paymentComponents/ModeOfPayment';
import useStyle from './paymentStyles';

export default function Payments() {
  const classes = useStyle();
  const cartItems = useSelector((state) => state.allCarts.cart);
  const addresses = useSelector((state) => state.allAddress.address);

  return (
    <Box id="box" className={classes.cartContainer}>
      <PaymentHeader />
      <Grid container className={classes.component}>
        <Grid item lg={9} md={9} sm={12} xs={12} className={classes.leftComponent}>
          <Box className={classes.header}>
            <Typography style={{ fontWeight: 600, fontSize: 16, textTransform: 'uppercase' }}>
              Delivery Address
            </Typography>
            {addresses.map((item) => (
              <DeliveryAddress item={item} />
            ))}
            <Typography style={{
              fontWeight: 600, fontSize: 16, textTransform: 'uppercase', paddingTop: '2em', paddingBottom: '10px',
            }}
            >
              CHOOSE YOUR MODE OF PAYMENT
            </Typography>
            <ModeOfPayment />
          </Box>
        </Grid>
        <Grid item lg={3} md={3} sm={12} xs={12}>
          <OrderSummary cartItems={cartItems} />
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
