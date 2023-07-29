import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{marginTop:-20}}>
        <div className="row">
          <div className="col-md-4">
            <h3>About Us</h3>
            <p>We are a team of passionate developers building amazing software.</p>
          </div>
          <div className="col-md-4">
            <h3 style={{marginTop:10}}>Team</h3>
            <p style={{marginTop:-10,marginBottom:10}}>Byte - Brigaders</p>
          </div>
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>SRKR Engineering College Bhimavaram, 534204, Phone: (+91) 984882786, Email:bytebrigaders@gmail.com</p>
          </div>
        </div>
        <hr className="my-4" />
      </div>
      <div className="row" style={{marginBottom:-20}}>
          <div className="col-12">
            <p className="text-muted text-center">© 2023 VirtualVoice, Inc. All rights reserved.</p>
          </div>
        </div>
    </footer>
  );
}

export default Footer;
