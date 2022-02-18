/**
 * @description Grouped Button
 * Button components grouped together to make an entire button component
 * with + and - options to increase and decrease the quantity.
 * @returns Buttons grouped together
 * @author Sanjana Rao
 * @since 15-02-2022
 */
/* eslint-disable react/prop-types */
import React from 'react';
import { ButtonGroup, Button, makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { updateCart } from '../../service/cartService';
import { updateCartQuantity } from '../../actions/cartActions';

const useStyle = makeStyles({
  component: {
    marginTop: 30,
  },
  button: {
    borderRadius: '50%',
  },
});

export default function GroupedButton({ item }) {
  const classes = useStyle();
  const dispatch = useDispatch();

  // Function to increase the cart quantity
  const handleQuantity = (Qty) => {
    updateCart({
      data: {
        Qty,
      },
    }, item.id).then((res) => dispatch(updateCartQuantity(res))).catch();
  };

  return (
    <ButtonGroup className={classes.component}>
      <Button
        className={classes.button}
        onClick={() => handleQuantity(item.attributes.Qty - 1)}
        disabled={item.attributes.Qty === 1}
      >
        -

      </Button>
      <Button>{item.attributes.Qty}</Button>
      <Button
        className={classes.button}
        onClick={() => handleQuantity(item.attributes.Qty + 1)}
      >
        +

      </Button>
    </ButtonGroup>
  );
}
