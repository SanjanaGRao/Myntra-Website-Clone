import { makeStyles } from '@material-ui/core';

/**
 * @description Makes use of makeStyles from MUI to generate custom styling to components
 */
const useStyles = makeStyles(() => ({
  backdrop: {
    color: '#fff',
    position: 'absolute',
    zIndex: 100,
  },
  root: {
    backgroundColor: '#FFE6F3',
    height: '110vh',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5vh',
  },
  content: {
    width: '400px',
  },
  bannerContainer: {
    height: '160px',
    backgroundColor: '#FFF9E7',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    width: '100%',
    height: '250px',
  },
  loginLabel: {
    marginBottom: '20px',
    fontWeight: 550,
    fontFamily: 'WhitneySSm',
    color: '#424553',
    fontSize: '20px',
  },
  loginContainer: {
    padding: '30px',
    backgroundColor: '#fff',
  },
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
  signup: {
    fontFamily: 'WhitneySSm,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
    fontSize: '13px',
    lineHeight: '1.42857143',
    color: '#424553',
    textAlign: 'center',
    marginTop: '4px',
    cursor: 'pointer',
  },
  forgot: {
    fontFamily: 'WhitneySSm,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
    fontSize: '13px',
    lineHeight: '1.42857143',
    color: '#424553',
    textAlign: 'right',
    cursor: 'pointer',
    paddingBottom: '1em',
  },
}));

export default useStyles;
