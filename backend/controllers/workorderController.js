import Workorder from '../models/workorderModel.js'

//@desc Fetch all workorders
//@route Get /api/workorders
//@access Public
const getAllWorkorders = (req, res) => {
    Workorder.find({})
        .then((workorders) => {
            console.log(workorders)
            res.json(workorders)
        })
        .catch((err) => {
            console.log(err)
            res.json(err)
        });

}


//@desc Fetch One workorder
//@route Get /api/workorders/:id
//@access Public
const getOneWorkorder = (req, res) => {
    Workorder.findById(req.params.id)
    .then((workorder) => {
        console.log(workorder)
        res.json(workorder)
    })
    .catch((err) => {
        console.log(err)
        res.json(err)
    });
    
}




export {
    getAllWorkorders,
    getOneWorkorder,
}