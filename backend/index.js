const express = require('express');
const cors = require('cors');
const sendmail = require('./mail');
const app =express();

const port = 3443 || process.env.PORT;

app.use(express.json());
app.use(cors());

app.get('/', (req,res) => {
    res.send('hello from the backend');
})

app.post('/sendmail', (req,res) =>{
    console.log(req.body);
    console.log('data received');
    sendmail(req.body, (info)=>{
        console.log(info);
        res.send('mail sent');
    })
    
})
app.listen(port, ()=> console.log('listening on port '+ port));