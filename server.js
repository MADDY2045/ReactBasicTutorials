const express = require('express');
const app = express();
const cors = require('cors');
const { OAuth2Client } = require('google-auth-library');
let client = new OAuth2Client('485008776010-mj3o94klbaj6kq2885u72lft8v999p7s.apps.googleusercontent.com');

const googleAuth = async (token)=>{
    const ticket = await client.verifyIdToken({
        idToken:token,
        audience:'485008776010-mj3o94klbaj6kq2885u72lft8v999p7s.apps.googleusercontent.com'
    })
    const payload = ticket.getPayload();
    console.log(`user ${payload.name} is verified`);
    const { sub,email,name,picture } = payload;
    const userId = sub;
    return { userId,email,fullname:name,pictureurl:picture}
}



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.get('/',async (req,res)=>{
    res.send("working");
})

app.post('/handleuser',async (req,res)=>{
    console.log(req.body.data);
    var result=await googleAuth(req.body.data);
    res.send(result);
})
const port = 7001;

app.listen(port,()=>console.log(`app is listening on port ${port}`));