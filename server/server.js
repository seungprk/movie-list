var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('tiny'));
app.use(express.static('public'));

app.listen(3000, () => console.log('Listening on port 3000...'));
