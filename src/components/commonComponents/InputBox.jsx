/**
* InputBox with a common stying so that it can be used in multiple pages
* @returns a textfield of a specified styling
* @author Sanjana Rao
*/
import React from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

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

export default function InputBox(props) {
  const classes = useStyles();
  const {
    id,
    type,
    name,
    label,
    value,
    onChange,
    error,
    helperText,
    fullWidth,
    placeholder,
  } = props;
  return (
    <TextField
      inputProps={{
        style: { border: 'none' },
        classes: {
          notchedOutline: classes.notchedOutline,
        },
      }}
      className={classes.root}
      id={id}
      type={type || 'text'}
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      fullWidth={fullWidth}
      placeholder={placeholder}
    />
  );
}
InputBox.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  helperText: PropTypes.string.isRequired,
  fullWidth: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
