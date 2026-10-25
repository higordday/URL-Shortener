
const { engine } = require('express-handlebars');

function express_conf_handlebars(application) 
{

    application.engine('handlebars', engine()); application.set('view engine', 'handlebars');

}

module.exports = express_conf_handlebars;