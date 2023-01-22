require('dotenv').config()
const express=require('express');
const app=express();
const path=require('path');
const port= process.env.PORT || 3000;
const bodyParser=require('body-parser');
const jsdom = require("jsdom");
const { AsyncLocalStorage } = require('async_hooks');
const { lchmod } = require('fs');
const { JSDOM } = jsdom;
require('./admin_config')
const admin = require("firebase-admin");
const fdb=admin.firestore();
const cookie = require('cookie');
const cookieParser = require("cookie-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/css', express.static(__dirname + '/public'))
app.use("/public", express.static(__dirname + "/public"));
app.get('/:fid',(req,res)=>{

    res.sendFile(path.join(__dirname+'/views/startpage.html'));
    
    
});

    
app.get('/:fid/employers',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/employers.html'))  
});

app.get('/:fid/a_employers',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/after_employers.html'))  
});

app.get('/:fid/services',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/services.html'))  
});

app.get('/:fid/startpage',(req,res)=>{

    res.sendFile(path.join(__dirname+'/views/startpage.html'))  
});

app.post('/:fid/infopage',(req,res)=>{
   

    res.sendFile(path.join(__dirname+'/views/infopage.html'))  
});

app.get('/:fid/appointment',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/appointment.html'))  
});

app.post('/:fid/appointment',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/appointment.html'))  
});

app.get('/:fid/confirm',(req,res)=>{
   console.log(req.cookies)
    res.sendFile(path.join(__dirname+'/views/confirm.html'))  
});

app.post('/:fid/confirmed',async(req,res)=>{
    const {user_name,surname,number,comment}=req.body;

    const employer_name=req.cookies['name'];
    const service=req.cookies['service'];
    const time=req.cookies['time'];
    console.log(time)
    var full_time=time.split(" ");
    var month=getMonth(full_time[1]);
    var date=`${full_time[0]}/${month}/${full_time[2]}`
    var data={
        employer_name:employer_name.trim(),
        service:service,
        date:date,
        time:full_time[4],
        user_name:user_name.trim(),
        user_surname:surname.trim(),
        user_number: number.trim(),
        comment:comment.trim()
    }
    var fid=req.params['fid']
    
    
    await fdb.collection('company').doc(`${fid}`).collection('employers_schedule').add(data)
    res.clearCookie('name');
    res.clearCookie('service');
    res.clearCookie('time');
    res.redirect(`/${fid}`)
    
 
})

const getMonth=(month)=>{
    if(month=="Сентябрь"){
        return '09'
    }
    if(month=="Октябрь"){
        return '10'
    }
    if(month=="Ноябрь"){
        return '11'
    }
    if(month=="Декабрь"){
        return '12'
    }
    if(month=="Январь"){
        return '01'
    }
    if(month=="Февраль"){
        return '02'
    }
    if(month=="Март"){
        return '03'
    }
    if(month=="Апрель"){
        return '04'
    }
    if(month=="Май"){
        return '05'
    }
    if(month=="Июнь"){
        return '06'
    }
    if(month=="Июль"){
        return '07'
    }
    if(month=="Август"){
        return '08'
    }
    
}

app.listen(port, ()=>{
    console.log(`App listening at http://localhost:${port}`);
});

