const path = require('path')
const express = require('express')
const routes = require('./server/routes/index')
const engine = require('consolidate')
const bodyParser = require('body-parser')
const session = require('express-session');

// Configuracion.
const app = express()
app.set('port', process.env.PORT || 3000)

// MiddleWares.
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))
const publicRoute = path.resolve(__dirname, 'docs/')
app.use(express.static(publicRoute))
app.set('views', __dirname + '/docs');
app.engine('html', engine.mustache);
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routes.
app.use(routes)

app.listen(app.get('port'), () => {
    console.log("Server listen on port: ", app.get('port'))
})