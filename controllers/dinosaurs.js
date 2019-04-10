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
  res.render('dinosaurs/show',{ myDino: dinoData[dinoIndex], dinoIndex: dinoIndex})
})
//edit (/edit/:id) get
router.get('/edit/:id',(req,res) => {
  var dinoIndex = parseInt(req.params.id)
  res.render('dinosaurs/edit',{myDino: dinoData[dinoIndex], dinoIndex: dinoIndex})
})
//update (/:id) put
router.put('/:id',(req,res)=>{
  dinoData[req.params.id].name = req.body.name
  dinoData[req.params.id].type = req.body.type
  fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData))
  res.redirect(`/dinosaurs/${req.params.id}`)
})

//destroy (/delete/:id) delete
router.delete('/:id',(req,res)=>{
  dinoData.splice(req.params.id,1)
  fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData))
  res.redirect('/dinosaurs')
})



module.exports = router;
