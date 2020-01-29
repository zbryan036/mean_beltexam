const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rest_exam', { useNewUrlParser: true });

app.use(express.static(__dirname + 'public/dist/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./Server/Routes/routes')(app);

app.listen(8000, console.log('Port 8000'));