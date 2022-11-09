const { Router } = require('express');
const { Tourism, Country } = require('../db')
const router = Router();

//* Obtener todo
router.get('/', (req, res, next )=> {

  return Tourism.findAll()
  .then(getTourism => {
    res.send(getTourism)
  })
  .catch(error => {
    throw new Error(`Cannot acces the data base ${error}`)
  })

})

// //* Postear actividad
router.post('/', (req, res, next )=> {

  const  { name, dificulty, duration, season} = req.body;

  return Tourism.create({ 
    name, 
    dificulty, 
    duration, 
    season
  })
  .then(newTourism => {
    res.send(newTourism)
  })
  .catch(error => {
    throw new Error(`Some problem with the data ${error}`)
  })

})

router.post('/:tourismID/country/:countryID', async (req, res, next )=> {

  const { tourismID, countryID } = req.params;

  try {
    if(countryID.length === 36){
      let country = await Country.findByPk(countryID)
      if(country.activity !== undefined  && country.activity.find(e => e.id === tourismID)){
        res.send('Country has already that activity');
      }
      else {
        console.log('id: ' +  countryID);
      const activity = await Tourism.findByPk(tourismID)
      await activity.addCountry(countryID);
      res.send(200);
      }
    }
    else{
      res.send('Bad id');
    }
    
  }
  catch (error){
    throw new Error("Relating info was not possible: " + error)
  }

})

module.exports = router;
