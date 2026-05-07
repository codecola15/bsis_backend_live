const Student = require('../models/studentModel');


const getAllStudentController = async (req,res)=>{

    try {
        const results = await Student.getAllStudentModel();
        res.status(200).json(
            {
                success:true,
                message:"Student fetched successfully",
                data:results
            }
        );
    } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).json(
            {
                success:false,
                message:"Failed to fetch students",
                data:null
            }
        );
    }

}

const addStudentController = async (req,res)=>{

    try {
        const {firstname,lastname,course,gender} = req.body;
        if(!firstname || !lastname || !course || !gender){
            return res.status(400).json({
                success:false,
                message:"Firstname,lastname, course, and gender are all required",
                data:null
            })
        }else if(gender.length > 1){
            return res.status(400).json({
                success:false,
                message:"Gender should be either M or F",
                data:null
            })
        }
        const data = await Student.addStudentModel({firstname,lastname,course,gender});
        res.status(201).json(
            {
                success:true,
                message:"Student added successfully",
                data:data
            }
        );
    } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).json(
            {
                success:false,
                message:"Failed to add new student",
                data:null
            }
        );
    }

}
const getSingleStudentByIdController = async (req,res)=>{
    try {
       const {id} = req.params;
       const data = await Student.getSingleStudentModel(id); 
       if(!data){
        return res.status(404).json(
                {
                    success:false,
                    message:"Record not found",
                    data:null
                }
        );
       }
       return res.status(200).json({
            success:true,
            message:"1 record found.",
            data:data
       })

    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json(
            {
                success:false,
                message:"Failed to get record",
                data:null
            }
        );
    }

}

module.exports={
    getAllStudentController,
    addStudentController,
    getSingleStudentByIdController
}