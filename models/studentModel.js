const pool = require('../config/db');


class Student{
    static async getAllStudentModel(){
        const [rows] = await pool.query('SELECT * FROM tbl_student');
        return rows;
    }

     //add new records
    static async addStudentModel(data){
        const {firstname, lastname,gender,course} = data;
        const status = "ACTIVE";
        // const firstname = data.firstname;
        // const lastname = data.lastname;
        const [results] = await pool.query(`INSERT INTO tbl_student (firstname,lastname,status,course,gender)
            values(?,?,?,?,?)`,[firstname,lastname,status,course,gender]);
        // const [results] = await pool.query(`INSERT INTO tbl_user (firstname,lastname)
        //     values(${firstname},${lastname})`);
        return results.insertId;

    }
    // get single record
    static async getSingleStudentModel(id){
        const [results] = await pool.query(`SELECT * FROM tbl_student WHERE id = ?`,[id]);
        return results[0];

    }
   
}

module.exports =Student;