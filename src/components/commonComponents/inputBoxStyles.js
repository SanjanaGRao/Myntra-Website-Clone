import { makeStyles } from '@material-ui/core/styles';

/**
 * @description Makes use of makeStyles from MUI to generate custom styling to components
 */
const useStyles = makeStyles(() => ({
  root: {
    '& .MuiInputBase-root': {
      color: 'black', // or try theme.palette.primary.main
      backgroundColor: 'white', // It should be white by default
      border: '1px solid #d4d5d9',
      padding: '2px 6px',
      '&:hover': {
        border: '1px solid black',
      },
    },
    paddingBottom: '16px',
  },
}));

export default useStyles;
