import React, {useState, useEffect} from 'react'
import {Table, Col, Row, Button, ListGroup, Image, Form, Card} from 'react-bootstrap'
//import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
//import FormContainer from '../components/FormContainer'
import { createWorkorder } from '../actions/workorderActions'
import {addToOrder, removeFromOrder} from '../actions/orderActions'
import {listProducts} from '../actions/productActions'
import Message from '../components/Message'
import {Link} from 'react-router-dom'



const WorkorderCreateScreen = () => {
    const [number, setNumber] = useState('')
    const [rush, setRush] = useState(false)
    const [orderDate, setOrderDate] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [orders, setOrders] = useState([])
    const dispatch = useDispatch()
    //let navigate = useNavigate()

    const workorderCreate = useSelector((state) => state.workorderCreate)
    const {workorderInfo} = workorderCreate

    const productList = useSelector((state) => state.productList)
    const {products} = productList

    const order = useSelector(state => state.order)
    const {orderItems} = order

    const buildOrder = (e) => {
        setOrders([...orderItems.map((item) => {
            return {
                product: item.product,
                quantity: item.quantity
            }
        })])
    }

    

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createWorkorder(number, rush, orderDate, dueDate, name, email, phone, orders))
        //navigate()
        console.log(workorderInfo)        
    }

    return (
        <>
        
            <Form onSubmit={submitHandler}>
                <Card className='p-3'>
                    <Row>
                        <h1>Workorder Info</h1>
                        <Col>
                            <Button>Cancel</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId='number'>
                                <Form.Label>Workorder #</Form.Label>
                                <Form.Control 
                                    type='text' 
                                    placeholder='Enter Workorder #' 
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId='rush'>
                                <Form.Label>Rush</Form.Label>
                                <Form.Control 
                                    as='select'
                                    value={rush}
                                    onChange={(e) => setRush(e.target.value)}
                                >
                                    <option>true</option>
                                    <option>false</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId='orderDate'>
                                <Form.Label>Order Date</Form.Label>
                                <Form.Control 
                                    type='date' 
                                    placeholder='Enter Order Date' 
                                    value={orderDate}
                                    onChange={(e) => setOrderDate(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId='dueDate'>
                                <Form.Label>Due Date</Form.Label>
                                <Form.Control 
                                    type='date' 
                                    placeholder='Enter Due Date' 
                                    value={dueDate}
                                    onChange={(e) => setDueDate(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                </Card>
                <Card className='p-3'>
                    <Row>
                        <h1>Customer Info</h1>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId='name'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control 
                                    type='text' 
                                    placeholder='Enter Customer Name' 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId='email'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control 
                                    type='text' 
                                    placeholder='Enter Customer Email' 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId='phone'>
                                <Form.Label>Phone</Form.Label>
                                <Form.Control 
                                    type='text' 
                                    placeholder='Enter Customer Phone' 
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                </Card>
                <Row>
                <h1>Orders</h1>
                <Col>
                    <Button onClick={() => buildOrder(orderItems)}>Build Workorder</Button>
                </Col>
                </Row>
                    
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
                                    <Link to={`/product/${item.product}`}>{item.number}</Link>
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
                </ListGroup>
                }
                <Row>
                    <Col>
                        <Button type='submit'>Create Workorder</Button>
                    </Col>
                </Row>
            </Form>
        
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

export default WorkorderCreateScreen
