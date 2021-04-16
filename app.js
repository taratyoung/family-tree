require("dotenv").config();
let express = require('express');
const app = express();

const sequelize = require('./db');

let family = require('./controllers/familycontroller.js');
let user = require('./controllers/usercontroller.js');

sequelize.sync();//method to ensure all models (tables) are actually put onto the db if they're not there
// sequelize.sync({ force: true });

//This app.use statement MUST go above any routes. Any routes above this statement will not be able to use the express.json() function, so they will break.
app.use(express.json());

//ROUTES
// //test
// app.use('/test', function (req, res) {
//     res.send('This is a message from the test endpoint on the FamilyTree server!')
// })
// //test end

//UNPROTECTED ROUTE - above validate-session doesn't require a token
app.use('/user', user);

//PROTECTED ROUTE...anything beneath the validate-session b/c it requires a token to access
// app.use(require('./middleware/validate-session'));
app.use('/family', family);

//ROUTES END


app.listen(3000, function () {
    console.log('App is listening on port 3000');
});