const API_KEY = "9443ba90144c026d64012b555323d3b1";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetFlixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=eu-US`,
    FetchActionMovies:`/discover/movie?api_key=${API_KEY}&witch_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&witch_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&witch_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&witch_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&witch_genres=99`
}

export default requests;