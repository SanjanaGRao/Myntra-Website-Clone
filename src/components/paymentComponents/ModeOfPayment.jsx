/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import CaptchaTest from './capchaTest';
import useStyle from './modeOfPaymentStyles';

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function ModeOfPayment() {
  const classes = useStyle();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1, marginLeft: '30px', bgcolor: '#f4f4f5', display: 'flex', height: 435, border: '1px solid #eaeaec', color: '#ff3f6c', borderRadius: '4px',
      }}
    >
      <Tabs
        orientation="vertical"
        variant="standard"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab disabled icon={<StarBorderOutlinedIcon />} iconPosition="start" label="Saved Payment Options" {...a11yProps(0)} style={{ borderBottom: '1px solid #eaeaec', textAlign: 'left' }} />
        <Tab
          icon={<LocalAtmOutlinedIcon />}
          iconPosition="start"
          label="Cash On Delivery (Cash/Card/UPI)"
          {...a11yProps(1)}
          style={{
            borderBottom: '1px solid #eaeaec', textAlign: 'left', color: '#ff3f6c', background: '#fff',
          }}
        />
        <Tab disabled icon={<CreditCardOutlinedIcon />} iconPosition="start" label="Credit/Debit Card" {...a11yProps(2)} style={{ borderBottom: '1px solid #eaeaec', textAlign: 'left' }} />
        <Tab disabled icon={<PhoneAndroidOutlinedIcon />} iconPosition="start" label="PhonePe/GooglePay/BHIM UPI" {...a11yProps(3)} style={{ borderBottom: '1px solid #eaeaec', textAlign: 'left' }} />
        <Tab disabled icon={<AccountBalanceWalletOutlinedIcon />} iconPosition="start" label="Paytm/Payzapp/Wallets" {...a11yProps(4)} style={{ borderBottom: '1px solid #eaeaec', textAlign: 'left' }} />
        <Tab disabled icon={<AccountBalanceOutlinedIcon />} iconPosition="start" label="Net Banking" {...a11yProps(5)} style={{ borderBottom: '1px solid #eaeaec', textAlign: 'left' }} />
      </Tabs>
      <TabPanel value={value} index={1} style={{ background: '#fff' }}>
        <span className={classes.heading}>Cash on Delivery (Cash/Card/UPI) </span>
        <div className={classes.component}>
          <CaptchaTest />
        </div>
      </TabPanel>
    </Box>
  );
}
