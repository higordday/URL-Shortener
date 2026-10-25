
function default_middleware(application) 
{

    application.use( (request, response, next) => 
    {

        response.locals.failure = request.flash('failure');

        next();

    });

}

module.exports = default_middleware;