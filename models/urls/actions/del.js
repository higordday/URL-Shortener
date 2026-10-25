
const database = require('./../../../database/model.js');

class delete_url_controller 
{

    verify_token(private_token) 
    {

        return new Promise( (resolve, reject) => 
        {
            database.execute('select id from shortened_urls where private_token = ?', [private_token], (error, results, fields) => 
            {

                if (error) { return reject(error); }

                if (!results[0]) { resolve({ status: false, id: null }); }

                resolve({ status: true, id: results[0].id });

            });
        });

    }

    delete(private_token) 
    {

        return new Promise( (resolve, reject) => 
        {
            database.execute('delete from shortened_urls where private_token = ?', [private_token], (error) => 
            {

                if (error) { return reject(error); }

                resolve(true);

            });
        });

    }

    remove_logs(unique_code) 
    {

        return new Promise( (resolve, reject) => 
        {
            database.execute('delete from logs where shortened_url_id = ?', [unique_code], (error) => 
            {

                if (error) { return reject(error); }

                resolve(true);

            });
        });

    }

}

module.exports = delete_url_controller;