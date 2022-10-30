const { Router, response } = require("express");
const axios = require("axios");
const { Country, Tourism } = require('../db')
require("dotenv").config();


const countriesDBStore = (countries) => {
  let cDB = Promise.all(countries.map((e) => {
    return Country.create({
      id_letters: e.id_letters ? e.id_letters : "unknown",
      name: e.name,
      image: e.image ? e.image[0] : "unknown",
      continent: e.continent ? e.continent:  "unknown",
      subregion: e.subregion ? e.subregion : "unknown",
      capital: e.capital ? e.capital[0] : "unknown",
      area: e.area ? e.area: 0,
      population: e.population ? e.population : 0,
    });
    
  }))
  
  console.log(cDB);
  return cDB;
};

// const countriesDBStore = async (countries) => {
//   let cDB = await countries.map((e) => {
//     return Country.create({
//       id_letters: e.id_letters ? e.id_letters : "unknown",
//       name: e.name,
//       image: e.image ? e.image[0] : "unknown",
//       continent: e.continent ? e.continent:  "unknown",
//       subregion: e.subregion ? e.subregion : "unknown",
//       capital: e.capital ? e.capital[0] : "unknown",
//       area: e.area ? e.area: 0,
//       population: e.population ? e.population : 0,
//     });

//   });
//   console.log(cDB);
//   return cDB;
// };
module.exports = countriesDBStore;