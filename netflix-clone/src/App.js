import React from "react";
import "./App.css";
import requests from "./requests";
import Row from "./components/Row";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row title="Netflix Originals" fetchURL={requests.fetchOriginals} />
      <Row title="Trending" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
    </div>
  );
}

export default App;
