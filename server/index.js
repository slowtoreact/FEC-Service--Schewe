const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3333;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public/client/dist'));

// middleware as necessary

app.get('/', function (req, res, next) {
    console.log('test successful!');
    res.end();
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
