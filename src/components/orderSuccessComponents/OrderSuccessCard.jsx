import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import VerifiedIcon from '@mui/icons-material/Verified';
import { useHistory } from 'react-router-dom';
import useStyles from './orderSuccessStyle';

export default function OrderSuccessCard() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <VerifiedIcon
            sx={{
              color: '#ff3f6c',
              fontSize: '2.75rem',
              textAlign: 'center',
              justifyContent: 'center',
              marginLeft: '240px',
            }}
            className={classes.icon}
          />
          <br />
          <br />
          <Typography variant="h4" sx={{ mb: 1.5 }} className={classes.heading}>
            <b>Order Confirmed</b>
          </Typography>
          <Typography variant="body2" className={classes.body}>
            Your order is confirmed. You will receieve an order confirmation email/SMS
            shortly with the expected delivery date for your items.
          </Typography>
        </CardContent>
        <br />
        <br />
        <CardActions className={classes.cardd}>
          <button type="submit" className={classes.shopping} onClick={() => history.push('/')}>Continue Shopping</button>
          <button type="submit" className={classes.view} onClick={() => history.push('/')}>View Order</button>
        </CardActions>
      </Card>
    </div>
  );
}
