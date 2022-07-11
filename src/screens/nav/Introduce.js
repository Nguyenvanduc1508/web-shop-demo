import React from "react";
import "../../Style/introduct.css";
import about from "../../img/about-us_bg.jpg";
import apw from "../../img/apw.png";
import spm from "../../img/new.png";
import bh from "../../img/baohanh.png";
import dt from "../../img/doitra.png";
import gh from "../../img/vc.png";
import gc from "../../img/giaca.jpg";
import tk from "../../img/tk.png";
import nd from "../../img/nd.png";
import tv from "../../img/tv.png";

function Introduce() {
  return (
    <div className="introduce">
      <div className="introduct-head">
        <div className="intro-left">
          <img src={about}></img>
        </div>
        <div className="intro-right">
          <h2>Giới thiệu về Watch Mona</h2>
          <span>
            “Cùng với sự phát triển không ngừng của thời trang thế giới, rất
            nhiều thương hiệu cho ra đời những mẫu đồng hồ nam chính hãng đa
            dạng về phong cách, kiểu dáng, màu sắc, kích cỡ… Một chiếc đồng hồ
            nam cao cấp chính hãng khắc họa một giá trị đích thực khi nói đến
            phụ kiện xa xỉ dành cho phái mạnh. Hiện nay, đồng hồ là phụ kiện
            thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay.
            Trên cổ tay của những người đàn ông thành đạt luôn dành vị trí cho
            một chiếc đồng hồ nam cao cấp.”
          </span>
        </div>
      </div>
      <div className="gap-element"></div>
      <div className="service">
        <div className="service-item">
          <img src={apw}></img>
          <div className="service-item-right">
            <h4>Hàng chính hãng</h4>
            <p>
              Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những
              người đàn ông hiện đại ngày nay
            </p>
          </div>
        </div>
        <div className="service-item">
          <img src={spm}></img>
          <div className="service-item-right">
            <h4>Hàng chính hãng</h4>
            <p>
              Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những
              người đàn ông hiện đại ngày nay
            </p>
          </div>
        </div>
        <div className="service-item">
          <img src={bh}></img>
          <div className="service-item-right">
            <h4>Hàng chính hãng</h4>
            <p>
              Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những
              người đàn ông hiện đại ngày nay
            </p>
          </div>
        </div>
        <div className="service-item">
          <img src={dt}></img>
          <div className="service-item-right">
            <h4>Hàng chính hãng</h4>
            <p>
              Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những
              người đàn ông hiện đại ngày nay
            </p>
          </div>
        </div>
        <div className="service-item">
          <img src={gh}></img>
          <div className="service-item-right">
            <h4>Hàng chính hãng</h4>
            <p>
              Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những
              người đàn ông hiện đại ngày nay
            </p>
          </div>
        </div>
        <div className="service-item">
          <img src={gc}></img>
          <div className="service-item-right">
            <h4>Hàng chính hãng</h4>
            <p>
              Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những
              người đàn ông hiện đại ngày nay
            </p>
          </div>
        </div>
      </div>
      <div className="gap-element"></div>
      <div className="bg-loaded">
        <div className="wrp-loaded"></div>
        <div className="overley">
          <div className="col-overley">
            <h1>1280</h1>
            <p>SẢN PHẨM</p>
          </div>
          <div className="col-overley">
            <h1>8</h1>
            <p>GIẢI THƯỞNG</p>
          </div>
          <div className="col-overley">
            <h1>3898</h1>
            <p>KHÁCH HÀI LÒNG</p>
          </div>
          <div className="col-overley">
            <h1>25</h1>
            <p>CHI NHANH CỬA HÀNG</p>
          </div>
        </div>
      </div>
      <div className="testimonial">
        <div className="textimonial-item">
          <img src={tk}></img>
          <p className="text-textimonial">
            Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những
            người đàn ông hiện đại ngày nay
          </p>
          <p className="name-textimonial">Thuý Kiều</p>
        </div>
        <div className="textimonial-item">
          <img src={nd}></img>
          <p className="text-textimonial">
            Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những
            người đàn ông hiện đại ngày nay
          </p>
          <p className="name-textimonial">Nguyễn Du</p>
        </div>
        <div className="textimonial-item">
          <img src={tv}></img>
          <p className="text-textimonial">
            Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những
            người đàn ông hiện đại ngày nay
          </p>
          <p className="name-textimonial">Thuý Vân</p>
        </div>
      </div>
      <div className="gap-element"></div>
    </div>
  );
}

export default Introduce;
