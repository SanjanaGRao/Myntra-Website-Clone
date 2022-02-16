/* eslint-disable react/prop-types */
import React from 'react';
import {
  Card, Box, Typography,
} from '@material-ui/core';
import useStyle from './deliveryAddressStyle';

export default function DeliveryAddress({ item }) {
  const classes = useStyle();

  return (
    <Card className={classes.component}>
      <Box className={classes.mid}>
        <Typography>
          <b>
            Name:
          </b>
          {' '}
          {item.attributes.Name}
        </Typography>
        <Typography>
          <b>
            Phone Number:
          </b>
          {' '}
          {item.attributes.PhoneNumber}
        </Typography>
        <Typography>
          <b>Address:</b>
          {' '}
          {item.attributes.Address}
        </Typography>
        <Typography>{item.attributes.Landmark}</Typography>
        <span>{item.attributes.Locality}</span>
        ,
        <span>{item.attributes.City}</span>
        <Typography>
          <b>
            Pin Code
            {' '}
          </b>
          {' '}
          -
          {' '}
          {item.attributes.PinCode}
        </Typography>
      </Box>
    </Card>
  );
}
