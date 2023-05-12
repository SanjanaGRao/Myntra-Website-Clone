/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/**
 * @description This page contains details of customer address
 * Once the customer enters the details, they have an option of editing the details too
 * The edited details gets updated in strapi
 * @returns Customer's address UI and details
 * @author Sanjana Rao
 * @since 15-02-2022
 */

import React, { useState, useEffect } from 'react';
import {
  Button,
  Grid,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
} from '@mui/material';
import { useSelector } from 'react-redux';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { withStyles } from '@mui/styles';
import { getAddress, updateAddress } from '../../service/addressService';
import {
  validFirstName,
  validPinCode,
  validPhone,
} from '../../utils/addressValidation';
import setAddress from '../../actions/addressActions';
import useStyle from './customerAddressStyles';

const InputField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#A03037',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#A03037',
      },
    },
  },
})(TextField);

export default function CustomerAddress() {
  const classes = useStyle();
  const addressList = useSelector((state) => state.allAddress.address);
  const address = addressList.length > 0 ? addressList[0].attributes : {};
  console.log(address);
  const initialUserState = {
    name: address.Name,
    phone: address.PhoneNumber,
    pincode: address.PinCode,
    locality: address.Locality,
    address: address.Address,
    city: address.City,
    landmark: address.Landmark,
    type: 'Home',
  };
  const [details, setDetails] = useState(initialUserState);
  const [isDissabled, setIsDissabled] = useState(true);
  const [firstNameError, setFirstNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [pinError, setPinError] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDetails({ ...details, [name]: value });
  };

  /** *
   * @description function to fetch customer address details
   */
  const fetchitem = () => {
    getAddress()
      .then((res) => {
        if (res.data !== null) {
          setAddress(res.data);
        }
      });
  };

  useEffect(() => {
    fetchitem();
  }, []);

  /** *
   * @description function to update customer details
   */
  const handleUpdate = () => {
    let errorFlag = false;
    setFirstNameError(false);
    setPhoneError(false);
    setPinError(false);
    if (!validFirstName.test(details.name)) {
      errorFlag = true;
      setFirstNameError(true);
    }
    if (!validPhone.test(details.phone)) {
      errorFlag = true;
      setPhoneError(true);
    }
    if (!validPinCode.test(details.pincode)) {
      errorFlag = true;
      setPinError(true);
    }
    if (errorFlag === false) {
      const data = {
        data: {
          Name: details.name,
          PhoneNumber: details.phone,
          Locality: details.locality,
          Address: details.address,
          City: details.city,
          Landmark: details.landmark,
          PinCode: details.pincode,
        },
      };
      setIsDissabled(true);
      Object.keys(address).length > 0 ? updateAddress(data, addressList[0].id) : setAddress(data);
    }
  };
  return (
    <Grid item container className={classes.cartContainer}>
      <Grid item xs={11} className={classes.grid}>
        <Accordion elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.customer}>Delivery Address Details</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid item container xs={10} spacing={1.5}>
              <Grid item xs={12} align="right">
                <Button
                  onClick={() => setIsDissabled(false)}
                  style={{
                    textTransform: 'none',
                    color: '#ff3f6c',
                    fontWeight: 'bold',
                  }}
                >
                  Edit
                </Button>
              </Grid>
              <Grid item xs={6}>
                <InputField
                  disabled={!!isDissabled}
                  id="name"
                  name="name"
                  required
                  placeholder="Name"
                  type="text"
                  variant="outlined"
                  value={details.name || address.name || ''}
                  onChange={handleInputChange}
                  fullWidth
                  error={firstNameError}
                  helperText={firstNameError ? 'Invalid Name' : ''}
                />
              </Grid>
              <Grid item xs={6}>
                <InputField
                  id="phone"
                  required
                  placeholder="Phone Number"
                  type="text"
                  name="phone"
                  value={details.phone || address.phone || ''}
                  onChange={handleInputChange}
                  variant="outlined"
                  fullWidth
                  disabled={!!isDissabled}
                  error={phoneError}
                  helperText={phoneError ? 'Invalid Mobile Number' : ''}
                />
              </Grid>

              <Grid item xs={6}>
                <InputField
                  id="pincode"
                  required
                  name="pincode"
                  placeholder="Pincode"
                  type="text"
                  variant="outlined"
                  value={details.pincode || address.pincode || ''}
                  onChange={handleInputChange}
                  fullWidth
                  disabled={!!isDissabled}
                  error={pinError}
                  helperText={pinError ? 'Invalid Pin Code' : ''}
                />
              </Grid>
              <Grid item xs={6}>
                <InputField
                  id="locality"
                  name="locality"
                  required
                  placeholder="Locality"
                  type="text"
                  variant="outlined"
                  fullWidth
                  value={details.locality || address.locality || ''}
                  onChange={handleInputChange}
                  disabled={!!isDissabled}
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  id="address"
                  required
                  name="address"
                  placeholder="Address"
                  type="text"
                  variant="outlined"
                  fullWidth
                  value={details.address || address.address || ''}
                  onChange={handleInputChange}
                  disabled={!!isDissabled}
                />
              </Grid>
              <Grid item xs={6}>
                <InputField
                  id="city"
                  name="city"
                  required
                  placeholder="City/Town"
                  type="text"
                  variant="outlined"
                  fullWidth
                  value={details.city || address.city || ''}
                  onChange={handleInputChange}
                  disabled={!!isDissabled}
                />
              </Grid>
              <Grid item xs={6}>
                <InputField
                  id="landmark"
                  name="landmark"
                  required
                  placeholder="Landmark"
                  type="text"
                  variant="outlined"
                  fullWidth
                  value={details.landmark || address.landmark || ''}
                  onChange={handleInputChange}
                  disabled={!!isDissabled}
                />
              </Grid>
              <Grid item xs={12} align="left">
                <FormControl
                  component="fieldset"
                  disabled={!!isDissabled}
                >
                  <FormLabel component="legend" className={classes.customer}>Type</FormLabel>
                  <RadioGroup row aria-label="gender" defaultValue="Home">
                    <FormControlLabel
                      name="addressType"
                      value="Home"
                      control={<Radio />}
                      label="Home"
                      color="#ff3f6c"
                      onChange={handleInputChange}
                    />
                    <FormControlLabel
                      name="addressType"
                      value="Work"
                      control={<Radio />}
                      label="Work"
                      color="#ff3f6c"
                      onChange={handleInputChange}
                    />
                    <FormControlLabel
                      name="addressType"
                      value="Other"
                      color="#ff3f6c"
                      control={<Radio />}
                      label="Other"
                      onChange={handleInputChange}
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item xs={12} align="right">
              <button type="submit" className={classes.button} onClick={handleUpdate}>
                Set Delivery Address
              </button>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
}
