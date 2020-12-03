const express = require('express');
const path = require('path');
const members = require('./Members');

const app = express();

const logger = (req, res, next) => {
   // console.log('hello');
   console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();

}
//init middleware
app.use(logger);

app.get('/api/members', (req, res) => res.json(members));


//app.get('/', (req, res) => {
    //res.send('<h1>Hello World!!!!!</h1>');
    //res.sendFile(path.join( __dirname,'public', 'index.html'));
//});
app.use(express.static(path.join( __dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log(`Server started on port ${PORT}`));
