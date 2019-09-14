const express=require('express');
const app=express();
const bodyParser=require('body-parser');


const cookieparser=require('cookie-parser');
app.use(cookieparser());

//congigure view engine :Hbs
var path=require('path');
app.set('views',path.join(__dirname,'views')); //location
app.set('view engine','hbs');//extension

//configure body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));

const logincontroller=require('./controllers/LoginController');
const hellocontroller=require('./controllers/hellocontroller');

const URL="mongodb://localhost:27017/EMSDB";
const mongoose=require('mongoose');
mongoose.connect(URL,{ useNewUrlParser: true });

app.listen(3000,()=>{
  console.log("Server started....");
});


app.use('/',logincontroller);
app.use('/EMSApp',hellocontroller);
