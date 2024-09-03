const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile("public\\index.html", (err) => {
        if (err) {
            console.log(err);
        }
    })
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});

app.post("/form", jsonParser, (req, res) => {
    const body = req.body;
    const name1 = body.name1;
    const name2 = body.name2;
    const email = body.email;
    const message = body.message;
    res.send(`POST by form.js - name1 = ${name1}, name2 = ${name2}, email = ${email}, message = ${message}`);
});