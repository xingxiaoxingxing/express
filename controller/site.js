var config  = require('../config');


exports.index = function (req, res, next) {
    console.log(config.host, 'host');
    res.render('index', {
        dist:"//"+config.host,
        host:"//"+config.host,
        // wap:"//"+config.host+"/"+config.staticDir,
        // UA:req.headers['aijia']||req.headers['user-agent'],
        // data:JSON.parse(response.body),
        // gaContent:"/H5/首页",
    });
};

exports.one = function (req, res, next) {
    res.render('one/one', {
        // dist:"//"+config.host+"/"+config.staticDir,
        // host:"//"+config.host,
        // wap:"//"+config.host+"/"+config.staticDir,
        // UA:req.headers['aijia']||req.headers['user-agent'],
        // data:JSON.parse(response.body),
        // gaContent:"/H5/首页",
    });
};
