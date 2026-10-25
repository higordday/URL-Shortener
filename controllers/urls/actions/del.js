
const dum = require('./../../../models/urls/actions/del.js');
const delete_url_model = new dum();

exports.delete = async(request, response, next) => 
{

    const private_token = request.body.private_token;

    (async() => 
    {
        try 
        {

            const { status, id } = await delete_url_model.verify_token(private_token);

            if (!status) 
            {

                response.json({ status: false, error: 'Invalid Private Token' }); return;

            }

            await delete_url_model.delete(private_token);

            await delete_url_model.remove_logs(id);

            response.json({ status: true, error: null });

        } catch (error) 
        {

            console.error(error.message);

            response.json({ status: false, error: error.message });

        }
    })();

}