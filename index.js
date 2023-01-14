const express = require('express')
const path = require('path')
const routes = require('./routes/routes')
const app = express()

app.use(express.json())
app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'))
app.set('view engine', 'html');
app.use('/', routes)
app.listen(3000, ()=>{
    console.log("Server Started...");
})


module.exports = app



