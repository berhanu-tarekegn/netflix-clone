import React, { useEffect, useState } from 'react'
import customAxios from './axios'
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, isLargerRow }) {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {

        async function fetchData() {
            const request = await customAxios.get(fetchUrl);

            setMovies(request.data.results);

            return request;
        }

        fetchData()

    }, [fetchUrl])

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1
        }

    }

    const handleClick = (movie) => {
        if(trailerUrl) {
            setTrailerUrl("")
        } else {
            movieTrailer(movie?.name || "")
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            }).catch((error) => console.log(error))
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            
            <div className="row__posters">

                {
                movies.map(movie => (
                    <img
                    onClick={() => handleClick(movie)}
                    key={movie.id}
                    className={`row__poster ${isLargerRow && "row__poster__large"}`}
                    src={`${base_url}${isLargerRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                ))
                }
            </div>
            {
                trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>
        
            }
            </div>
    )
}

export default Row