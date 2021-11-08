
const query = require('../db_connection');

class UserModel {

    all = async() => {
        let sql = `SELECT * FROM users`;

        return await query(sql) ;
    }

}
module.exports = new UserModel;



