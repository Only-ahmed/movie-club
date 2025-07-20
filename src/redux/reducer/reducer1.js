
const initstate = {
    fetchvideos: {},
    pageCount: 0,
    movieDetails: {},
};

export const reducer1 = (state = initstate, action) => {
    switch (action.type) {
        case "FETCH_VIDEOS":
            return { ...state, fetchvideos: action.payload }
        case "page_count":
            return { ...state, fetchvideos: action.payload }
        case "search":
            return { ...state, fetchvideos: action.payload }
        case "singleMovie":
            return { ...state, movieDetails: action.payload }

        default: return { state };
    }
}
