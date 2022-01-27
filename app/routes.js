const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// GET SPRINT (or VERSION) NAME - useful for relative templates
router.use('/', (req, res, next) => {
    res.locals.currentURL = req.originalUrl; // Current screen
    res.locals.prevURL = req.get('Referrer'); // Previous screen

    console.log('Previous page is ' + res.locals.prevURL + " and Current page is " + res.locals.currentURL);

    next();
})

module.exports = router
