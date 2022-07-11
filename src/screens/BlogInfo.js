import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "../Style/blog.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BlogInfo({details}) {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/blog")
      .then((result) => {
        setBlogs(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  
  const renderBlogLeft = () => {
    return blogs.map((item, index) => {
      return (
        <div onClick={() => navigate(`/blog/${item.id}`)} className="item-newpost" key={index}>
          <img src={item.img}></img>
          <p>{item.title}</p>
        </div>
      );
    });
  };
  return (
    <div className="navblog">
      <div className="section-blog">
        <div className="blog-left">
          <div className="blog-search">
            <input placeholder="Tìm kiếm..."></input>
            <i>
              <FaSearch />
            </i>
          </div>
          <p>Bài viết mới</p>
          <div className="newpost">{renderBlogLeft()}</div>
        </div>
        <div className="blog-right">
          <div className="wrp-blogs bder-blog">
              <div className="headding-blog"> 
                <h1 className="blogs">Blogs</h1>
                <h1 className="title-info">{details.title}</h1>
              </div>
              <div className="slide-blog">
                <img src={details.img}></img>
                <div className="day-month">
                  <p>{details.day}</p>
                  <p>{details.month}</p>
                </div>
              </div>
              <div className="text-blogs">
                <h2>{details.desc}</h2>
                <p>{details.text_1}</p>
                <p>{details.text_2}</p>
                <p>{details.text_3}</p>
                <p>{details.text_4}</p>
                <p>{details.text_5}</p>
                <p>{details.text_6}</p>
                <p>{details.text_7}</p>
                <p>{details.text_8}</p>
                <p>{details.text_9}</p>
                <p>{details.text_10}</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogInfo;
