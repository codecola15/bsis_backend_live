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
        // const firstname = data.firstname;
        // const lastname = data.lastname;
        const [results] = await pool.query(`INSERT INTO tbl_user (firstname,lastname,status)
            values(?,?,?)`,[firstname,lastname,status]);
        // const [results] = await pool.query(`INSERT INTO tbl_user (firstname,lastname)
        //     values(${firstname},${lastname})`);
        return results.insertId;

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