require("dotenv").config();
const { Router, response } = require('express');
// const axios = require('axios')
const { Op } = require('sequelize')
const { Country, Tourism } = require('../db')
const router = Router();
const getCountryApi  = require('../controllers/getCountryApi')
const countriesDBStore = require('../controllers/countriesDBStore')
const checkCountries = require('../controllers/checkCountries')

//* Get the data from the API and sotred in the DB
router.get('/', async (req, res, next )=> {

  try{
  
    let countries = await getCountryApi()

    let check = await checkCountries()

    let countriesDB = await countriesDBStore(countries, check)

    res.send(countriesDB);
  }
  catch (err) {
    next(err)
  }

});


router.get('/home', async (req, res, next )=> {
  try {
    let allCountries = await Country.findAll({
      include: Tourism
    })

    res.send(allCountries)
  }
  catch (err) {
    throw new Error(`Some problem recovering the data ${error}`)
  }
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
        ],
        include: Tourism
      })
      res.send(getCountry)
  }
  catch (error){
    throw new Error(`Name not find ${error}`)
  }
});

router.get('/id/:id', async (req, res, next )=> {
  let { id }  = req.params;
  console.log(typeof id);
  try {
    const getCountrybyID = await Country.findOne({ 
      where: { id: id },
      include: Tourism
    }
      )
    res.send(getCountrybyID)
  }
  catch (error){
    throw new Error(`Country not find ${error}`)
  }
  
  
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


module.exports = router;