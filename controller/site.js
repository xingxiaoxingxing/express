var config  = require('../config');
var request  = require('request');


exports.index = function (req, res, next) {
    console.log(config.host, 'host');
    console.log(config.url+`/service/503/chargeitem/list?site=${config.site}&appid=${config.appid}&token=${config.token}&pagenum=10&pagestart=0`, 'jdiojdi');
    request(config.url+`/service/503/chargeitem/list?site=${config.site}&appid=${config.appid}&token=${config.token}&pagenum=10&pagestart=0`, function (error, response, body) {
        console.log(response.statusCode, 'response.statusCode');
        if (!error && response.statusCode == 200) {
           let data = [];
           const content = JSON.parse(response.body);
           if (content.ret == 0 && content.count > 0) {
               data = content.data;
           }
            res.render('index', {
                dist:"//"+config.host,
                host:"//"+config.host,
                url:config.url,
                // wap:"//"+config.host+"/"+config.staticDir,
                // UA:req.headers['aijia']||req.headers['user-agent'],
                data:data,
            });
        }
    })
};

exports.one = function (req, res, next) {
    res.render('one/one', {
    });
};
