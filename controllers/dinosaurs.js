var express = require('express');

var router = express.Router();

//data
var fs =  require('fs');
var dinoData =  fs.readFileSync('./dinosaurs.json');
dinoData = JSON.parse(dinoData)

//index (/) get
router.get('/',(req,res) => {res.render('dinosaurs/index',{ myDinos: dinoData })})
//new (/new) get
router.get('/new',(req,res) => {res.render('dinosaurs/new')})
//create (/) post
router.post('/',(req,res)=>{
  dinoData.push(req.body)
  fs.writeFileSync('./dinosaurs.json',JSON.stringify(dinoData))
  res.redirect('/dinosaurs')
})
//show (/:id) get
router.get('/:id',(req,res) => {
  var dinoIndex = parseInt(req.params.id)
  res.render('dinosaurs/show',{ myDino: dinoData[dinoIndex]})
})
//edit (/edit/:id) get
router.get('/edit/:id',(req,res) => {res.render('dinosaurs/edit')})
//update (/:id) put

//destroy (/delete/:id) delete

module.exports = router;
