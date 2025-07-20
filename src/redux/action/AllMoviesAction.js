import axios from "axios";

export const fetchallmovies = () => async (dispatch) => {
    try {
        await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=199e5acf40ec40badd6f5f3942ed561c&language=ar`)
            .then((respond) => {
                dispatch({ type: "FETCH_VIDEOS", payload: respond.data.results });
            });
    } catch (error) {
        console.log("error", error);
    }
}
export const GetMovieDetails = (id) => async (dispatch) => {
    try {
        await axios.get(`https://api.themoviedb.org/3/movie/${id.id}?api_key=199e5acf40ec40badd6f5f3942ed561c&language=ar`)
            .then((respond) => {
                dispatch({ type: "singleMovie", payload: respond.data });
            });
    } catch (error) {
        console.log("error", error);
    }
}
export const Searchfunc = (word) => async (dispatch) => {
    try {
        await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=199e5acf40ec40badd6f5f3942ed561c&query=${word}&include_adult=false&language=en-US&page=1`)
            .then((respond) => {
                dispatch({ type: "search", payload: respond.data.results });
            });
    } catch (error) {
        console.log("error", error);
    }
}

export const paging = (page) => async (dispatch) => {
    try {
        await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=199e5acf40ec40badd6f5f3942ed561c&language=en-US&page=${page}`)
            .then((response) => {
                dispatch({ type: "page_count", payload: response.data.results });
            });
    } catch (error) {
        console.log("paging-error", error);
    }
}

export const handleResize = (value) => {
    if (value >= 320 && value <= 480) {
        return '2';
    } else if (value >= 480 && value <= 767) {
        return '3';
    }
    return '4';
}
export const toUpperPage = (up) => {
    if (up >= 250) {
        return 'showUp';
    } else if (up < 250) {
        return 'hideUp';
    }
}