const defaultState = {
  series: [
    "https://mobimg.b-cdn.net/v3/fetch/2b/2b64d58d2479434b8b8112911ce5767f.jpeg",
    "https://mobimg.b-cdn.net/v3/fetch/e4/e482cb38179a9a74c500402b33278af4.jpeg",
    "https://wallpapercave.com/wp/wp10102234.jpg",
    "https://wallpapercave.com/wp/wp10722682.jpg",
  ],
};

const ADD_SERIE = "ADD_SERIE";
const REMOVE_SERIE = "REMOVE_SERIE";

export const seriesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_SERIE:
      return { ...state, series: [...state.series, action.payload] };
    case REMOVE_SERIE:
      return {
        ...state,
        series: state.series.filter((serie) => serie !== action.payload),
      };
    default:
      return state;
  }
};

export const addSerieAction = (payload) => ({type: ADD_SERIE, payload});
export const removeSerieAction = (payload) => ({type: REMOVE_SERIE, payload});