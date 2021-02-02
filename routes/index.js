const path = require('path'),
    router = require('express').Router();

// const apiRoutes = require('./api');

// router.use('/api', apiRoutes);

router.use((req, res) => {
    // catch all if no api here
});

module.exports = router;