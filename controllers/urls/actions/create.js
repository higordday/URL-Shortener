
const cum = require('./../../../models/urls/actions/create.js');
const create_url_model = new cum();

exports.create = async(request, response, next) => 
{

    const url = request.body.url;

    if ((!url) || (url == null) || (typeof url == 'undefined')) 
    {

        response.render('index', { create_url_form_failure: 'Enter the URL' }); return;

    }

    fetch
    (
        url, { method: 'GET' }

    ).then( (response) => 
    {

        if (!response.ok) { response.render('index', { create_url_form_failure: 'Invalid URL' }); return; }

        return response

    }).then( (data) => 
    {

        valid_url();

    }).catch( (error) => 
    {

        console.error(error.message);

        response.render('index', { create_url_form_failure: 'Invalid URL' });

    });

    function valid_url() 
    {

        (async() => 
        {
            try 
            {

                const private_token = await create_url_model.create(url);

                success(private_token);

            } catch (error) 
            {

                request.flash('failure', error.message); response.redirect('/');

            }
        })();

    }

    function success(private_token) { response.redirect(`/url/statistics?private_token=${private_token}`); }

}