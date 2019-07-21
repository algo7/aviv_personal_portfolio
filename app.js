//Dependencies
const express = require('express');
const BodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');

//Global Constant || Heroku Deployment Setup
const port = process.env.PORT || 443;
//Initialize the App
const app = express();

//BodyParser Middleware
app.use(BodyParser.urlencoded({
    extended: false
}));
app.use(BodyParser.json());

//Set Static Folder (Absolute)

app.use('/', express.static(path.join(__dirname, 'public')));

//Load Routes
const Index = require('./routes/index');

//Use Routes
app.use('/', Index);

//Handlebars Middleware
app.engine('handlebars', exphbs({
    defaultLayout: ''

}));

app.set('view engine', 'handlebars');

//Start the Server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});