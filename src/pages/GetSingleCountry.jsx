import React from "react";
import { connect } from "react-redux";
import Return from "../components/Return";


const Single = ({ country }) => {
    // console.log(history);
  return (
    <div className="container">
      <div className="filters">
        <Return />
      </div>
      <div className="content">
          <div className="flag">
            <img src={country.flag} alt={country.name} />
          </div>
          <div className="desc">
            <h3> {country.name} </h3>
            <div className="sub-desc">
            <div className="left">
                <p>Native Name : <span> {country.nativeName} </span></p>
                <p>Population : <span> {country.population} </span></p>
                <p>Region : <span> {country.region} </span></p>
                <p>Sub Region : <span> {country.subregion} </span></p>
                <p>Capital : <span> {country.capital} </span></p>
            </div>
            <div className="right">
                <p>Top Level Domain : <span> {country.topLevelDomain} </span></p>
                <p>Curriencies : <span> {country.currencies.map(currency => currency.code)} </span></p>
                <p>Languages : <span> {country.languages.map(language => {
                    return(language.name)
                })} </span></p>
            </div>
            </div>
            <div className="bottom-nav">
                <h4>Border Countries: </h4>
                <ul>
                    {country.borders.map((border, index) => {
                        return(
                            <li key={index}> {border} </li>
                        )
                    })}
                </ul>
            </div>
          </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    country: state.countryReducer.singleCountry,
  };
};

export default connect(mapStateToProps)(Single);
