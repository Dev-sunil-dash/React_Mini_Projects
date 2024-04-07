// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const todoController = require('./controller/todoController');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/react-todoDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/api/todos', todoController);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
