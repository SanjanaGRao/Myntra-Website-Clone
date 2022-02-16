import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    position: 'sticky',
    borderBottom: '1px solid #F5F5F6',
    width: '100%',
    padding: '20px 0px 0px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  catInfoLogo: {
    marginLeft: '25px',
    display: 'flex',
    fontWeight: '500',
    fontSize: '14px',
    color: '#282c3f',
    lineHeight: '40px',
    textTransform: 'uppercase',
  },
  catContainer: {
    padding: '0 12px 0 12px',
    textDecoration: 'none',
    color: '#282c3f',
    cursor: 'pointer',
  },
  verifiedContainer: {
    display: 'flex',
    textDecoration: 'none',
    color: '#535766',
    letterSpacing: '3px',
    cursor: 'default',
  },
  ulCSS: {
    listStyle: 'none',
    display: 'inline-flex',
    margin: '5px',
    textTransform: 'uppercase',
    color: '#696B79',
    letterSpacing: '3px',
  },
  dashedSeprator: {
    borderBottom: '1px dashed gray',
    height: '9px',
    width: '50px',
    margin: '0px 10px',
  },
  list: {
    fontSize: '12px',
    fontWeight: 500,
  },
  active_list: {
    fontSize: '12px',
    fontWeight: 600,
    color: '#20BD99',
    paddingBottom: '2px',
    borderBottom: '3px solid #20BD99',
  },
}));

export default useStyles;
