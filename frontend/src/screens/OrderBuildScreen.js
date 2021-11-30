import React, {useState, useEffect} from 'react'
import {Table, Col, Row, Button, ListGroup, Image, Form} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {listProducts} from '../actions/productActions'
import {Link} from 'react-router-dom'
import Message from '../components/Message'
import {addToOrder, removeFromOrder} from '../actions/orderActions'

const OrderBuildScreen = () => {
    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList)
    const {products} = productList

    const order = useSelector(state => state.order)
    const {orderItems} = order

    const removeFromOrderHandler = () => {
        dispatch(removeFromOrder())
    }

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])


    return (
        <>
            
            <h1>Select Products For Workorder</h1>
            <Table striped bordered hover responsive className='table-md'>
                <thead>
                    <tr>
                        <th>Product #</th>
                        <th>Name</th>
                        <th>Stock</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product._id}>
                            <td><Link to={`/products/${product._id}`}>{product.number}</Link></td>
                            <td>{product.name}</td>
                            <td>{product.stock}</td>
                            <td>{product.brand}</td>
                            <td>{product.category}</td>
                            <td>
                                <Button>Add</Button> | <Button variant='danger'>Remove</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table> 
        </>
    )
}

export default OrderBuildScreen
