const express = require('express');
const app = express();
const request = require('request');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const port = 4000;

function checkValidUuid(uuid,cb){

    let url=`https://18c93926-8eab-4033-b93d-69244c922ae3:558dc45b-4d33-4f95-ba74-2a30ede484d5@api.karix.io/whatsapp/account/${uuid}`;

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

app.get('/listalltemplates/:uuid',(req,res)=>{
    checkValidUuid(req.params.uuid,(err,result)=>{
        if(err){
            return res.status(200).send({message:"failure",data:"invalid UUID"})
        }else{
            let url=`https://18c93926-8eab-4033-b93d-69244c922ae3:558dc45b-4d33-4f95-ba74-2a30ede484d5@api.karix.io/whatsapp/template/`
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

app.post('/createtemplate',(req,res)=>{
    const { data } = req.body;
    let url = 'https://18c93926-8eab-4033-b93d-69244c922ae3:558dc45b-4d33-4f95-ba74-2a30ede484d5@api.karix.io/whatsapp/template/'

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
            else return res.status(200).send({message:"success",data:body});
        }
    });
})



app.listen(port, () => console.log(`Port running on ${port}`));