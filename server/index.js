const express = require('express');
const cors = require('cors');
const payRoute = require('./routes/PayRoute');

const app = express()
const port = 8000

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