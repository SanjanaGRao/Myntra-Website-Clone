import React from 'react';
import Dashboard from '../../components/dashboard/Dashboard';
import FooterMain from '../../components/footer/FooterMain';
import Appbar from '../../components/header/Appbar';

function Homepage() {
  return (
    <>
      <Appbar />
      <Dashboard />
      <FooterMain />
    </>
  );
}
export default Homepage;
