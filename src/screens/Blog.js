import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Blog() {
  const [blog, setBlog] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/blog")
      .then((result) => {
        setBlog(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderBlog = () => {
    return blog.map((item, index) => {
      return (
        <div onClick={() => navigate(`/blog/${item.id}`)} className="blog-item" key={index}>
          <div className="blog-img">
            <img src={item.img}></img>
          </div>
          <div>
            <p className="blog-title">{item.title}</p>
            <p className="blog-desc">{item.desc}</p>
          </div>
        </div>
      );
    });
  };
  return <div className="blog">{renderBlog()}</div>;
}

export default Blog;
