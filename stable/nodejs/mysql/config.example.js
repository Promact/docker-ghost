// # Ghost Configuration
// Setup your Ghost install for various [environments](http://support.ghost.org/config/#about-environments).

// Ghost runs in `development` mode by default. Full documentation can be found at http://support.ghost.org/config/

var path = require('path'),
    config;

config = {
    // ### Production
    // When running Ghost in the wild, use the production environment.
    // Configure your URL and mail settings here
    production: {
        url: 'http://ghostcms-latest.cloudapp.net',
        mail: {},
        database: {
            client: 'mysql',
            connection: {
                host     : 'mysql',
                user     : 'ghost',
                password : 'ghostpwd',
                database : 'ghost',
                charset  : 'utf8'
            }
        },
        server: {
            host: '0.0.0.0',
            port: '2368'
        }
    }    
};

module.exports = config;