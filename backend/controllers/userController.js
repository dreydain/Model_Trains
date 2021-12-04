import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'

//@desc Fetch all users
//@route Get /api/users
//@access Public
const getAllUsers = (req, res) => {
    User.find({})
        .then((users) => {
            console.log(users)
            res.json(users)
        })
        .catch((err) => {
            console.log(err)
            res.json(err)
        });

}


//@desc Fetch One User
//@route Get /api/user/:id
//@access Public
const getOneUser = (req, res) => {
    User.findById(req.params.id)
    .then((user) => {
        console.log(user)
        res.json(user)
    })
    .catch((err) => {
        console.log(err)
        res.json(err)
    });
    
}

//@desc Create User
//@route Post /api/user/new
//@access Public
const createUser = (req, res) => {
    const user = new User(req.body)
    console.log(user);
    user.save()
        .then((user) => {
            console.log("successfully registered");
            res.json({ message: "Successfully Registered!", user: user })
        })
        .catch((err) => {
            console.log("register not successful", err);
            res.json(err)
        })
}

//@desc Update user profile
//@route  PUT /api/users/profile
//@access Private
const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

    if(user) {
        user.firstName = req.body.firstName || user.firstName
        user.lastName = req.body.lastName || user.lastName
        user.email = req.body.email || user.email
        user.isAdmin = req.body.isAdmin || user.isAdmin
        user.phone = req.body.phone || user.phone
        user.address = req.body.address || user.address
        user.jobTitle = req.body.jobTitle || user.jobTitle
        user.wage = req.body.wage || user.wage
        user.startDate = req.body.startDate || user.startDate
        user.endDate = req.body.endDate || user.endDate
        if(req.body.password) {
            user.password = req.body.password
        }

        const updatedUser = await user.save()

        res.json({
            _id: updatedUser._id,
            name: updatedUser.firstName,
            lastName: updatedUser.lastName,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            phone: updatedUser.phone,
            address: updatedUser.address,
            jobTitle: updatedUser.jobTitle,
            wage: updatedUser.wage,
            startDate: updatedUser.startDate,
            endDate: updatedUser.endDate
        })

    }
})

//@desc Delete User
//@route  Delete /api/users/:id
//@access Private/admin
const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    
    if(user) {
        await user.remove()
        res.json({message:'User removed' })
    } else {
        res.status(404)
        throw new Error('User not found')
    }

})

export {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
}