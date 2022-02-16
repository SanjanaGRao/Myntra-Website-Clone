import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
  component: {
    width: '100%',
  },
  header: {
    padding: '15px 24px',
    background: '#fff',
  },
  greyTextColor: {
    color: '#878787',
  },
  container: {
    '& > *': {
      padding: '15px 24px',
      background: '#fff',
      fontSize: 14,
    },
  },
  text: {
    color: '#ff3f6c',
    fontWeight: 600,
    fontFamily: 'Whitney,Helvetica,Arial,sans-serif',
    fontSize: '14px',
  },
});

export default useStyle;
