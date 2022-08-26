import React from 'react';
import './Footer.css'

function Footer({idFooter}) {
  console.log(idFooter)
  return (
    <>
      <footer id={idFooter}>
        <ul id='footer-list'>
          <li>Privacy Policy</li>
          <li>Terms {'&'} Conditions</li>
          <li>Cookie Policy</li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
