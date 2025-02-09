const User = require('../models/user');
const bcrypt = require('bcrypt');

async function createAdminAccount()
{
    try {
        const existingAdmin = User.findOnde({email:"admin@test.com"})
        if(!existingAdmin)
        {new User({
            email: "admin@test.com",
            name: "Admin",
            password:bcrypt.hashSync("admin",10),
            role:"admin"
        })
        await newAdmin.save();
        console.log("Admin created successfully");

        }else{
            console.log("Admin already exist");
        }
    } catch (error) {
        console.error(error.message);
        
    }
}

module.exports = {createAdminAccount};