const { Router } = require('express');

//* My routes with theirs methods
const countryRouter = require('./country.js')
const tourismRouter = require('./tourism.js')
const countryTourismRouter = require('./countryTourism.js')

const router = Router();

//* My middlewares formy routes

router.use('/country', countryRouter);
router.use('/tourism', tourismRouter);
//router.use('/countryTourismRouter', countryTourismRouter);


module.exports = router;
