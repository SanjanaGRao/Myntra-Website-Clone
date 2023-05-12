/**
 * @description This page contains custom styling for MUI Components
 * The styling of MUI Components
 * @author Sanjana Rao
 * @since 15-02-2022
 */
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
  customer: {
    color: '#282c3f',
    fontWeight: 600,
    fontFamily: 'Whitney,Helvetica,Arial,sans-serif',
    fontSize: '14px',
  },
  cartContainer: {
    paddingLeft: '1.5em',
  },
  button: {
    color: '#282c3f',
    textTransform: 'uppercase',
    fontWeight: 600,
    fontSize: '12px',
    letterSpacing: '0.5px',
    background: 'transparent',
    cursor: 'pointer',
    border: '1px solid #282c3f',
    borderRadius: '4px',
    padding: '6.5px 16px',
  },
  grid: {
    '&:hover': {
      border: '1px solid #ff3f6c',
    },
  },
});

export default useStyle;
