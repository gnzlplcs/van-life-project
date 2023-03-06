import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../server";

const VanDetail = () => {
  useEffect(() => {}, []);
    fetch(`/api/vans/${params.id}`).then(res => res.json()).then(data=> console.log(data))

  return <h1>Van Detail goes here</h1>;
};

export default VanDetail;
