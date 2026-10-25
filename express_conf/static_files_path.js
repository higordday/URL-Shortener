
function express_conf_static_files_path(application, express, path) 
{

    application.use(express.static(path.join(__dirname, '/../assets')));

}

module.exports = express_conf_static_files_path;