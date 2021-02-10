/* 
    If this file gets too big, just abstract it all out
    to the `routes/` directory.
*/

const router = require('express').Router(),
    path = require('path');

// router.route("/")
//     .get()
//     .post()
//     .put();

router.route('/')
    .get((req, res) => {
        res.render('index');
    })

router.route('/s-glass-hf')
    .get((req, res) => {
        res.render('partials/shiny-glass-hover-front/glass')
    })

router.route('/pixi')
    .get((req, res) => {
        res.render('partials/pixi/pixi')
    })

router.route("/:pId/:cId")
    .delete();

router
    .route("/many-del/:id")
    .delete();

router.use((req, res) => {
    // catch all if no api here
});

module.exports = router;