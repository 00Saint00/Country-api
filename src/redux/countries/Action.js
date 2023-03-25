import * as types from "../Type";
import axios from "axios";

const baseUrl = "https://restcountries.com/v2";

export const getCountries = () => async (dispatch) => {
  try {
    dispatch({
      type: types.GET_ALL_COUNTRIES,
    });
    const response = await axios.get(`${baseUrl}/all`, {
      headers: {
        "Content-Types": "application/JSON",
        "Access-Control-Allow-Origin": "*",
      },
    });
    if (response.data.length > 0) {
      dispatch({
        type: types.GET_ALL_COUNTRIES_SUCCESS,
        payload: response.data,
      });
    }
  } catch (error) {
    const message = error.message
      ? error.response.data.message
      : "something went wrong";

    dispatch({
      type: types.GET_ALL_COUNTRIES_FAIL,
      payload: message,
    });
  }
};

export const switchColorMode = () => (dispatch, getState) => {
  const state = getState();
  const darkMode = state.darkModeReducer.darkMode;
  console.log(darkMode);

  dispatch({
    type: types.SWITCH_COLOR_MODE,
    payload: !darkMode,
  });
};

export const getSingleCountries = (name) => async (dispatch) => {
  try {
    dispatch({
      type: types.GET_SINGLE_COUNTRIES,
    });
    const response = await axios.get(`${baseUrl}/name/${name}`, {
      headers: {
        "Content-Type": "application/JSON",
        "Access-Control-Allow-Origin": "*",
      },
    });
    if (response.data.length > 0) {
      dispatch({
        type: types.GET_SINGLE_COUNTRIES_SUCCESS,
        payload: response.data,
      });
    }
  } catch (error) {
    const message = error.message
      ? error.response.data.message
      : "something went wrong";

    dispatch({
      type: types.GET_SINGLE_COUNTRIES_FAIL,
      payload: message,
    });
  }
};
