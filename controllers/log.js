
const lm = require('./../models/urls/log.js');
const log_model = new lm();

exports.log = async (request, response) => 
{

    const unique_code = request.params.unique_code;

    try 
    {

        const { status, redirect } = await log_model.verify_unique_code(unique_code);

        if (!status) 
        {

            return response.json({ status: false, error: 'Invalid Unique Code' });

        }

        if (request.method !== 'GET') { return response.redirect(redirect); }

        await log_model.increase_visits_counter(unique_code);

        await log_model.add_log(unique_code, request.socket.remoteAddress);

        response.send(`
            <!DOCTYPE html>
            <html>
            <head>
                <meta http-equiv="refresh" content="0;url=${redirect}">
                <script>location.replace("${redirect}")</script>
            </head>
            <body></body>
            </html>
        `);

    } catch (error) 
    {

        console.error(error);

        if (!response.headersSent) { response.status(500).json({ status: false, error: error.message }); }

    }
};