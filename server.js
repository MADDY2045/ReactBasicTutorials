var express = require('express');
var app = express();
const multer = require('multer');
var cors = require('cors');
const dateformat = require('dateformat');

var date = Date.now();
var storage = multer.diskStorage({
  destination:(req,file,cb)=>cb(null,'./src/assets'),
  filename:(req,file,cb)=>cb(null,`${file.originalname}_${date}`)
})
app.use(cors());

var upload = multer({storage}).array('file',5);

app.get('/',function(req,res){
    return res.send('Hello Server')
});

app.post('/upload',function(req, res) {
  upload(req,res,(err)=>{
    if(err instanceof multer.MulterError){
      console.log(`error in uploading: ${err}`)
      return res.status(500).json(err)
    }else if(err){
      console.log(`general error in uploading: ${err}`)
      return res.status(500).json(err)
    }
    return res.status(200).send(req.file);
  })
});

app.listen(6090, function() {
    console.log('App running on port 6090');
});
