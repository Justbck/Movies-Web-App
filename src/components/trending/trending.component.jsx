import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import axios from '../../axios';
import './trending.styles.scss';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { IoMdPlay, IoIosArrowDown }  from "react-icons/io";
import { AiOutlinePlus } from 'react-icons/ai';
import { BiLike, BiDislike } from 'react-icons/bi';

function Trending({ title, fetchUrl, isLargeRow }) {

    const base_url = "https://image.tmdb.org/t/p/original/";
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {

        async function fetchData(){
            //await = when you make this promise what for the answer to come back 
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      const handleClick = (movie) => {
          if (trailerUrl) {
            setTrailerUrl("");
          } else {
                movieTrailer(movie?.name || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
            })
            .catch((error) => console.log(error));
          }
      };

    return(
        <Container>
            <Row className = "trending__title">
                <h2>{title}</h2>
            </Row>
           
            <Row className = 'trending'>
                <div className = "trending__posters">
                    {movies.map(movie => (
                        <div
                        key = {movie.id}  
                        onClick = {() => handleClick(movie)}     
                        className = {`trending__poster ${isLargeRow && "trending__posterLarge"} ${movie.id % 2 === 0 && "red"} ${movie.id % 3 === 0 && "reder"} `} 
                        >
                        <img 
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                            alt={movie.name} 
                            className = {`trending__poster__image ${isLargeRow && "trending__posterLarge__image"}`} 
                        />
                        <div
                            className = "trending__poster__description"
                        >
                                <div className ="trending__poster__icons">
                                    <IoMdPlay className = "trending__icon play__icon"/>
                                    <AiOutlinePlus  className = "trending__icon"/>
                                    <BiLike  className = "trending__icon"/>
                                    <BiDislike  className = "trending__icon"/>
                                    <IoIosArrowDown className = "trending__icon trending__arrow"/>
                                </div>  
                                <div>
                                    {movie.vote_average}
                                </div>              
                        </div>
                        <div>
                       
                        </div>
                        </div>
                    ))}
                </div>
                {trailerUrl && <YouTube videoId = {trailerUrl} opts = {opts}/>}
            </Row>

            
        </Container>
    );
}

export default Trending;