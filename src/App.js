import './App.css';
import Row from './Row.js'
import React, {useState} from 'react';
import request from './request';
import requests from './request';
import Banner from './Banner'

function App() {

  return (
    <div className="App">

      <Banner/>

      <h1>Netflix clone</h1>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetFlixOriginals} isLargerRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchNetFlixOriginals}/>
      <Row title="Action Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      </div>
  );
}

export default App;
