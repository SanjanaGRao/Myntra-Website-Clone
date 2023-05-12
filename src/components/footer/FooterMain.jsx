/**
* Footer of the Myntra Website
* The footer in the website is too big, therefore it is broken down into 2 components
* This function combines both the footer components
* @returns merged footer components
* @author Sanjana Rao
*/
import React from 'react';
import FooterOne from './FooterOne';
import FooterTwo from './FooterTwo';

export default function FooterMain() {
  return (
    <div style={{ paddingTop: '1.5em' }}>
      <FooterOne />
      <FooterTwo />
    </div>
  );
}
