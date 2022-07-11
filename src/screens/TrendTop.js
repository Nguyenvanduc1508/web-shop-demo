import React from "react";
import { useNavigate } from "react-router-dom";

function TrendTop() {
  const navigate = useNavigate();
  return (
    <div className="section-trend">
      <div
        onClick={() => {
          navigate("/donghonam");
        }}
        className="trend-product"
      >
        <div className="img-trend-1"></div>
        <div className="wrp-trend">
          <p className="trend-title">Xu Hướng 2022</p>
          <div className="bb">
            <div className="bcolor"></div>
          </div>
          <p className="trend-name">ĐỒNG HỒ NAM</p>
        </div>
      </div>
      <div
        onClick={() => {
          navigate("/donghonu");
        }}
        className="trend-product"
      >
        <div className="img-trend-2"></div>
        <div className="wrp-trend">
          <p className="trend-title">Xu Hướng 2022</p>
          <div className="bb">
            <div className="bcolor"></div>
          </div>
          <p className="trend-name">ĐỒNG HỒ NỮ</p>
        </div>
      </div>
    </div>
  );
}

export default TrendTop;
