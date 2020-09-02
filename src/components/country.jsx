import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSingleCountry } from "../redux/actions/countriesActions";
import { Redirect, withRouter } from "react-router-dom";

const Country = ({ countries, getSingleCountry, history }) => {
  const handleCountry = (country) => {
    getSingleCountry(country);
    history.push('/single')
  };

  return (
    <div>
      {countries.length > 0 &&
        countries.map((country) => {
          return (
            <div
              key={country.alpha2Code}
              className="country"
              onClick={() => handleCountry(country)}
            >
              <img src={country.flag} alt={country.name} />
              <div className="details">
                <h3> {country.name} </h3>
                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Capital: {country.capital}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    countries: state.countryReducer.countries,
  };
};

export default connect(mapStateToProps, { getSingleCountry })(withRouter(Country));
