const express = require('express');
const fs = require('fs');
const path = require('path');
// const { runInNewContext } = require('vm');

app = express()
app.use(express.static(path.join(__dirname, "/public")))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3001;


app.post('/api/notes', (req, res) => {

    //Add code here, using fs module to write JSON from req to file. 
    //Send reponse to requester indicating sucess. 


    console.log(`POST Request to /api/notes recieved`)
})

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`)
})