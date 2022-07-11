import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogInfo from "./BlogInfo";

function DetailsBlog() {
  const { id } = useParams();
  const [details, setDetails] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/blog/${id}`)
      .then((res) => setDetails(res.data));
  }, [id]);

  return <div>{details && <BlogInfo details={details} />}</div>;
}

export default DetailsBlog;
