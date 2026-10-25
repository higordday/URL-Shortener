
const database = require('./../../database/model.js');

class statistics_model 
{

    verify_token(private_token) 
    {

        return new Promise( (resolve, reject) => 
        {
            database.execute('select id, private_token, redirect, visits from shortened_urls where private_token = ?', [private_token], (error, results, fields) => 
            {

                if (error) { return reject(error); }

                if (!results[0]) { return resolve({ status: false, data: null }); }

                resolve({ status: true, data: results[0] });

            });
        });

    }

    get_logs(unique_code) 
    {

        return new Promise( (resolve, reject) => 
        {
            database.execute('select ip, country, region, city, click_date from logs where shortened_url_id = ?', [unique_code], (error, results, fields) => 
            {

                if (error) { return reject(error); }

                resolve(results);

            });
        });

    }

}

module.exports = statistics_model;