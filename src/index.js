const express = require("express");
const cors = require('cors'); 
app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'POST'
}
//cors(corsOptions)
app.use(express.json()); 


app.get("/", (request, response) => {
    response.send("Toimii");
})

app.post('/reception',cors(corsOptions), function(req, res) {
    console.log(req.body);
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.send(req.body)
})

app.listen(5000, () => console.log("Server listening in port 5000"));