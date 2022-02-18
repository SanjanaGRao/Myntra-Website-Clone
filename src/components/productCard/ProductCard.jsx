/**
* Product Card
* Contains product details which are mainly coming from the date stored in Strapi
* @returns the card with product specifications
* @author Sanjana Rao
*/
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import StarIcon from '@mui/icons-material/Star';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useStyles from './productStyles';
import { setOneProduct } from '../../actions/itemsAction';

export default function ProductCard({ item }) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleProduct = (oneProduct) => {
    dispatch(setOneProduct(oneProduct));
    history.push(`/products/${oneProduct.attributes.ProductID}`);
  };
  return (
    <Card className={classes.card} sx={{ boxShadow: 'none' }} onClick={() => { handleProduct(item); }}>
      <CardMedia
        className={classes.cardImage}
        component="img"
        image={item.attributes.imageURL}
        alt={item.attributes.Title}
      />
      <div className={classes.ratingBox}>
        <span className={classes.ratings}><b>{`${item.attributes.ratings}`}</b></span>
        <StarIcon className={classes.star} fontSize="small" sx={{ fontSize: 15 }} />
        <span className={classes.raters}>
          <b>
            |
            {' '}
            {`${item.attributes.raters}`}
          </b>
        </span>
      </div>
      <CardContent>
        <Typography variant="subtitle2" className={classes.description} component="div">
          <b>{ item.attributes.Brand}</b>
        </Typography>
        <Typography variant="body2" className={classes.title}>
          {item.attributes.Title}
        </Typography>
        <Typography component="div">
          <span className={classes.price}>
            <b>{`Rs. ${item.attributes.discountPrice}`}</b>
          </span>
          <span className={classes.original}>
            {`Rs. ${item.attributes.costPrice}`}
          </span>
          <span className={classes.discount}>
            (
            {item.attributes.discount}
            )
          </span>
        </Typography>
      </CardContent>
    </Card>
  );
}
ProductCard.propTypes = {
  item: PropTypes.isRequired,
};
