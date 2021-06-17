const API_KEY = "fd0b544384c342d2a63c2161b1e0c1ec";


const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTrendingMovies: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
    fetchTrendingShows: `/trending/tv/week?api_key=${API_KEY}&language=en-US`,
}

export default requests;