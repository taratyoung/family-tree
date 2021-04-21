let express = require('express');
let router = express.Router();

let validateSession = require('../middleware/validate-session');
const Person = require('../db').import('../models/person');



router.post('/')
//create a person controller
//do a put/get and delete ppl

module.exports = router;