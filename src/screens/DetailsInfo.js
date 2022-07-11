import React, { useEffect, useState } from "react";
import { NavLink, useNavigate} from "react-router-dom";
import axios from "axios";
import "../Style/details.css";
import ghn from "../img/ship/logo-ghn.jpg";
import ghtk from "../img/ship/logo-ghtk.jpg";
import ninja from "../img/ship/logo-ninja-van.jpg";
import shipchung from "../img/ship/logo-shipchung.jpg";
import viettel from "../img/ship/logo-viettle-post.jpg";
import vnpost from "../img/ship/logo-vn-post.jpg";
import acb from "../img/ship/logo-acb.jpg";
import tcb from "../img/ship/logo-techcombank.jpg";
import vcb from "../img/ship/logo-vcb.jpg";
import vib from "../img/ship/logo-vib.jpg";
import paypal from "../img/ship/logo-paypal.jpg";
import mastercard from "../img/ship/logo-mastercard.jpg";

function DetailsInfo({ details }) {
  const [datas, setDatas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/product")
      .then((result) => {
        setDatas(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderCommon = () => {
    return datas
      .filter((item) => {
        return item.status === "common";
      })
      .map((item, index) => {
        return (
          <div className="col-item" key={index}>
            <NavLink to={`/details/${item.id}`} className="product-img">
              <img src={item.image}></img>
            </NavLink>
            <div className="info">
              <span className="info-name">{item.name}</span>
              <span className="info-prince">{item.currentPrice}</span>
              <span onClick={() => navigate(`/details/${item.id}`)} className="submit">XEM SẢN PHẨM</span>
            </div>
          </div>
        );
      });
  };
  return (
    <div className="details">
      <div className="details_top">
        <div className="details_top_left">
          <div className="details-img">
            <img src={details.image}></img>
          </div>
        </div>
        <div className="details_top_right">
          <div className="previouspage">
            <NavLink to="/">Trang chủ</NavLink>
            <span className="type-line">/</span>
            <NavLink to="/donghonam">{details.sex}</NavLink>
          </div>
          <h1>{details.name}</h1>
          <div className="blog-boder">
            <div className="bd-5"></div>
          </div>
          <p className="details-prince">{details.currentPrice}</p>
          <p className="details-desc">{details.desc}</p>
          <ul>
            <li>Sku: {details.id}</li>
            <li>Categories: {details.sex}</li>
            <li>Tag: Man</li>
          </ul>
          <div className="quantity">
            <div className="quantity_btn">
              <span className="minus">&#8315;</span>
              <span className="number">1</span>
              <span className="plus">&#8314;</span>
            </div>
            <div className="addcard">THÊM VÀO GIỎ</div>
          </div>
          <div className="delivery_payment">
            <div className="delivery_payment-row">
              <h4>Tính phí ship tự động</h4>
              <div className="wrp-automatic">
                <div className="img-ghn">
                  <img src={ghn}></img>
                </div>
                <div className="img-ghn">
                  <img src={ghtk}></img>
                </div>
                <div className="img-ghn">
                  <img src={ninja}></img>
                </div>
                <div className="img-ghn">
                  <img src={shipchung}></img>
                </div>
                <div className="img-ghn">
                  <img src={viettel}></img>
                </div>
                <div className="img-ghn">
                  <img src={vnpost}></img>
                </div>
              </div>
            </div>
            <div className="delivery_payment-row">
              <h4>Thanh toán</h4>
              <div className="wrp-automatic">
                <div className="img-ghn">
                  <img src={acb}></img>
                </div>
                <div className="img-ghn">
                  <img src={tcb}></img>
                </div>
                <div className="img-ghn">
                  <img src={vcb}></img>
                </div>
                <div className="img-ghn">
                  <img src={vib}></img>
                </div>
                <div className="img-ghn">
                  <img src={paypal}></img>
                </div>
                <div className="img-ghn">
                  <img src={mastercard}></img>
                </div>
              </div>
            </div>
          </div>
          <p className="affilicate">
            "Hãy trở thành Affilicate của chúng tôi để tìm thêm thu nhập thụ
            động, kiếm tiền online"
          </p>
          <button className="dk-affilicate">Đăng ký Affilicate</button>
        </div>
      </div>
      <div className="details_bottom">
        <h3>Sản phẩm tương tự</h3>
        <div className="row row-active">{renderCommon()}</div>
      </div>
    </div>
  );
}

export default DetailsInfo;
