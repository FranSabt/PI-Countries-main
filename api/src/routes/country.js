const { Router } = require('express');
const { Country, Tourism } = require('../db')
const router = Router();

router.get('/', (req, res, next )=> {
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

router.post('/', async (req, res, next )=> {

  const { id_letters, name, image, continent, subregion, capital, area, population } = req.body;
  try{
    const newCountry = await Country.create({
      id_letters, 
      name, 
      image, 
      continent, 
      subregion, 
      capital, 
      area, 
      population
    })
    res.send(newCountry)
  }
  catch(error){
    next(error)
  }
});


router.get('/:name', async (req, res, next )=> {
  //* normalizar el nombre recibido para que coteje con la API
  let { name } = req.params;
  name = name.toLowerCase();
  name = capitalizeFirstLetter(name);
  console.log(name);

  try {
    const getCountry = await Country.findAll({ where: 
      { name: name } 
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
