import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink, useNavigate } from "react-router-dom";
import { STATUS_CONTENT } from "../config/containts";

function Selling() {
  const [datas, setDatas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/product")
      .then((res) => {
        setDatas(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderSelling = (status = null) => {
    return datas
      .filter((item) => {
        return item.status === status;
      })
      .map((item, index) => {
        return (
          <div className="sell-item" key={index}>
            <NavLink to={`/details/${item.id}`} className="product-img">
              <img src={item.image} alt="img" />
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
    <div className="selling">
      <div className="wrp-top">
        <span className="top-title">Sản phẩm bán chạy</span>
        <div className="control">
          <span className="control-left">
            <FaChevronLeft />
          </span>
          <span className="control-right">
            <FaChevronRight />
          </span>
        </div>
      </div>
      <div className="selling-product">
        {renderSelling(STATUS_CONTENT.SELLING)}
      </div>
    </div>
  );
}

export default Selling;
