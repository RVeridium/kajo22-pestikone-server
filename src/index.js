const express = require("express");
const cors = require('cors'); 
app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'POST'
}
app.use(express.json()); 

app.get("/", (request, response) => {
    response.send("Toimii");
})
app.options('/reception', cors(corsOptions));
app.post('/reception',cors(corsOptions), function(req, res) {
    console.log(req.body);
    res.send(req.body)
})

app.listen(5000, () => console.log("Server listening in port 5000"));