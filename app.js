const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();

var error = '';

//connect to mongoose
mongoose.connect('mongodb://localhost/vidjot-dev', {})
    .then(() => console.log('MongoDB Connected..'))
    .catch(err => console.log('DB Error: ' + err));

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//index route
app.get('/', (req, res) => {
    const title = 'Welcome';
    res.render('index');
});

app.get('/about', (req, res) => {
    var a = req.query.input;
    res.render('about');
});

const port = 5000;

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});
