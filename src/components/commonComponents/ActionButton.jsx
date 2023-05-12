/**
* Buttons with a common stying so that it can be used in multiple pages
* @returns a button with the specified styling
* @author Sanjana Rao
*/
import React from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import useStyles from './actionButtonStyles';

export default function ActionButton(props) {
  const {
    form, kind, type, label, style, startIcon, endIcon, handleClick,
  } = props;
  const classes = useStyles();
  return (
    <>
      {kind === 'PRIMARY' && (
        <Button
          variant="outlined"
          type={type}
          className={classes.primaryBtn}
          style={style}
          startIcon={startIcon}
          endIcon={endIcon}
          onClick={handleClick}
          form={form}
        >
          {label}
        </Button>
      )}
      {kind === 'SECONDARY' && (
        <Button
          type={type}
          style={style}
          className={classes.secondaryBtn}
          startIcon={startIcon}
          endIcon={endIcon}
          onClick={handleClick}
        >
          {label}
        </Button>
      )}
      {kind === 'SECONDARY_FILLED' && (
        <Button
          type={type}
          variant="contained"
          style={style}
          className={classes.secondaryBtnFilled}
          startIcon={startIcon}
          endIcon={endIcon}
          onClick={handleClick}
        >
          {label}
        </Button>
      )}

      {kind === 'SIMPLE_OUTLINED' && (
        <Button
          variant="outlined"
          className={classes.simpleOutlined}
          onClick={handleClick}
          style={style}
        >
          {label}
        </Button>
      )}

      {kind === 'SIMPLE_PRIMARY' && (
        <Button
          variant="contained"
          className={classes.simplePrimary}
          onClick={handleClick}
          style={style}
        >
          {label}
        </Button>
      )}
      {kind === 'SIMPLE_SECONDARY' && (
        <Button
          variant="outlined"
          className={classes.simpleOutlined}
          onClick={handleClick}
        >
          {label}
        </Button>
      )}
    </>
  );
}
ActionButton.propTypes = {
  form: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  kind: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  startIcon: PropTypes.string.isRequired,
  endIcon: PropTypes.string.isRequired,
  handleClick: PropTypes.string.isRequired,
};
