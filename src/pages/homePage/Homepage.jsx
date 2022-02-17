/**
 * @description HomePage
 * HomePage contains its subcomponents which constitute to its whole page
 * It has Appbar, Dashboard and Footer component
 * @returns Complete homepage which is seen when the user enter a website
 * @author Sanjana Rao
 * @since 16-02-2022
 */
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
