
const database = require('./../../../database/model.js');

const crypto = require('crypto');

class create_url_model 
{

    create(url) 
    {

        const private_token = crypto.randomBytes(16).toString('hex');

        return new Promise( (resolve, reject) => 
        {
            database.execute('insert into shortened_urls (id, private_token, redirect) values (?, ?, ?)', [crypto.randomBytes(5).toString('hex'), private_token, url], (error) => 
            {

                if (error) { return reject(error); }

                resolve(private_token);

            });
        });

    }

}

module.exports = create_url_model;