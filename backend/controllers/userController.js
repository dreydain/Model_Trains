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

//@desc Update User
//@route Put /api/user/:id
//@access Public
const updateUser = (req,res) => {
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