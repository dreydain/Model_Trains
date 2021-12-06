import React, {useState, useEffect} from 'react'
import {Table, Col, Row, Button, ListGroup, Image, Form, Card} from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateWorkorder, getWorkorderDetails } from '../actions/workorderActions'
import {addToOrder, removeFromOrder} from '../actions/orderActions'
import Message from '../components/Message'
import {Link} from 'react-router-dom'
import { WORKORDER_UPDATE_RESET } from '../constants/workorderConstants'



const WorkorderUpdateScreen = () => {
    const [number, setNumber] = useState('')
    const [rush, setRush] = useState(false)
    const [orderDate, setOrderDate] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [orders, setOrders] = useState([])
    const [mold, setMold] = useState('')
    const [cast, setCast] = useState('')
    const [paint, setPaint] = useState('')
    const [complete, setComplete] = useState('')


    const dispatch = useDispatch()
    const {id} = useParams();
    let navigate = useNavigate()

    const workorderUpdate = useSelector((state) => state.workorderUpdate)
    const {success} = workorderUpdate

    const workorderDetails = useSelector((state) => state.workorderDetails)
    const {workorder} = workorderDetails

    // const buildOrder = (e) => {
    //     setOrders([...orderItems.map((item) => {
    //         return {
    //             product: item.product,
    //             quantity: item.quantity
    //         }
    //     })])
    // }

    

    useEffect(() => {
        if(!workorder.number || !workorder._id || success) {
            dispatch(getWorkorderDetails(id))
        } else {
            setNumber(workorder.number)
            setRush(workorder.rush)
            setOrderDate(workorder.orderDate)
            setDueDate(workorder.dueDate)
            setName(workorder.name)
            setEmail(workorder.email)
            setPhone(workorder.phone)
            setOrders(workorder.orders)
        }
        
    }, [dispatch, id, success, workorder])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateWorkorder({id: workorder._id, number, rush, orderDate, dueDate, name, email, phone, orders}))
        dispatch({type: WORKORDER_UPDATE_RESET})
        navigate('/workorderlist')       
    }

    return (
        <>
        
            <Form onSubmit={submitHandler}>
                <Card className='p-2'>
                    <Row className='justify-content-md-center'>
                        <Col className='mx-5'  md={4}>
                            <h2>Workorder Info</h2>
                            <Form.Group className='mb-3' controlId='number'>
                                <Form.Label>Workorder #</Form.Label>
                                <Form.Control 
                                    type='text' 
                                    placeholder='Enter Workorder #' 
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                        
                            <Form.Group className='mb-3' controlId='rush'>
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
                        
                            <Form.Group className='mb-3' controlId='orderDate'>
                                <Form.Label>Order Date</Form.Label>
                                <Form.Control 
                                    type='date' 
                                    placeholder='Enter Order Date' 
                                    value={orderDate}
                                    onChange={(e) => setOrderDate(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                        
                            <Form.Group className='mb-3' controlId='dueDate'>
                                <Form.Label>Due Date</Form.Label>
                                <Form.Control 
                                    type='date' 
                                    placeholder='Enter Due Date' 
                                    value={dueDate}
                                    onChange={(e) => setDueDate(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                        </Col>
                    
                        <Col className='mx-5' md={4}>
                            <h2>Customer Info</h2>
                            <Form.Group className='mb-3' controlId='name'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control 
                                    type='text' 
                                    placeholder='Enter Customer Name' 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                        
                            <Form.Group className='mb-3' controlId='email'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control 
                                    type='text' 
                                    placeholder='Enter Customer Email' 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                        
                            <Form.Group className='mb-3' controlId='phone'>
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
                    <Col className='my-3'>
                        <h3>Orders</h3>
                    </Col>
                </Row>
                {workorder.orders.length === 0
                    ? <Message>There are no orders in this workorder</Message>
                    : <ListGroup>
                        {workorder.orders.map((order) => (
                            <ListGroup.Item key={order.product}>
                                <Row>
                                    <Col md={4}>
                                        <Link to={`/product/${order.product}`}>{order.product}</Link>
                                    </Col>
                                    <Col md={2}>
                                        <h6> Qty: {order.quantity}</h6>
                                    </Col>
                                    <Form.Group controlId='mold'>
                                        <Form.Label>Molding</Form.Label>
                                        <Form.Control 
                                            type='number' 
                                            placeholder='Enter qty in mold' 
                                            value={mold}
                                            onChange={(e) => setMold(e.target.value)}
                                        ></Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId='cast'>
                                        <Form.Label>Casting</Form.Label>
                                        <Form.Control 
                                            type='number' 
                                            placeholder='Enter qty in cast' 
                                            value={cast}
                                            onChange={(e) => setCast(e.target.value)}
                                        ></Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId='paint'>
                                        <Form.Label>Painting</Form.Label>
                                        <Form.Control 
                                            type='number' 
                                            placeholder='Enter qty in paint' 
                                            value={paint}
                                            onChange={(e) => setPaint(e.target.value)}
                                        ></Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId='complete'>
                                        <Form.Label>Completed</Form.Label>
                                        <Form.Control 
                                            type='number' 
                                            placeholder='Enter qty in completed' 
                                            value={complete}
                                            onChange={(e) => setComplete(e.target.value)}
                                        ></Form.Control>
                                    </Form.Group>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                }
                
                <Row>
                    <Col>
                        <Button 
                            className='my-3 float-end' 
                            type='submit'
                            >Create Workorder</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default WorkorderUpdateScreen