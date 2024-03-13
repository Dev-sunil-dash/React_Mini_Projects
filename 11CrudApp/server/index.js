require("./module/db")
const bodyParser = require("body-parser")
const express = require ('express');
const cors = require ("cors")
const app = express();

const {
    get,
    post,
    update,
    remove
} = require ("./src/student/student.controller")

app.listen(8000)

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get("/student", get)

app.post("/student", post)

app.put("/student/:id", update)

app.delete("/student/:id", remove)
