const pool = require('../config/db');


class User{
    //Get all records
    static async getAllUsersModel(){
        const [rows] = await pool.query('SELECT * FROM tbl_user');
        return rows;
    }

    //add new records
   static async addUserModel(data){
    const {firstname, lastname} = data;
    const status = "ACTIVE";
    
    try {
        console.log('Attempting insert with:', { firstname, lastname, status }); // 👈
        const [results] = await pool.query(
            `INSERT INTO tbl_user (firstname, lastname, status) VALUES (?, ?, ?)`,
            [firstname, lastname, status]
        );
        console.log('Insert result:', results); // 👈
        return results.insertId;
    } catch (error) {
        console.error('Insert error:', error.message); // 👈
        throw error;
    }
}
    // get single records
    static async getUserByIdModel(id){
         const [results] = await pool.query(`SELECT * FROM tbl_user WHERE id = ?`,[id]);
         return results[0];
    }
    // Update record
    static async updateUserModel(id,data){
        const {firstname, lastname} = data;
        const [result] = await pool.query(`UPDATE tbl_user SET firstname=?, lastname=? WHERE id=?`,[firstname,lastname,id]);
        return result

    }
    // delete record
    static async deleteUserModel(id){
        const [result] = await pool.query(`DELETE FROM tbl_user WHERE id=?`,[id]);
        return result;
    }
   
}

module.exports =User;