
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

// ---

const application = express();

// ---

dotenv.config();

// ---

const express_conf_session = require('./express_conf/session.js');

express_conf_session(application);

// --- Middlewares

const default_middleware = require('./middlewares/default.js');

default_middleware(application);

// ---

const express_conf_handlebars        =        require('./express_conf/handlebars.js');
const express_conf_body_parser       =       require('./express_conf/body_parser.js');
const express_conf_static_files_path = require('./express_conf/static_files_path.js');

express_conf_handlebars       (               application);
express_conf_body_parser      (               application);
express_conf_static_files_path(application, express, path);

// --- Routes

application.use('/', require('./routes/index.js'));

// --- Routes :: URLs

application.use('/', require('./routes/urls/log.js'));
application.use('/', require('./routes/urls/statistics.js'));

application.use('/', require('./routes/urls/actions/create.js'));
application.use('/', require('./routes/urls/actions/del.js'));

// ------

// ---

application.listen
(
    process.env.SERVER_LISTENING_PORT, console.log(`\nServer Listening on ${process.env.SERVER_LISTENING_PORT} Port`)
);