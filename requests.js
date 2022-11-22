const API_KEY ="893863c1de54b4855c87c0cd2d7841b7";

const requests = {
fetchTrending: '/trending/all/week?api_key=${API_KEY}&language=en-US',
fetchNetflixOriginals: '/discover/tv?api_key=${API_KEY}&with_networks=213',
fetchTopRated: 'movie/top_rated?api_key=${API_KEY}&language=en-US',
fetchActionMovies: '/discover/movies?api_key=${API_KEY}&with_genres=28',
fetchComedyMovies: '/discover/movies?api_key=${API_KEY}&with_genres=35',
fetchHorrrorMovies: '/discover/movies?api_key=${API_KEY}&with_genres=37',
fetchRomanceMovies: '/discover/movies?api_key=${API_KEY}&with_genres=10749',
fetchDocumentaries: '/discover/movies?api_key=${API_KEY}&with_genres=99',
}

export default requests;