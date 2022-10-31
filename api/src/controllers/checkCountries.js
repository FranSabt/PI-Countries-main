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

 //const checkCountries = (countries) => {
//     const check = await Dog.findAll(
//         { where:{ name } }
//       );
// }

// const { name , image, heightMax, heightMin, weightMin, weightMax, oldYearMin, oldYearMax, temperament, createdFor } = req.body;
//     let dogId = undefined;
//     let temperamentId = [];
//     const checkDog = await Dog.findAll(
//       { where:{name} }
//     );
//     //Analizando si perro ya existe
//     if(checkDog[0]){ dogId= checkDog[0].dataValues.id;
//       if(dogId){
//       //console.log(dogId);
//       //Si perro existe devuelmeme un JSON con el siguiente objeto
//       res.json({BD_Has_THIS_Dog:'yes',name:name});}}
//     else{
//       //Si perro no existe crealo
//     try {
//       const newDog = await Dog.create({
//         name,
//         image,
//         heightMax,
//         heightMin,
//         weightMin,
