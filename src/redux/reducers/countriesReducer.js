const {
  GETALLCOUNTRIES,
  ISLOADING,
  GETSINGLECOUNTRY,
} = require("../actionTypes");

const initialState = {
  countries: JSON.parse(localStorage.getItem("country")) || null,
  isloading: false,
  singleCountry: null,
};

const countryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GETALLCOUNTRIES:
      localStorage.setItem("country", JSON.stringify(payload));
      return { ...state, countries: payload };
    case ISLOADING:
      return { ...state, isloading: !state.isloading };
    case GETSINGLECOUNTRY:
      return { ...state, singleCountry: payload };
    default:
      return state;
  }
};

export default countryReducer;
