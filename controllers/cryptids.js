var express = require('express');

var router = express.Router();

//data
var fs =  require('fs');
var crypData =  fs.readFileSync('./cryptids.json');
crypData = JSON.parse(crypData)

//index (/) get
router.get('/',(req,res) => {res.render('cryptids/index',{ myCryps: crypData })})
//new (/new) get
router.get('/new',(req,res) => {res.render('cryptids/new')})
//create (/) post
router.post('/',(req,res)=>{
  crypData.push(req.body)
  fs.writeFileSync('./cryptids.json',JSON.stringify(crypData))
  res.redirect('/cryptids')
})
//show (/:id) get
router.get('/:id',(req,res) => {
  var crypIndex = parseInt(req.params.id)
  res.render('cryptids/show',{ myCryps: crypData[crypIndex]})
})
//edit (/edit/:id) get
router.get('/edit/:id',(req,res) => {res.render('cryptids/edit')})
//update (/:id) put

//destroy (/delete/:id) delete

module.exports = router;
