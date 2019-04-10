var express = require('express');
var layouts = require('express-ejs-layouts');

var app = express();

app.set('view engine', 'ejs');
app.use(layouts);
app.use('/', express.static('public'));
//add body parsing
app.use(express.urlencoded({ extended: false}));
app.get('/', (req,res) =>{
  res.render('home')
});

app.use('/dinosaurs', require('./controllers/dinosaurs'))
app.use('/cryptids', require('./controllers/cryptids'))
app.listen(3000,function(){
  console.log("I'm alive");
});
