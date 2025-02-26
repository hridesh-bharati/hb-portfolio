import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Assuming the CSS is saved in Footer.css file

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic (e.g., sending email)
    alert('Subscribed with email: ' + email);
  };

  return (
    <div id="container">
      <div id="part1" className='bg-dark'>
        <div id="companyinfo">
          <Link id="sitelink" to="#">HRIDESH</Link>
          <p id="title">Cool and Perfect Snippet code</p>
          <p id="detail">We create awesome code snippets that will help you in creating your own beautiful site.</p>
        </div>

        <div id="explore">
          <p id="txt1">Explore</p>
          <Link className="link" to="#">Home</Link>
          <Link className="link" to="#">About</Link>
          <Link className="link" to="#">Snippet</Link>
          <Link className="link" to="#">Careers</Link>
        </div>

        <div id="visit">
          <p id="txt2">Visit</p>
          <p className="text">Lincoln House</p>
          <p className="text">78 Bhulabhai Desai Road</p>
          <p className="text">Mumbai 400 026</p>
          <p className="text">Phone: (22) 2363-3611</p>
          <p className="text">Fax: (22) 2363-0350</p>
        </div>

        <div id="legal">
          <p id="txt3">Legal</p>
          <Link className="link1" to="#">Terms and Conditions</Link>
          <Link className="link1" to="#">Private Policy</Link>
        </div>

        <div id="subscribe">
          <p id="txt4">Send mail to Us</p>
          <form onSubmit={handleSubmit}>
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </form>
          <button className="btn btn-warning" type="submit">Send</button>
          <p id="txt5">Connect With Us</p>
          <i className="fab fa-facebook-square social fa-2x"></i>
          <i className="fab fa-linkedin social fa-2x"></i>
          <i className="fab fa-twitter-square social fa-2x"></i>
        </div>
      </div>

      <div id="part2">
        <p id="txt6">&copy;copyright 2025-25 HB - All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
