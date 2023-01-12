var dns = require('dns');

function getMxRecords(domain){
    return new Promise(function(resolve, reject) {
        dns.resolveMx(domain, function (err, addresses) {
            if (err) {
                console.log(err);
                //console.log(err, err.stack)
                resolve(null);
            }
            else{
                //console.log(addresses);
                resolve(addresses);
            }
        });
    });
}