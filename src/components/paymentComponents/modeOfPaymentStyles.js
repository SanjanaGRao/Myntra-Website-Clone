/**
 * @description This page contains custom styling for MUI Components
 * The styling of MUI Components
 * @author Sanjana Rao
 * @since 15-02-2022
 */
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
  component: {
    border: '1px solid #f0f0f0',
    borderRadius: 0,
    display: 'flex',
    padding: '3em',
    paddingLeft: '10em',
  },
  heading: {
    fontWeight: 600,
    fontSize: '16px',
    paddingBottom: '3em',
    paddingRight: '10.5em',
    paddingLeft: '11em',
    lineHeight: '1.42857143',
    color: '#424553',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Whitney,Helvetica,Arial,sans-serif',
  },
});

export default useStyle;
