const express = require('express');
const cors = require('cors');
const payRoute = require('./routes/PayRoute');

const app = express()
const port = 8000

app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      next();
    });

app.use(cors())
app.use(express.json());
app.use(express.static("public"));




app.get("/", (req, res) => {
    res.send("welcome")
})

// app.post("/api", (req, res) => {
//     console.log(req.body)
// const body = req.body

//     res.json({
//         status: 'success',
//         body
//     })
// })

app.use("/api/stripe", payRoute);

app.listen(port, () => {
    console.log(`Server is Running on Port ${port}`)
})