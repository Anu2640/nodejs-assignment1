const expres = require('express')

const bodyParser = require('body-parser')

const route = require('./route')

const app = expres()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:true}))

app.use('/', route)

app.listen(process.env.PORT || 3005, function(){
    console.log('express app running on ' + (process.env.PORT || 3005))
})