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

    const [items, setItems] = useState([])

    const [newArray, setNewArray] = useState([])

    

    const buildOrder = (e) => {
        setItems(orderItems)

    }


    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])


    return (
        <>
            <h1>Orders</h1>
            {orderItems.length === 0
                ? <Message>There are no items added</Message>
                : <ListGroup variant='flush'>
                {orderItems.map((item) => (
                    <ListGroup.Item key={item.product}>
                        <Row>
                            <Col md={2}>
                                <Image src={item.image} alt={item.name} fluid rounded />
                            </Col>
                            <Col md={2}>
                                <Link to={`/product/${item.product}`}>{item.product}</Link>
                            </Col>
                            <Col md={2}>{item.name}</Col>
                            <Col md={3}>
                                <Form.Control
                                    type='number'
                                    placeholder='Enter Quantity'
                                    value={item.qty}
                                    onChange={(e) => dispatch(addToOrder(item.product, Number(e.target.value)))}
                                >
                                    {/* {[...Array(item.stock).keys()].map((x) => (
                                        <option key={x + 1} value={x + 1}>
                                            {x + 1}
                                        </option>
                                    ))} */}
                                </Form.Control>
                            </Col>
                            <Col md={2}>
                                <Button type='button' variant='danger' onClick={() => dispatch(removeFromOrder(item.product))}>
                                    Remove
                                </Button>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                ))}
                <Col>
                    <Button onClick={() => buildOrder(orderItems)}>Build Workorder</Button>
                </Col>
            </ListGroup>
            }
            
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
                                <Button onClick={() => dispatch(addToOrder(product._id))}>Add</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table> 
        </>
    )
}

export default OrderBuildScreen
