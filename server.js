const express = require('express');
const app = express();
const request = require('request');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const port = 4000;

function checkValidUuid(uuid,sid,token,cb){
    let url=`https://${sid}:${token}@api.karix.io/whatsapp/account/${uuid}`;
    let urlstring={
            url:url,
            method:'GET',
            json:true,
    }
    request(urlstring, function (error, response, body) {
        if (error){
            cb(true,{message:"failure"})
        }else{
            if(body.error) return cb(true,{ message:"failure" })
            return cb(null,{ message:"success",data:body })
        }
    });
}

app.get('/listalltemplates/:uuid/:sid/:token',(req,res)=>{
    const { uuid,sid,token } = req.params;
    checkValidUuid(uuid,sid,token,(err,result)=>{
        if(err){
            return res.status(200).send({message:"failure",data:"invalid UUID"})
        }else{
            let url = `https://${sid}:${token}@api.karix.io/whatsapp/template/`
            let urlstring={
                    url:url,
                    method:'GET',
                    json:true,
            }
            request(urlstring, function (error, response, body) {
                if (error){
                    res.status(400).send({message:"failure",data:JSON.stringify(error)})
                }else{
                    if(body.error) return res.status(200).send({message:"failure",data:body.error.message});
                    return res.status(200).send({message:"success",data:body});
                }
            });
        }
    })
})

app.post('/createtemplate/:sid/:token',(req,res)=>{
    const { data } = req.body;
    const { sid,token } = req.params;
    let url = `https://${sid}:${token}@api.karix.io/whatsapp/template/`

    let urlstring={
        url:url,
        method:'POST',
        json:true,
        body:data
    }
    request(urlstring, function (error, response, body) {
        if (error){
            res.status(400).send({message:"failure",data:JSON.stringify(error)})
        }else{
            if(body.error) return res.status(200).send({message:"failure",data:JSON.stringify(body.error.message)});
            else return res.status(200).send({message:"success",data:"Request Submitted Successfully"});
        }
    });
})



app.listen(port, () => console.log(`Port running on ${port}`));