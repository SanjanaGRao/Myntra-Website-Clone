/**
 * @description Empty Bag
 * Displays when there is nothing added to the bag
 * @returns UI for empty bag case
 * @author Sanjana Rao
 * @since 15-02-2022
 */
import React from 'react';
import { Typography, Box } from '@material-ui/core';
import useStyle from './emptyBagStyles';

export default function EmptyBag() {
  const imgurl = 'https://constant.myntassets.com/checkout/assets/img/empty-bag.webp';
  const classes = useStyle();
  return (
    <Box className={classes.component}>
      <Box className={classes.container}>
        <img src={imgurl} className={classes.image} alt="empty-cart" />
        <Typography className={classes.hey}>Hey, it feels so light!</Typography>
        <span className={classes.bagSpan}>
          There is nothing in your bag. Let&apos;s add some items.
        </span>
      </Box>
    </Box>
  );
}
