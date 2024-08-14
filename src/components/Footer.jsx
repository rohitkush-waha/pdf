import React from "react";
import "./footer.css";

export default function () {
  return (
    <div className="footer">
    <div className="container footer">
    <div className="footer-flex">
    <div className="email-sec">
        <div className="call-us">
          <i className="call-us-logo"></i>
        </div>
        <div>
          <p>Email us</p>
          <a>support@myholidays.com</a>
        </div>
      </div>
      <div>
        <p>Call us</p>
        <a>1 646 860 9579</a>
      </div>
      <div>
        <p>Visit us</p>
        <a>www.myholidays.com</a>
      </div>
    </div>
    <div className="address">
        <p >Myholidays Tours W.L.L Ground Floor, Regency Group Holding Suhaim Bin Hamad Street, P.O. Box 9012, Doha, Qatar C.R. number 82210</p>
    </div>
      
    </div>
    </div>
  );
}
