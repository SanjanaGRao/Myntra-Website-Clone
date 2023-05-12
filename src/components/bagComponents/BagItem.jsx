/**
 * @description Bag Item
 * Displays the items in the bag along with its details.
 * @returns Bag Item(S)
 * @author Sanjana Rao
 * @since 15-02-2022
 */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Card, Box, Typography, Button,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import GroupButton from './GroupedButton';
import { deleteCart } from '../../service/cartService';
import { deleteCartItem } from '../../actions/cartActions';
import useStyle from './bagItemStyles';

export default function BagItem({ item }) {
  const dispatch = useDispatch();
  const classes = useStyle();

  // Function when Remove button is clicked. It removes the item from the cart.
  const removeItemFromCart = (id) => {
    deleteCart(id)
      .then((res) => { dispatch(deleteCartItem(res.id)); })
      .catch();
  };

  return (
    <Card className={classes.component}>
      <Box className={classes.leftComponent}>
        <img src={item.attributes.imageURL} className={classes.image} alt="product" />
        <GroupButton item={item} />
      </Box>
      <Box className={classes.mid}>
        <Typography><b>{(item.attributes.Brand)}</b></Typography>
        <Typography>{(item.attributes.Title)}</Typography>
        <Typography className={classes.seller} style={{ marginTop: 10 }}>
          Sold By: TrueCom Retail
        </Typography>
        <Typography style={{ margin: '20px 0' }}>
          <span className={classes.price}>
            Rs.
            {' '}
            {item.attributes.discountPrice}
          </span>
              &nbsp;&nbsp;&nbsp;
          <span className={classes.greyTextColor} style={{ textDecoration: 'line-through' }}>
            Rs.
            {' '}
            {item.attributes.costPrice}
          </span>
              &nbsp;&nbsp;&nbsp;
          <span style={{ color: '#f16565' }}>
            {item.attributes.discount}
            {' '}
          </span>
        </Typography>
        <Button
          className={classes.remove}
          onClick={() => removeItemFromCart(item.id)}
        >
          Remove

        </Button>
      </Box>
    </Card>
  );
}
