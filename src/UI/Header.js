import React, {useRef} from "react";
import logo from "../img/logodh.png";
import {
  FaUser,
  FaSearch,
  FaLocationArrow,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaHeart,
  FaBars,
} from "react-icons/fa";
import "../Style/header.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
  const inputRef = useRef();
  const inputRefMB = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    if (!value.trim()) return;
    return navigate(`/search/${value}`) ;
  };
  const handleSubmitMobile = (e) => {
    e.preventDefault();
    const value = inputRefMB.current.value;
    if (!value.trim()) return;
    return navigate(`/search/${value}`);
  };
  const handleCloseMB = () => {
    document.querySelector('.header-bottom').style.display = 'none';
  }
  const handleOpenMB = () => {
    document.querySelector('.header-bottom').style.display = 'block';
  }
  
  return (
    <div className="header">
      <div className="header-wrp">
        <div className="top-bar">
          <div className="top-left">
            <div className="flex-left">
              <span className="add-icon">
                <FaLocationArrow />
              </span>
              <span className="add-text">
                319 - C16 Lý Thường Kiệt, P.15, Q.11, Tp.HCM
              </span>
            </div>
            <div className="flex-left">
              <span className="add-icon">
                <FaPhoneAlt />
              </span>
              <span className="add-text hover-phone">076 922 0162</span>
            </div>
          </div>
          <div className="top-right">
            <div className="member"></div>
            <NavLink to="/login" className="log">
              <FaUser />
            </NavLink>
            <span className="iconright">
              <FaFacebook />
            </span>
            <span className="iconright">
              <FaInstagram />
            </span>
            <span className="iconright">
              <FaTwitter />
            </span>
          </div>
        </div>
        <div className="boder-full"></div>
        <div className="header-center">
          <div onClick={handleOpenMB} className="menubar">
            <FaBars />
          </div>
          <div className="logo">
            <img src={logo}></img>
          </div>
          <form className="search" onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" placeholder="Tìm kiếm..."></input>
            <button type="submit" className="icon-search">
              <FaSearch />
            </button>
          </form>
          <div className="cart">
            <span className="heart">
              <FaHeart />
            </span>
            <span className="cart-icon">
              <strong>0</strong>
            </span>
          </div>
        </div>
        <div className="header-bottom" id="header-bottom-mobile">
          <form className="search" onSubmit={handleSubmitMobile}>
            <input ref={inputRefMB} type="text" placeholder="Tìm kiếm..."></input>
            <button type="submit" className="icon-search">
              <FaSearch />
            </button>
          </form>
          <div className="res-left">
            <NavLink to="/">TRANG CHỦ</NavLink>
            <NavLink to="/gioithieu">GIỚI THIỆU</NavLink>
            <NavLink to="/donghonam">ĐỒNG HỒ NAM</NavLink>
            <NavLink to="/donghonu">ĐỒNG HỒ NỮ</NavLink>
            <NavLink to="/blog">BLOG</NavLink>
            <NavLink to="/lienhe">LIÊN HỆ</NavLink>
            <NavLink to="/dangnhap" className="dn">
              ĐĂNG NHẬP
            </NavLink>
            <div className="icon-secial">
              <span className="iconright">
                <FaFacebook />
              </span>
              <span className="iconright">
                <FaInstagram />
              </span>
              <span className="iconright">
                <FaTwitter />
              </span>
            </div>
          </div>
          <div onClick={handleCloseMB} className="close">
            <div className="X">x</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
