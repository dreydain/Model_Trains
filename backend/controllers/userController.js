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




export {
    getAllUsers,
    getOneUser,
}