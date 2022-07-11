import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsInfo from "./DetailsInfo";

function Details() {
  const { id } = useParams();
  const [details, setDetails] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/product/${id}`)
      .then((res) => setDetails(res.data));
  }, [id]);

  return <div>{details && <DetailsInfo details={details} />}</div>;
}

export default Details;
