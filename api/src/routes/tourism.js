const { Router } = require('express');
const { Tourism } = require('../db')
const router = Router();

//* Obtener todo
router.get('/', (req, res, next )=> {

  return Tourism.findAll()
  .then(getTourism => {
    res.send(getTourism)
  })
  .catch(err => {
    throw new Error("Cannot acces the data base")
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
  .catch(err => {
    throw new Error("Some problem with the data")
  })

})

router.post('/:tourismID/country/:countryID', async (req, res, next )=> {

  const { tourismID, countryID } = req.params;

  try {
    if(countryID.length === 36){
      console.log('id: ' +  countryID);
      const activity = await Tourism.findByPk(tourismID)
      await activity.addCountry(countryID);
      res.send(200);
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
