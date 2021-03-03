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
            console.log(`error is ${JSON.stringify(error,null,2)}`)
            cb(true,{message:"failure"})
        }else{
            console.log(`body in valid uuid function is .... ${JSON.stringify(body,null,2)}`)
            if(body.error) return cb(true,{ message:"failure" })
            return cb(null,{ message:"success",data:body })
        }
    });
}

app.get('/listtemplatebyid/:uuid',(req,res)=>{
    console.log('uuid is.....',req.params.uuid);


})

app.get('/listalltemplates/:uuid',(req,res)=>{

    console.log(`uuid is ....${req.params.uuid}`);

    checkValidUuid(req.params.uuid,(err,result)=>{

        console.log(`actual callback err is...`,err);
        console.log(`actual callback result is...`,result);

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
                    console.log(`error is ${JSON.stringify(error,null,2)}`)
                    res.status(400).send({message:"failure",data:JSON.stringify(error)})
                }else{
                    console.log(`body inside callback is ${JSON.stringify(body,null,2)}`)
                    if(body.error) return res.status(200).send({message:"failure",data:body.error.message});
                    return res.status(200).send({message:"success",data:body});
                }
            });
        }
    })
})

app.post('/createtemplate',(req,res)=>{
    console.log(req.body);
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
            console.log(`error is ${JSON.stringify(error,null,2)}`)
            res.status(400).send({message:"failure",data:JSON.stringify(error)})
        }else{
            console.log(`body is ${JSON.stringify(body,null,2)}`)
            console.log('error...',body.error)
            if(body.error) return res.status(200).send({message:"failure",data:JSON.stringify(body.error.message)});
            else return res.status(200).send({message:"success",data:body});
        }
    });
})



app.listen(port, () => console.log(`Port running on ${port}`));