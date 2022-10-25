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
    next(err)
  })
})

//* Postear actividad
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
    next(err)
  })
})

router.post('/:tourismID/country/:countryID', async (req, res, next )=> {
  const { tourismID, countryID } = req.params;
  try {
    const activity = await Tourism.findByPk(tourismID)
    console.log(activity.name);
  await activity.addCountry(countryID);
  res.send(200);
  }
  catch (error){
    next(error)
  }
})

module.exports = router;
