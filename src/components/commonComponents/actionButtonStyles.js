import { makeStyles } from '@material-ui/core/styles';

/**
 * @description Makes use of makeStyles from MUI to generate custom styling to components
 */
const useStyles = makeStyles(() => ({
  primaryBtn: {
    color: '#fff',
    backgroundColor: '#ff3e6c',
    borderColor: '#ff3e6c',
    fontWeight: 600,
    padding: '12px',
    marginRight: '20px',
    '&:hover': {
      backgroundColor: '#ec5e80',
    },
  },
  secondaryBtn: {
    border: '1px solid #d4d5d9',
    fontWeight: 600,
    padding: '12px 30px',
  },
  secondaryBtnFilled: {
    fontWeight: 600,
    padding: '12px 30px',
    color: '#fff',
    backgroundColor: '#535766',
    border: '1px solid #535766',
  },
  simpleOutlined: {
    border: '1px solid #ff3f6c',
    color: '#ff3f6c',
    fontSize: '12px',
    padding: '4px 10px',
    '&:hover': {
      backgroundColor: '#fff',
    },
  },
  simplePrimary: {
    color: '#fff',
    fontSize: '14px',
    fontWeight: 600,
    padding: '4px 10px',
    backgroundColor: '#ff3f6c',

    width: '100%',
    borderRadius: '2px',
    border: '1px solid #ff3f6c',
    '&:hover': {
      backgroundColor: '#ff3f6c',
      color: '#fff',
    },
  },
}));

export default useStyles;
