/**
* Styling for the product Card
* makeStyles is used so that the sub components can be customized according to the website
* rather than using a standard type.
* @exports useStyles, an arrow function
* @author Sanjana Rao
*/
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  card: {
    position: 'relative',
    transition: 'box-shadow .2s ease-in-out',
    width: '100%',
    height: '100%',
    boxShadow: 'none',
    overflow: 'hidden',
    '&:hover': {
      boxShadow: '0 3px 16px 0 rgb(0 0 0 / 11%)',
    },
  },
  cardImage: {
    maxWidth: '100%',
    maxHeight: '100%',
    contain: 'fit',
  },
  title: {
    color: '#535766',
    fontSize: '14px',
    lineHeight: '1',
    marginBottom: '0',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontWeight: '400',
    display: 'block',
    marginTop: '0',
    fontFamily: 'Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif',
  },
  description: {
    display: 'inline-block',
    width: 'calc(100% - 80px)',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    fontSize: '16px',
    lineHeight: '1',
    fontWeight: '500',
    color: '#282c3f',
    marginBottom: '6px',
    fontFamily: 'Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif',
  },
  price: {
    display: 'inline-block',
    fontSize: '14px',
    fontWeight: 500,
    color: '##282c3f',
    fontFamily: 'Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif',
  },
  original: {
    display: 'inline-block',
    marginLeft: '5px',
    textDecoration: 'line-through',
    fontSize: '12px',
    color: '#7e818c',
    fontFamily: 'Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif',
    fontWeight: '400',
  },
  discount: {
    display: 'inline-block',
    marginLeft: '5px',
    color: '#ff905a',
    fontSize: '12px',
    fontWeight: 400,
    fontFamily: 'Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif',
  },
  size: {
    color: '#878787',
    fontWeight: 500,
    fontSize: '14px',
  },
  ratings: {
    fontSize: '12px',
    fontWeight: '500',
    display: 'inline-block',
    fontFamily: 'Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif',
  },
  raters: {
    display: 'inline-block',
    fontSize: '12px',
    fontWeight: '500',
    fontFamily: 'Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif',
  },
  star: {
    paddingLeft: '0.3em',
    paddingRight: '0.3em',
    color: '#17684F',
    display: 'inline-block',
    margin: '0px 0px 0px 0px',
  },
  ratingBox: {
    zIndex: '1',
    position: 'absolute',
    marginLeft: '15px',
    fontSize: '12px',
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '2px',
    padding: '0 0 0 4px',
    backgroundColor: 'hsla(0,0%,100%,.8)',
  },
}));

export default useStyles;
