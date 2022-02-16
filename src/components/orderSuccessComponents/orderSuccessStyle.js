import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: 675,
    height: '100%',
    padding: '3em',
  },
  root: {
    paddingTop: '4.5em',
    paddingLeft: '21em',
    paddingBottom: '7.5em',
    background: '#eaeaec',
  },
  heading: {
    fontSize: '63px',
    color: '#14CDA8',
    justifyContent: 'center',
    textAlign: 'center',
  },
  body: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  cardd: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  shopping: {
    textTransform: 'uppercase',
    color: '#282c3f',
    padding: '1em',
    background: '#fff',
    fontWeight: 'bold',
    marginRight: '1em',
    borderRadius: '4px',
    border: '1px solid #eaeaec',
    '&:hover': {
      border: '1px solid black',
    },
  },
  view: {
    color: '#fff',
    textTransform: 'uppercase',
    borderRadius: '4px',
    background: '#ff3f6c',
    padding: '1em 2.5em',
    fontWeight: 'bold',
    border: '1px solid #ff3f6c',
    '&:hover': {
      border: '1px solid black',
    },
  },
}));

export default useStyles;
