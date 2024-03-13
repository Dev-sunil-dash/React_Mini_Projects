require("./model/db")

const express = require ('express');
const app = express();

const {
    get,
    post,
    update,
    remove
} = require ("./src/task/task.controller")

app.listen(8000)

app.get("/task", get)

app.post("/task", post)

app.put("/task", update)

app.delete("/task", remove)
