/**
* Buttons with a common stying so that it can be used in multiple pages
* @returns a button with the specified styling
* @author Sanjana Rao
*/
import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

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
