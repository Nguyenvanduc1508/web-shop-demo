import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

function SearchInfo() {
  const { value } = useParams();

  const [datas, setDatas] = useState([]);

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

  let dataSearch = datas.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(value.toString().toLowerCase())
    );
  });

  const renderRight = () => {
    return dataSearch.map((item, index) => {
      return (
        <div className="type-section-item" key={index}>
          <NavLink to={`/details/${item.id}`} className="product-img">
            <img src={item.image} alt="img" />
          </NavLink>
          <div className="info">
            <span className="info-name">{item.name}</span>
            <span className="info-prince">{item.currentPrice}</span>
            <span className="submit">THÊM VÀO GIỎ</span>
          </div>
        </div>
      );
    });
  };
  const renderLeft = () => {
    return datas
      .filter((item) => {
        return item.status === "selling";
      })
      .map((item) => {
        return (
          <NavLink to={`/details/${item.id}`} className="dadsed" key={item.id}>
            <img src={item.image}></img>
            <div className="product_list-right">
              <p className="name-list-right">{item.name}</p>
              <p className="prince-list-right">{item.currentPrice}</p>
            </div>
          </NavLink>
        );
      });
  };
  return (
    <div className="product-type">
      <div className="type-head">
        <div className="type-left">
          <NavLink to="/">TRANG CHỦ</NavLink>
          <span className="type-line">/</span>
          <span className="type-name">kết quả tìm kiếm cho "{value}"</span>
        </div>
        <div className="type-right">
          <span>Hiển thị một kết quả duy nhất</span>
          <select className="oderby">
            <option>Thứ tự mặc định</option>
            <option>Mới nhất</option>
            <option>Thứ tự đánh giá: thấp đến cao</option>
            <option>Thứ tự đánh giá: cao xuống thấp</option>
          </select>
        </div>
      </div>
      <div className="type-section">
        <div className="type-section-left">
          <div className="type-category">
            <h4>DANH MỤC SẢN PHẨM</h4>
            <div className="wrp-category">
              <NavLink to="/donghonam" className="dadsed">
                Đồng hồ nam
              </NavLink>
              <NavLink to="/donghonu">Đồng hồ nữ</NavLink>
            </div>
          </div>
          <div className="type-product">
            <h4>SẢN PHẨM</h4>
            <div className="wrp-category">{renderLeft()}</div>
          </div>
        </div>
        <div className="type-section-right">
          <div className="wrp-type-section">{renderRight() }</div>
        </div>
      </div>
    </div>
  );
}

export default SearchInfo;
