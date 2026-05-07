const User = require('../models/userModel');

// Controller fr get all data
const getAllUsersController = async (req,res)=>{

    try {
        const users = await User.getAllUsersModel();
        res.status(200).json(
            {
                success:true,
                message:"Users fetched successfully",
                data:users
            }
        );
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json(
            {
                success:false,
                message:"Failed to fetch users",
                data:null
            }
        );
    }

}

// Controller for add new data
const addUserController = async (req,res)=>{

    try {
        const {firstname,lastname} = req.body;
        if(!firstname || !lastname){
            return res.status(400).json({
                success:false,
                message:"Firstname and lastname are required",
                data:null
            })
        }
        const data = await User.addUserModel({firstname,lastname});
        res.status(201).json(
            {
                success:true,
                message:"User added successfully",
                data:data
            }
        );
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json(
            {
                success:false,
                message:"Failed to add new user",
                data:null
            }
        );
    }

}
// Get single record by id
const getUserByIdController = async (req,res)=>{

    try{
        const {id} = req.params;
        const record = await User.getUserByIdModel(id);
        if(!record){
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
            data:record
        });

    }catch(error){
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
// Update record
const updateUserController = async (req,res)=>{
    try {
        const {id} = req.params;
        const {firstname,lastname} = req.body;

        if(!firstname || !lastname){
            return res.status(400).json({
                success:false,
                message:"Firstname and lastname are required",
                data:null
            })
        }

        const result = await User.updateUserModel(id,{firstname,lastname});
        if(!result){
            return res.status(404).json({
                success:false,
                message:"Record not found",
                data:null
            });
        }
        return res.status(200).json({
            success:true,
            message:"1 record updated successfully.",
            data:null
        })
        
    } catch (error) {
        console.error('Error updating records:', error);
        res.status(500).json(
            {
                success:false,
                message:"Failed to update record",
                data:null
            }
        );
    }
}
// Delete record
const deleteUserController = async (req,res)=>{
    try {
        const {id} = req.params;
        const result = await User.deleteUserModel(id);
        console.log('Result:',result);
        if(result.affectedRows ===0){
            return res.status(404).json({
                success:false,
                message:"Record not found",
                data:null
            });
        }
        return res.status(200).json({
            success:true,
            message:"1 record deleted successfully.",
            data:null
        })
        
    } catch (error) {
        console.error('Error deleting record:', error);
        res.status(500).json(
            {
                success:false,
                message:"Failed to delete record",
                data:null
            }
        );
    }
}


module.exports={
    getAllUsersController,
    addUserController,
    getUserByIdController,
    updateUserController,
    deleteUserController
}