const { Router, response } = require("express");
const axios = require("axios");
const { Country, Tourism } = require('../db')
require("dotenv").config();


const checkCountries = async (countries) => {
  try{
    let cDB = await Country.findAll({});

    let names = cDB.map(e => e.name)

    return names
    }
  
  catch (err) {
    return [];
  }
};

module.exports = checkCountries;