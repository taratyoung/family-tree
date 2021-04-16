//where is this code in the modules? 
//copy/pasted from journal file

module.exports = function (req, res, next) {

    res.header('access-control-allow-origin', '*');
    res.header('access-control-allow-methods', 'GET, POST, PUT, DELTE');
    res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    next();
};
