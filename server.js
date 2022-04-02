

const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {

    const fs = require('fs');
    var filename = "index.html";
    var htmldata = fs.readFile(filename,'utf8',(err,data) => {
        try {
            res.send(data);
        }
        catch(err){
            res.send("404 Error");
        };
    });

})

app.get('/hi', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
