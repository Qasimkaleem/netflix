import React from "react";
import Row from "./components/Row"
import requests from "./request";


function App() {
  return (
    <div >
    <h1>App</h1>
    <Row title="NETFLIX ORIGNAL" fetchURL={requests.fetchNetflixOriginals}/>
    <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
    </div>
  );
}

export default App;
