const express=require('express');
var router=express.Router();

router.get('/',(request,response)=>{
response.render('login');
});

const Login=require('../model/login');

router.post('/check',(request,response)=>{
         Login.findOne({userid:request.body.uid,password:request.body.pwd},
           (err,result)=>{
             //console.log(result);
           if(err) throw err;
            if(result!=null)
           {
             response.cookie('user',request.body.uid);
             var userdata=request.cookies; //{user:'admin'}
            console.log(userdata);
             response.render('home',{data:userdata});
           }
          else
           response.render('login',{msg:"Login Fail "});
         });
       });

module.exports=router;
