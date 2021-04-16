let express = require('express');
let router = express.Router();

let validateSession = require('../middleware/validate-session');
const Family = require('../db').import('../models/family');


// router.get('/practice', function (req, res) {
router.get('/practice', validateSession, function (req, res) {
    //It will check to see if the incoming request has a token for this specific route.
    //This option is best when you have a controller where a specific number of the routes need to be restricted. Perfect for us!
    res.send('Hey!! This is a FamilyTree practice route!');
});

//about test
router.get('/about', function (req, res) {
    res.send('This is the about FamilyTree test route!');
});
//about test end


//Family CREATE
router.post('/create', validateSession, (req, res) => {
    const familyEntry = {
        firstName: req.body.family.firstName,
        maidenName: req.body.family.maidenName,
        lastName: req.body.family.lastName,
        sunrise: req.body.family.sunrise,
        sunset: req.body.family.sunset,
        age: req.body.family.age,
        birthplace: req.body.family.birthplace,
        mother: req.body.family.mother,
        father: req.body.family.father,
        spouse: req.body.family.spouse,
        // gender: req.body.family.gender,
        child: req.body.family.child,
        owner: req.user.id
    }
    Family.create(familyEntry)
        .then(family => res.status(200).json(family))
        .catch(err => res.status(500).json({ error: err }))
});
//Family CREATE End


//Family GET ALL ENTRIES
router.get("/", (req, res) => {
    Family.findAll()
        .then(families => res.status(200).json(families))
        .catch(err => res.status(500).json({ error: err }))
});
//Family GET ALL ENTRIES END


//Family GET ENTRIES BY USER
router.get("/mine", validateSession, (req, res) => {
    let userid = req.user.id
    Family.findAll({
        where: { owner: userid }
    })
        .then(families => res.status(200).json(families))
        .catch(err => res.status(500).json({ error: err }))
});
//Family GET ENTRIES BY USER END


//GET FAMILY ENTRIES BY FIRSTNAME ?????
router.get("/:firstName", function (req, res) {
    let firstName = req.params.firstName;

    Family.findAll({
        where: { firstName: firstName }
    })
        .then(families => res.status(200).json(families))
        .catch(err => res.status(500).json({ error: err }))
});

//PUT - (Update ENTRIES)
router.put("/update/:id", validateSession, function (req, res) {
    const updateFamilyEntry = {
        firstName: req.body.family.firstName,
        maidenName: req.body.family.maidenName,
        lastName: req.body.family.lastName,
        sunrise: req.body.family.sunrise,
        sunset: req.body.family.sunset,
        age: req.body.family.age,
        birthplace: req.body.family.birthplace,
        mother: req.body.family.mother,
        father: req.body.family.father,
        spouse: req.body.family.spouse,
        // gender: req.body.family.gender,
        child: req.body.family.child,
    };

    const query = { where: { id: req.body.family.id, owner: req.user.id } };

    Family.update(updateFamilyEntry, query)
        .then((families) => res.status(200).json(families))
        .catch((err) => res.status(500).json({ error: err }));
});
//PUT - (Update ENTRIES) END



module.exports = router;