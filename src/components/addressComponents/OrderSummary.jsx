/**
 * @description Order Summary
 * Displays the order summary i.e., the MRP, discount and total price of the items in the bag
 * @returns Order Summary
 * @author Sanjana Rao
 * @since 15-02-2022
 */
/* eslint-disable react/prop-types */
/* eslint-disable radix */
import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyle from './orderSummaryStyles';

export default function OrderSummary({ cartItems }) {
  const classes = useStyle();
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  // Function to calculate the total amount
  const totalAmount = () => {
    let prices = 0;
    let discounts = 0;
    cartItems.map((item) => {
      prices += (parseInt(item.attributes.costPrice));
      discounts += (parseInt(item.attributes.costPrice) - parseInt(item.attributes.discountPrice));
      return (prices, discounts);
    });
    setPrice(prices);
    setDiscount(Math.abs(discounts));
  };
  useEffect(() => {
    totalAmount();
  }, [cartItems]);

  return (
    <Box className={classes.component}>
      <Box className={classes.header} style={{ borderBottom: '1px solid #f0f0f0' }}>
        <Typography className={classes.greyTextColor}>
          PRICE DETAILS (
          {cartItems?.length}
          {' '}
          items)

        </Typography>
      </Box>
      <Box className={classes.container}>
        <Typography>
          Total MRP
          <span className={classes.price}>
            ₹
            {price}
          </span>
        </Typography>
        <Typography>
          Discount on MRP
          <span className={classes.price}>
            - ₹
            {discount}
          </span>
        </Typography>
        <Typography>
          Delivery Charges
          <span className={classes.price}>₹40</span>
        </Typography>
        <Typography className={classes.totalAmount}>
          &nbsp;&nbsp;Total Amount
          <span className={classes.price}>
            ₹
            {price - discount + 40}
&nbsp;&nbsp;
          </span>
        </Typography>
      </Box>
    </Box>
  );
}
