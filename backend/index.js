const express = require('express');
const cors = require('cors');
const sendEmail = require('./mail');
const app =express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get('/', (req,res) => {
    res.send('hello from the backend');
})
console.log(process.env.PORT);

app.post('/sendmail', (req,res) =>{
    console.log(req.body);
    console.log('data received');
    sendEmail(req.body, (info)=>{
        console.log(info);
        res.send('mail sent');
    })
    
})
app.listen(port, ()=> console.log('listening on port '+ port));