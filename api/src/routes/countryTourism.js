const { Router } = require('express');
const { CountryTourism } = require('../db')
const router = Router();


router.get('/', (req, res, next )=> {
    return CountryTourism.findAll()
    .then(ct => {
      res.send(ct)
    })
    .catch(err => {
      next(err)
    })
  });