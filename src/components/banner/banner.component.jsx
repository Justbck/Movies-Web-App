import React, { useState, useEffect } from 'react'
import './banner.styles.scss';
import axios from '../../axios';
import { Button } from 'react-bootstrap';
import { IoMdPlay }  from "react-icons/io";
import { AiOutlineInfoCircle } from "react-icons/ai";


function Banner({ fetchUrl }) {

    const base_url = "https://image.tmdb.org/t/p/original/";
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            //await = when you make this promise what for the answer to come back 
            const request = await axios.get(fetchUrl);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    function truncate(str, n) {
        return str?.length > n ? str.substring(0, n-1) + "..." : str;
    }

    return (
        
        <header className = "banner"
            style = {{
                backgroundSize: "cover",
                backgroundImage: `url("${base_url}${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}
        >

           

            <div className = "banner__contents">
                <h1 className = "banner__title"> {movie?.title || movie?.name || movie?.original_name} </h1>
                <div className = "banner__buttons">
                    <Button className = "banner__button"> <IoMdPlay className = "banner__button__play"/> Play </Button>
                    <Button className = "banner__button"> <AiOutlineInfoCircle/> My List</Button>
                </div>  
                <div className = "banner__description">
                    <h4>{truncate(movie?.overview, 150)}</h4>
                </div>
            </div>

            <div className = "banner--fadeBottom">
            </div>


        </header>
    );
};

export default Banner;