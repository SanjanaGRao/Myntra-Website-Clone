/**
 * @description This page contains custom styling for MUI Components
 * The styling of MUI Components
 * @author Sanjana Rao
 * @since 15-02-2022
 */
import {
  makeStyles,
} from '@material-ui/core';

const useStyle = makeStyles({
  component: {
    border: '1px solid #f0f0f0',
    borderRadius: 0,
    display: 'flex',
    marginLeft: '30px',
    marginTop: '10px',
  },
  leftComponent: {
    margin: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    height: 120,
    width: 110,
  },
  mid: {
    margin: 20,
    fontFamily: 'Whitney,Helvetica,Arial,sans-serif',
  },
  greyTextColor: {
    color: '#878787',
    fontFamily: 'Whitney,Helvetica,Arial,sans-serif',
  },
  smallText: {
    fontSize: 14,
    fontFamily: 'Whitney,Helvetica,Arial,sans-serif',
  },
  seller: {
    color: '#878787',
    fontSize: 14,
    fontFamily: 'Whitney,Helvetica,Arial,sans-serif',
  },
  price: {
    fontSize: 18,
    fontWeight: 600,
    fontFamily: 'Whitney,Helvetica,Arial,sans-serif',
  },
  remove: {
    marginTop: 20,
    fontSize: 12,
    color: '#535766',
    fontFamily: 'Whitney,Helvetica,Arial,sans-serif',
    fontWeight: 600,
  },
});

export default useStyle;
