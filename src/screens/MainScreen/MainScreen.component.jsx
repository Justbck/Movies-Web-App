import React from 'react';
import {Row} from 'react-bootstrap';
import Navbar from '../../components/navbar/navbar.component';
import Trending from '../../components/trending/trending.component';
import requests from '../../requests.js';
import { Container } from 'react-bootstrap';
import Banner from '../../components/banner/banner.component';


function MainScreen() {

    return(
        <Container>
            <Banner fetchUrl = {requests.fetchTrendingShows}/>
        <Row>
            <Trending title = "NETFLIX ORIGINALS" fetchUrl = {requests.fetchTrendingShows}/>
            <Trending title = "Popular on Netflix" fetchUrl = {requests.fetchTrending}/>
            <Trending 
                title = "MOVIES" 
                fetchUrl = {requests.fetchTrendingMovies}
                isLargeRow
            />
        </Row>
        </Container>
    );
}

export default MainScreen;