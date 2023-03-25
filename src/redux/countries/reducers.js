import * as types from "../Type";

export const countryReducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case types.GET_ALL_COUNTRIES:
      return { ...state, loading: true };

    case types.GET_ALL_COUNTRIES_SUCCESS:
      return { ...state, loading: false, country: action.payload };

    case types.GET_ALL_COUNTRIES_FAIL:
      return { ...state, loading: false, error: action.message };

    default:
      return state;
  }
};

export const darkModeReducer = (state = { darkMode: false }, action) => {
  switch (action.type) {
    case types.SWITCH_COLOR_MODE:
      return { ...state, darkMode: action.payload };

    default:
      return state;
  }
};

export const SingleCountryReducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case types.GET_SINGLE_COUNTRIES:
      return { ...state, loading: true };

    case types.GET_SINGLE_COUNTRIES_SUCCESS:
      return { ...state, loading: false, singleCountry: action.payload };

    case types.GET_SINGLE_COUNTRIES_FAIL:
      return { ...state, loading: true, error: action.payload };

    default:
      return state;
  }
};
