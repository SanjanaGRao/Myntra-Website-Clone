import React from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyle from './deliveryEstimatesStyles';

export default function DeliveryEstimates() {
  const classes = useStyle();
  return (
    <Box className={classes.component}>
      <Box className={classes.header} style={{ borderBottom: '1px solid #f0f0f0' }}>
        <Typography className={classes.greyTextColor}>
          DELIVERY ESTIMATES
        </Typography>
      </Box>
      <Box className={classes.container}>
        <Typography className={classes.text}>
          Your item(s) will be delivered within a week from the date of placing the order.
        </Typography>
      </Box>
    </Box>
  );
}
