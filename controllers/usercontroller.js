const router = require('express').Router();
const User = require('../db').import('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");

//USER REGISTER
router.post('/register', function (req, res) {
    console.log(req.body.user);

    User.create({
        // email: 'user@email.com',  //(hardcoded email)
        // password: 'password1234' //(hardcoded password)
        email: req.body.user.email, //dynamic email
        // password: req.body.user.password  //dynamic password
        password: bcrypt.hashSync(req.body.user.password, 13)

    })
        .then(
            // res.send('This is our FamilyTree user/register endpoint!')
            function createSuccess(user) {
                console.log('create success');

                // let token = jwt.sign({ id: user.id, email: user.email }, 'i_am_secret', { expiresIn: 60 * 60 * 24 }); //should never use jwt to store sensitive info so remove email: user.email

                // let token = jwt.sign({ id: user.id }, 'i_am_secret', { expiresIn: 60 * 60 * 24 });

                let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 }); //goes outside the current file to the .env where it looks for something called JWT_SECRET. The value of the secret is stored in that environment variable

                res.json({
                    user: user,
                    message: 'FamilyTree User successfully created!',
                    sessionToken: token
                });
            }
        )
        .catch(err => res.status(500).json({ error: err })) //if promise is rejected - error captured here and sends JSON-ified 500 error message
});
//USER REGISTER END



//USER LOGIN
router.post('/login', function (req, res) {

    User.findOne({
        where: {
            email: req.body.user.email
        }
    })
        .then(function loginSuccess(user) {
            if (user) {
                bcrypt.compare(req.body.user.password, user.password, function (err, matches) {
                    if (matches) {

                        let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 })

                        res.status(200).json({
                            user: user,
                            message: 'FamilyTree User successfully logged in!',
                            sessionToken: token
                        })

                    } else { //add a conditional so if user doesn't exist and send error 500 instead of null
                        res.status(502).send({ error: 'FamilyTree Login Failed' });
                    }
                });
            } else {
                res.status(500).json({ error: 'FamilyTree User does not exist.' })
            }
        })
        .catch(err => res.status(500).json({ error: err }))

});
//USER LOGIN END




module.exports = router;


