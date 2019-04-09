var express = require('express');

var router = express.Router();

//index (/) get
router.get('/',(req,res) => {res.render('dinosaurs/index')})
//new (/new) get
router.get('/new',(req,res) => {res.render('dinosaurs/new')})
//create (/) post

//show (/:id) get
router.get('/:id',(req,res) => {res.render('dinosaurs/show')})
//edit (/edit/:id) get
router.get('/edit/:id',(req,res) => {res.render('dinosaurs/edit')})
//update (/:id) put

//destroy (/delete/:id) delete

module.exports = router;
