import React from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Row from "./components/Row/Row";
import requests from "./request";

function App() {
  return (
    <div className="app">
      <Banner />
      <Row
        title="NETFLIX ORIGNAL"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documantaries" fetchURL={requests.fetchDocumantaries} />
    </div>
  );
}

export default App;
