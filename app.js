const express = require('express');
const app = express();

app.get('/', ( req, res ) => {
    res.status(200).json({data:'Hello word'});
});


app.post('/', ( req, res ) => {
    res.send('You can post to this endpoint...')
})

const port = 3000;
app.listen(port, (res)=>{
    console.log(res);
});
