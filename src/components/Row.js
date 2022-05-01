import React, { useState, useEffect } from "react";
import axios from "../axios";

const Row = ({ title, fetchURL }) => {
  const { movies, setMovies } = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchURL);
        console.log("request", request);
        return request;
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default Row;
