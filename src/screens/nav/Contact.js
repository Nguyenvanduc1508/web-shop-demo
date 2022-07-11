import React from "react";
import "../../Style/contact.css";
import dc from "../../img/loca.png";
import dt from "../../img/phone.png";
import mail from "../../img/mail.png";

function Contact() {
  return (
    <div className="contact">
      <div className="row-contact">
        <div className="col-contact">
          <img src={dc}></img>
          <div className="col-right">
            <h3>Địa chỉ:</h3>
            <p>319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</p>
          </div>
        </div>
        <div className="col-contact">
          <img src={dt}></img>
          <div className="col-right">
            <h3>Điện thoại:</h3>
            <ul>
              <li className="phone">1900 636 648</li>
              <li>Bấm 109 Phòng kinh doanh</li>
              <li>Bấm 103 Phòng kỹ thuật</li>
            </ul>
          </div>
        </div>
        <div className="col-contact">
          <img src={mail}></img>
          <div className="col-right">
            <h3>Email:</h3>
            <p>nguyenvanduc@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="forminput">
        <input className="input" placeholder="Họ và tên"></input>
        <input className="input" placeholder="Email"></input>
        <input className="input" placeholder="Số điện thoại"></input>
        <input className="input" placeholder="Địa chỉ"></input>
        <textarea
          name=""
          id=""
          cols="30"
          rows="6"
          placeholder="Lời nhắn"
        ></textarea>
        <button>GỬI</button>
      </div>
    </div>
  );
}

export default Contact;
