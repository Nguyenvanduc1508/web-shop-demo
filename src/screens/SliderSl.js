import React from "react";
import Slider from "react-slick";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SliderSl() {
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div id="sliderSl">
      <div className="flickity-next">
        <FaChevronRight />
      </div>
      <div className="flickity-prev">
        <FaChevronLeft />
      </div>
      <Slider {...settings}>
        <div className="wrp-slider">
          <div className="img-slider"></div>
          <div className="text-slider">
            <h4>Mona Watch</h4>
            <h1>Đồng Hồ Classico</h1>
            <p>
              Cùng với sự phát triển không ngừng của thời trang thế giới, rất
              nhiều thương hiệu cho ra đời những mẫu đồng hồ nam chính hãng đa
              dạng về phong cách, kiểu dáng, màu sắc, kích cỡ…
            </p>
            <span onClick={() => navigate('/donghonam')}>XEM SẢN PHẨM</span>
          </div>
        </div>
        <div className="wrp-slider">
          <div className="img-slider2"></div>
          <div className="text-slider">
            <h4>Mona Watch</h4>
            <h1>Đồng Hồ Classico</h1>
            <p>
              Cùng với sự phát triển không ngừng của thời trang thế giới, rất
              nhiều thương hiệu cho ra đời những mẫu đồng hồ nam chính hãng đa
              dạng về phong cách, kiểu dáng, màu sắc, kích cỡ…
            </p>
            <span onClick={() => navigate('/donghonu')}>XEM SẢN PHẨM</span>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SliderSl;
