
const sm = require('./../../models/urls/statistics.js');
const statistics_model = new sm();

exports.statistics = async(request, response, next) => 
{

    const private_token = request.query.private_token;

    if (!private_token) 
    {

        response.render('index', { statistics_form_failure: 'Enter the Private Token' }); return;

    }

    (async() => 
    {
        try 
        {

            const data = await statistics_model.verify_token(private_token);

            if (!data.status) 
            {

                request.flash('failure', 'Invalid Private Token'); response.redirect('/'); return;

            }

            const logs = await statistics_model.get_logs(data.data.id);

            exists(data.data, logs);

        } catch (error) 
        {

            console.error(error.message);

            request.flash('failure', error.message); response.redirect('/');

        }
    })();

    function exists(data, logs) 
    { 

        var d = data;

        d['logs'] = logs;
        d['logs_counter'] = logs.length;
        
        response.render('statistics', d); 
    
    }

}