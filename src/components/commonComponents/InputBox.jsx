/**
* InputBox with a common stying so that it can be used in multiple pages
* @returns a textfield of a specified styling
* @author Sanjana Rao
*/
import React from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import useStyles from './inputBoxStyles';

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
