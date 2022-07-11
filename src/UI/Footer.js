import React from "react";
import "../Style/footer.css";
import appStore from "../img/img-appstore.jpg";
import ggPlay from "../img/img-googleplay.jpg";
import {
  FaLocationArrow,
  FaPhoneAlt,
  FaEnvelope,
  FaSkype,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaRss,
  FaLinkedin,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="wrp-foot">
          <div className="col-foot">
            <h3>THÔNG TIN LIÊN HỆ</h3>
            <div className="icon-box">
              <i className="icon-foot">
                <FaLocationArrow />
              </i>
              <p className="text-foot">
                319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM
              </p>
            </div>
            <div className="icon-box">
              <i className="icon-foot">
                <FaPhoneAlt />
              </i>
              <p className="text-foot">0364715815</p>
            </div>
            <div className="icon-box">
              <i className="icon-foot">
                <FaEnvelope />
              </i>
              <p className="text-foot">nguyenvanduc252546@gmail.com</p>
            </div>
            <div className="icon-box">
              <i className="icon-foot">
                <FaSkype />
              </i>
              <p className="text-foot">nguyenvanduc</p>
            </div>
            <div className="social-foot">
              <div className="solial-fb">
                <i className="icon-fb">
                  <FaFacebookF />
                </i>
              </div>
              <div className="solial-instagram">
                <i className="icon-ins">
                  <FaInstagram />
                </i>
              </div>
              <div className="solial-twiter">
                <i className="icon-tw">
                  <FaTwitter />
                </i>
              </div>
              <div className="solial-rss">
                <i className="icon-rss">
                  <FaRss />
                </i>
              </div>
              <div className="solial-linkedin">
                <i className="icon-in">
                  <FaLinkedin />
                </i>
              </div>
            </div>
          </div>
          <div className="wrp-col-foot">
            <div className="col-foot">
              <h3>LIÊN KẾT</h3>
              <ul>
                <li className="text-foot">
                  <NavLink to="/gioithieu">Giới thiệu</NavLink>
                </li>
                <li className="text-foot">
                  <NavLink to="/donghonam">Đồng hồ nam</NavLink>
                </li>
                <li className="text-foot">
                  <NavLink to="/donghonu">Đồng hồ nữ</NavLink>
                </li>
                <li className="text-foot">
                  <NavLink to="/blog">Blog</NavLink>
                </li>
                <li className="text-foot">
                  <NavLink to="/lienhe">Liên hệ</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-foot">
              <h3>HỖ TRỢ</h3>
              <ul>
                <li className="text-foot">Hướng dẫn mua hàng</li>
                <li className="text-foot">Hướng dẫn thanh toán</li>
                <li className="text-foot">Chính sách bảo hành</li>
                <li className="text-foot">Chính sách đổi trả</li>
                <li className="text-foot">Tư vấn khách hàng</li>
              </ul>
            </div>
          </div>
          <div className="col-foot">
            <h3>TẢI ỨNG DỤNG TRÊN</h3>
            <p className="text-down">
              Ứng dụng Mona Watch hiện có sẵn trên Google Play, App Store. Tải
              nó ngay.
            </p>
            <img src={appStore}></img>
            <img src={ggPlay}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
