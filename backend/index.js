const express = require('express');

const app =express();

const port = 3443 || process.env.PORT;

app.use(express.json());

app.get('/', (req,res) => {
    res.send('hello from the backend');
})

app.listen(port, ()=> console.log('listening on port '+ port));