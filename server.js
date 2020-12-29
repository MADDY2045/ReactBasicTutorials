const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
const request = require('request');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.get('/',async (req,res)=>{
    res.send("working");
})

app.post('/createtemplate',(req,res)=>{
    console.log(req.body.data);
    const { data } = req.body;
    let url = 'https://2ecc6220-e7a1-4dc4-9928-4a78b990e407:4667110b-67a1-4b98-a3dd-7045ac56c796@api.karix.io/whatsapp/template/'
    // const headers={
    //     'Content-Type': 'application/json'
    // }
    let urlstring={
        url:url,
        method:'POST',
        json:true,
        body:data
    }
    request(urlstring, function (error, response, body) {
        if (error){
            console.log(`error is ${JSON.stringify(error,null,2)}`)
            res.status(500).send({message:"failure",data:JSON.stringify(error)})
        }else{
            console.log(`body is ${JSON.stringify(body,null,2)}`)
            return res.status(200).send({message:"success",data:body});
        }

        });
    // await axios.post(url,{data:data})
    // .then(async response=>{
    //     console.log(response.data);
    //     await res.status(200).send({message:"success",data:response.data});
    // })
    // .catch(async err=>{
    //     console.log()
    //     await res.status(500).send({message:"failure",data:JSON.stringify(err)})
    // })
})

app.get('/getalltemplates',(req,res)=>{
    let url='https://2ecc6220-e7a1-4dc4-9928-4a78b990e407:4667110b-67a1-4b98-a3dd-7045ac56c796@api.karix.io/whatsapp/template/'
    let urlstring={
        url:url,
        method:'GET',
        json:true,
       }
       request(urlstring, function (error, response, body) {
        if (error){
            console.log(`error is ${JSON.stringify(error,null,2)}`)
            res.status(500).send({message:"failure",data:JSON.stringify(error)})
        }else{
            console.log(`body is ${JSON.stringify(body,null,2)}`)
            return res.status(200).send({message:"success",data:body});
        }

        });
})
const port = 7001;

app.listen(port,()=>console.log(`app is listening on port ${port}`));