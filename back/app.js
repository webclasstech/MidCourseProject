var express = require('express');
var app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get("/hello", (req, res) => {
    res.send({
        msg: "Hello World!"
    })
})

app.post("/login", (req, res) => {
    let theResponseObj = {};
    if (req.body.email === "johndoe" && req.body.password === "1234") {
        theResponseObj.name = "John";
        theResponseObj.isLoginDetailsCorrect = true;
    }
    else {
        theResponseObj.name = "NA";
        theResponseObj.isLoginDetailsCorrect = false;
    }
    res.send(theResponseObj);
})
app.use(express.static('public'));
//=========================
app.listen(3001, function () {
    console.log('My app is listening on port 3001!');
});
