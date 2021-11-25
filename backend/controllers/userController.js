import User from '../models/userModel.js'

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

// const updateUser = (req, res) => {
//     const user = User.findById(req.params.id)

//     if(user) {
//         user.email = req.body.email || user.email
//         if(req.body.password) {
//             user.password = req.body.password
//         }

//         user.save()

//         res.json({
//             _id: updatedUser._id,
//             firstName: updatedUser.firstName,
//             lastName: updatedUser.lastName,
//             email: updatedUser.email,
//             isAdmin: updatedUser.isAdmin,
//             phone: updatedUser.phone,
//             address: updatedUser.address,
//             jobTitle: updatedUser.jobTitle,
//             wage: updatedUser.wage,
//             endDate: updatedUser.endDate
            
//         })

//     }
// }

//@desc Update User
//@route Put /api/user/:id
//@access Public
const updateUser = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
        .then(updatedUser => res.json(updatedUser))
        .catch(err => res.json(err))
}

export {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
}