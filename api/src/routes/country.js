require("dotenv").config();
const { Router, response } = require('express');
const axios = require('axios')
const { Op } = require('sequelize')
const { Country, Tourism } = require('../db')
const router = Router();
const getCountryApi  = require('../controllers/getCountryApi')
const countriesDBStore = require('../controllers/countriesDBStore')


//* Obtener datos de la api y duardalor en ls DB
router.get('/', async (req, res, next )=> {

  try{
  
    let countries = await getCountryApi()

    let countriesDB = await countriesDBStore(countries)

    res.send(countriesDB );
  }
  catch (err) {
    next(err)
  }

});


router.get('/home', (req, res, next )=> {
  return Country.findAll({
    include: Tourism
  })
  .then(Country => {
    res.send(Country)
  })
  .catch(err => {
    next(err)
  })
});




router.get('/:name', async (req, res, next )=> {
  //* normalizar el nombre recibido para que coteje con la API
  let { name } = req.params;
  name = name.toLowerCase();
  name = capitalizeFirstLetter(name);
  console.log(name);
  
  try {
    const getCountry = await Country.findAll({ 
      where: { 
        name: {
          [Op.iLike]: "%"+ name + "%"
        }},
        order: [
          ['name', 'ASC'],
        ]
      })
      res.send(getCountry)
  }
  catch (error){
    next(error)
  }
  
});

router.get('/id/:id', async (req, res, next )=> {
  let { id }  = req.params;
  console.log(typeof id);
  try {
    const getCountrybyID = await Country.findByPk(id)
    res.send(getCountrybyID)
  }
  catch (error){
    next(error)
  }
  
  
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


module.exports = router;


//!FAILED MONSTERS

// router.get('/', (req, res, next )=> {
  //   let countryPromiseApi = axios.get('https://restcountries.com/v3/all')
  //   let countryPromiseDB = Country.findAll({
    //     include: Tourism
    //   })
    //   Promise.all([
      //     countryPromiseApi, 
      //     countryPromiseDB
      //   ])
      //   .then(response => {
        //     const [countryApi, countryDB] = response;
        
        
        //     let countriesFiltered = countryApi.data.map(country => {
//       return {
  //         name: country.name.common,
  //         id_letters: country.cca3, //* 3 letter code name
  //         image: country.flags[0], //* return a svg direction svg
  //         continent: country.region,
  //         subregion: country.subregion,
  //         capital: country.capital === undefined ? 'unknown' : country.capital[0] , //! no todas las capitales estan definidas
  //         area: country.area,
  //         population: country.population
  //       }
  //     })
  
  //     let allCountries = [...countriesFiltered, ...countryDB]
  //     res.send(allCountries);
  //   })
  // });
  
  // router.post('/', async (req, res, next )=> {
  
  //   const { id_letters, name, image, continent, subregion, capital, area, population } = req.body;
  //   try{
  //     const newCountry = await Country.create({
  //       id_letters, 
  //       name, 
  //       image, 
  //       continent, 
  //       subregion, 
  //       capital, 
  //       area, 
  //       population
  //     })
  //     res.send(newCountry)
  //   }
  //   catch(error){
  //     next(error)
  //   }
  // });