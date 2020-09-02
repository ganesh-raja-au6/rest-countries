import React, {useEffect} from "react";
import {connect} from "react-redux"

import {getAllCountries} from '../redux/actions/countriesActions'

import Search from "../components/Search";
import Dropdown from "../components/Dropdown";
import Country from "../components/country";

const Home = ({getAllCountries, countries}) => {
  useEffect(()=> {
    getAllCountries()
  }, [])
  return (
    <div className="container">
      <div className="filters">
        <Search />
        <Dropdown />
      </div>
      <div className="countries">
          {/* {countries.length > 0 && countries.map(country => <Country country={country} />)} */}
          <Country />
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    countries: state.countryReducer.countries,
  };
};

export default connect(mapStateToProps,{getAllCountries})(Home)