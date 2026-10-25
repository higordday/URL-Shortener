
const database = require('./../../database/model.js');

class log_model 
{

    verify_unique_code(unique_code) 
    {

        return new Promise( (resolve, reject) => 
        {
            database.execute('select redirect from shortened_urls where id = ?', [unique_code], (error, results, fields) => 
            {

                if (error) { return reject(error); }

                if (!results[0]) { return resolve({ status: false, redirect: null }); }

                resolve({ status: true, redirect: results[0].redirect });

            });
        });

    }

    increase_visits_counter(unique_code) 
    {

        return new Promise( (resolve, reject) => 
        {
            database.execute('update shortened_urls set visits = visits + 1 where id = ?', [unique_code], (error) => 
            {

                if (error) { return reject(error); }

                resolve(true);

            });
        });

    }

    add_log(unique_code, user_ip_address) 
    {

        const ip_api_fetch_url = (!user_ip_address || user_ip_address == '127.0.0.1' || user_ip_address == '::1') ? 'http://ip-api.com/json' : `http://ip-api.com/json/${user_ip_address}`

        return new Promise( (resolve, reject) => 
        {

            fetch
            (
                ip_api_fetch_url, { method: 'GET', headers: { 'Content-Type': 'application/json' } }

            ).then( (response) => 
            {

                if (!response.ok) { return reject('Log Failure - IP API HTTP GET Request Failed'); }

                return response.json();

            }).then( (data) => 
            {

                if (data.status == 'success') 
                {

                    database.execute
                    (
                        'insert into logs (shortened_url_id, ip, country, region, city, click_date) values (?, ?, ?, ?, ?, ?)',

                        [
                            unique_code, data.query, data.country, data.regionName, data.city, new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false })
                        ],

                        (error) => 
                        {

                            if (error) { return reject(error); }

                            return resolve(true);

                        }
                    );

                }

                resolve(true);

            }).catch( (error) => 
            {

                return reject(error);

            });

        });

    }

}

module.exports = log_model;