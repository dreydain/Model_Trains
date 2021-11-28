import Workorder from '../models/workorderModel.js'
import asyncHandler from 'express-async-handler'

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

//@desc Create Workorder
//@route Post /api/workorders/new
//@access Private
const createWorkorder = asyncHandler(async (req, res) => {
    const {
        number, 
        rush, 
        orderDate, 
        dueDate, 
        name,
        email,
        phone, 
        shipped,
        orders
    } = req.body

    if(orders && orders.length === 0) {
        res.status(400)
        throw new Error('No order items')
        return
    } else  {
        const workorder = new Workorder({
            number,
            rush,
            orderDate,
            dueDate,
            name,
            email,
            phone,
            shipped,
            orders
        })

        const createdWorkorder = await workorder.save()

        res.status(201).json(createdWorkorder)
    }

}) 

// //@desc Create workorder
// //@route Post /api/workorder/new
// //@access Public
// const createWorkorder = (req, res) => {
//     const workorder = new Workorder(req.body)
//     console.log(workorder);
//     workorder.save()
//         .then((workorder) => {
//             console.log("successfully created workorder");
//             res.json({ message: "Successfully created workorder!", workorder: workorder })
//         })
//         .catch((err) => {
//             console.log("workorder creation failed", err);
//             res.json(err)
//         })
// }

// //@desc Update Workorder
// //@route  PUT /api/workorders/:id
// //@access Private
// const updateWorkorder = asyncHandler(async (req, res) => {
//     const workorder = await Workorder.findById(req.params.id)

//     if(workorder) {
//         workorder.number = req.body.number || workorder.number
//         workorder.rush = req.body.rush || workorder.rush
//         workorder.orderDate = req.body.orderDate || workorder.orderDate
//         workorder.dueDate = req.body.dueDate || workorder.dueDate
//         workorder.customer = {
//             name: req.body.name,
//             email: req.body.email,
//             phone: req.body.phone,
//         }
        
//         workorder.shipped = req.body.shipped || workorder.shipped

//         workorder.orderItems = {
//             product: req.body.product,
//             quantity: req.body.quantity,
//             complete: req.body.complete,
//             mold: req.body.mold,
//             cast: req.body.cast,
//             paint: req.body.paint
//         }

//         const updatedWorkorder = await workorder.save()

//         res.json({updatedWorkorder})
//     }
// })

//@desc Update Product
//@route  PUT /api/products/:id
//@access Private
const updateWorkorder = asyncHandler(async (req, res) => {
    const workorder = await Workorder.findById(req.params.id)

    if(workorder) {
        workorder.number = req.body.number || workorder.number
        workorder.rush = req.body.rush || workorder.rush
        workorder.orderDate = req.body.orderDate || workorder.orderDate
        workorder.dueDate = req.body.dueDate || workorder.dueDate
        workorder.name = req.body.name || workorder.name
        workorder.email = req.body.email || workorder.email
        workorder.phone = req.body.phone || workorder.phone
        workorder.shipped = req.body.shipped || workorder.shipped
        workorder.orders = req.body.orders || workorder.orders

        const updatedWorkorder = await workorder.save()

        res.json({
            _id: updatedWorkorder._id,
            number: updatedWorkorder.number,
            rush: updatedWorkorder.rush,
            orderDate: updatedWorkorder.orderDate,
            dueDate: updatedWorkorder.dueDate,
            name: updatedWorkorder.name,
            email: updatedWorkorder.name,
            phone: updatedWorkorder.phone,
            shipped: updatedWorkorder.shipped,
            orders: updatedWorkorder.orders,
            
        })

    }
})

//@desc Delete workorder
//@route  Delete /api/workorders/:id
//@access Private/admin
const deleteWorkorder = asyncHandler(async (req, res) => {
    const workorder = await Workorder.findById(req.params.id)
    
    if(workorder) {
        await workorder.remove()
        res.json({message:'workorder removed' })
    } else {
        res.status(404)
        throw new Error('workorder not found')
    }

})




export {
    getAllWorkorders,
    getOneWorkorder,
    createWorkorder,
    updateWorkorder,
    deleteWorkorder,
}