// const { Router, response } = require("express");
const axios = require("axios");
require("dotenv").config();



const getCountryApi = async () => {
  const countryApi = await axios.get("https://restcountries.com/v3/all");

  const  results = countryApi.data

  if (results.length > 0){
    let countriesFiltered = results?.map((country) => {
      return {
        name: country.name.common,
        id_letters: country.cca3, //* 3 letter code name
        image: country.flags, //* return a svg direction svg
        continent: country.region,
        subregion: country.subregion,
        capital: country.capital,
        area: country.area,
        population: country.population > 1 ? country.population : 1 ,
      };
    });

    return  countriesFiltered;
  }
  else {
    throw new Error("Countries not find or no conection possible")
  }
};

module.exports = getCountryApi;