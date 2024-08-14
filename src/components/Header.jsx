import React from "react";
import "./header.css";

function Header() {
  return (
    <div>
      <div className="header-border"></div>
      <div className="container">
      <div className="header-logo">
        <div className="logo-section">
          <img src="https://c.myholidays.com/cms/images/theme/myholiday_logo.svg" />
        </div>
        <div className="call-section">
          <div className="caller">
            <i className="caller-img"></i>
          </div>
          <div className="phone-num">
            <div className="dash"></div>
            <div className="call-text">Call us now!</div>
            <a>+1 6469348824</a>
          </div>
        </div>
      </div>
      <div className="hero-img">
        <img src="https://c.myholidays.com/packages/98729b28-64f8-4c0b-9ba1-4e20884abd8b/original/2df8ee77-1893-4af4-87e1-3f8207111a86.webp" />
      </div>
      <div className="flex-price">
        <div>
            <h1>6 Days 5 Nights Bali Honeymoon Package</h1>
            <div className="location">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15px" height="15px" viewBox="0 0 395.71 395.71"><g><path fill="#E41B23" d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
            <p>Bali <span>(5N)</span></p>
            </div>
        </div>
        <div>
            <p>Starting from:</p>
            <p>QAR 9,999</p>
            <p>QAR 8,999</p>
            <p>Per Person on twin sharing</p>
        </div>
      </div>
      
      </div>
    </div>
  );
}

export default Header;
