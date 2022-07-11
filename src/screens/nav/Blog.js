import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import "../../Style/blog.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Blog() {
  const inputRef = useRef();
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    if (!value.trim()) return;
    return navigate(`/search/${value}`) ;
  };

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

  const renderBlog = () => {
    return blogs.map((item, index) => {
      return (
        <div onClick={() => navigate(`/blog/${item.id}`)} className="blog-right-item" key={index}>
          <div className="wrp-img-blog">
            <img src={item.img}></img>
            <div className="date">
              <p className="day">{item.day}</p>
              <p className="month">{item.month}</p>
            </div>
          </div>
          <div className="wrp-text-blog">
            <h5>{item.title}</h5>
            <div className="blog-boder">
              <div></div>
            </div>
            <p>{item.desc}</p>
          </div>
        </div>
      );
    });
  };
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
      <h4>Blogs</h4>
      <div className="section-blog">
        <div className="blog-left">
          <form className="blog-search" onSubmit={handleSubmit}>
            <input ref={inputRef} placeholder="Tìm kiếm..."></input>
            <button>
              <FaSearch />
            </button>
          </form>
          <p>Bài viết mới</p>
          <div className="newpost">{renderBlogLeft()}</div>
        </div>
        <div className="blog-right">
          <div className="wrp-blog">{renderBlog()}</div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
