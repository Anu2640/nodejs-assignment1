const express = require('express');
const abc = require('./common')
const log = require('./logger')
const helper = require('./helper')
const formatter = require('./formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    log.welcome()
    helper.printDate()
    helper.printMonth()
    formatter.Trim()
    formatter.changetoLowerCase()
    formatter.changetoUpperCase()
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){
    res.send('This is nodejs assignment')
})
module.exports = router;