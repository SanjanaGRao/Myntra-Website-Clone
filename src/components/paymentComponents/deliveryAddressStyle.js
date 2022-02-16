import { makeStyles } from '@material-ui/core';

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
});

export default useStyle;
