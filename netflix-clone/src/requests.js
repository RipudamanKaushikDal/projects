

const API_KEY = "62e14cff6ee4dcb84a90c4f1d46a46cf";

const requests ={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`
}

export default requests;