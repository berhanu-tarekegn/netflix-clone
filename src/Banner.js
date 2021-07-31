import React, { useEffect, useState } from 'react'
import customAxios from './axios'
import requests from './request'
import './Banner.css'

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {

        async function fetchData() {

            const req = await customAxios.get(requests.fetchNetFlixOriginals);

            setMovie(
                req.data.results[
                    Math.floor(Math.random() * req.data.results.length)
                ]
            );
            return req
        }

        fetchData()

    }, [])

   function truncate(str, n) {
     return str?.length > n ? `${str.substr(0, n-1)}...` : str
   }
    return (
        <header className="banner" 
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center center"
            }}    
        >
            
        <div className="banner__contents">
            <h1 className="banner__title">
                { movie?.title || movie?.name || movie?.original_name }
            </h1>

            <div className="banner__buttons">
                <button className="banner__button">My List</button>
                <button className="banner__button">Play</button>
            </div>
            
            <h1 className="banner__descriptions">
                { truncate(movie?.overview, 255)}
            </h1>
        </div>

        <div className="banner__fade__button"/>
        </header>
    )
}

export default Banner