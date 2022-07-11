import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { STATUS_CONTENT } from "../config/containts";

function Allprd() {
  const [toggleState, setToggleState] = useState(1);
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
  const renderAll = (status = null) => {
    
    return datas
      .filter((item) => {
        return item.status === status;
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
              <button onClick={() => navigate(`/details/${item.id}`)} className="submit">XEM SẢN PHẨM</button>
            </div>
          </div>
        );
      });
  };
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="allProduct">
      <div className="wrp-top">
        <div className="nav-left">
          <span
            onClick={() => toggleTab(1)}
            className={toggleState === 1 ? "tabs tabs-active" : "tabs"}
          >
            Sản phẩm phổ biến
          </span>
          <span
            onClick={() => toggleTab(2)}
            className={toggleState === 2 ? "tabs tabs-active" : "tabs"}
          >
            Sản phẩm khuyến mãi
          </span>
          <span
            onClick={() => toggleTab(3)}
            className={toggleState === 3 ? "tabs tabs-active" : "tabs"}
          >
            Sản phẩm mới
          </span>
        </div>
      </div>
      <div className="wrp-product">
        <div className={toggleState === 1 ? "row row-active" : "row"}>
          {renderAll(STATUS_CONTENT.COMMON)}
        </div>
        <div className={toggleState === 2 ? "row row-active" : "row"}>
          {renderAll(STATUS_CONTENT.PROMOTION)}
        </div>
        <div className={toggleState === 3 ? "row row-active" : "row"}>
          {renderAll(STATUS_CONTENT.NEW)}
        </div>
      </div>
    </div>
  );
}

export default Allprd;
