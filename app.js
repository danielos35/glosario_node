const express = require('express');
const app = express();

app.get('/', ( req, res ) => {
    res.status(200).send('Hello');
    console.log(req);
});

const port = 3000;
app.listen(port, (res)=>{
    console.log(res);
});