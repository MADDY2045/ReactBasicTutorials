var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors());





app.get('/',function(req,res){
    return res.send('Hello Server')
});

app.post('/upload',function(req, res) {
    console.log(req.body);
    res.send("success");
});

app.listen(6090, function() {
    console.log('App running on port 6090');
});
