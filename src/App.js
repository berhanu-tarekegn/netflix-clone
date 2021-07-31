import './App.css';
import Row from './Row.js'
import requests from './request';
import Banner from './Banner'
import Nav from './Nav.js'

function App() {

  return (
    <div className="app">

      <Nav/>

      <Banner/>

      <Row title="Netflix Originals" fetchUrl={requests.fetchNetFlixOriginals} isLargerRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchNetFlixOriginals}/>
      <Row title="Action Movies" fetchUrl={requests.FetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
