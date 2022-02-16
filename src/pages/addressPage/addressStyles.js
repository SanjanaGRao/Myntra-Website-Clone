import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  cartContainer: {
    backgroundColor: '#fff',
  },
  component: {
    padding: '8px',
    maxWidth: '1200px',
    display: 'flex',
    flexFlow: 'row',
  },
  leftComponent: {
    paddingRight: 15,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 15,
      paddingRight: 0,
    },
  },
  header: {
    padding: '15px 24px',
    background: '#fff',
  },
  placeOrder: {
    display: 'flex',
    background: '#ff3f6c',
    color: '#fff',
    borderRadius: 2,
    width: 310,
    height: 45,
    fontSize: '14px',
    fontWeight: 600,
    padding: '10px',
    cursor: 'pointer',
    textAlign: 'center',
    border: 'none',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  safeMessageContainer: {
    margin: '4px 15px 8px',
    textAlign: 'center',
  },
  safeMessage: {
    fontSize: '14px',
    textAlign: 'left',
    display: 'inline-block',
    color: '#878787',
    padding: '5px 0 5px 35px',
    background: 'url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/shield_b33c0c.svg) no-repeat 0 50%',
    backgroundSize: '25px 31px',
    fontWeight: '500',
    marginTop: '1em',
  },
  verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#909090',
    display: 'flex',
  },
}));

export default useStyle;
