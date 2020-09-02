import axios from "axios";

const {
  GETALLCOUNTRIES,
  ISLOADING,
  GETSINGLECOUNTRY,
} = require("../actionTypes");

export const getAllCountries = () => async (dispatch) => {
  try {
    dispatch({ type: ISLOADING });
    const { data } = await axios.get(`https://restcountries.eu/rest/v2/all`);
    dispatch({ type: GETALLCOUNTRIES, payload: data });
  } catch (err) {
    dispatch({ type: ISLOADING });
  } finally {
    dispatch({ type: ISLOADING });
  }
};

export const getSingleCountry = (country) => async (dispatch) => {
  try {
    dispatch({ type: ISLOADING });
    dispatch({ type: GETSINGLECOUNTRY, payload: country });
  } catch (err) {
    dispatch({ type: ISLOADING });
  } finally {
    dispatch({ type: ISLOADING });
  }
};
