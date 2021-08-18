const express = require("express");
app = express();

app.get("/", (request, response) => {
    response.send("Toimii");
})
app.listen(5000, () => console.log("Server listening in port 5000"));