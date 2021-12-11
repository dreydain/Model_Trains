import React, {useState, useEffect} from 'react'
import {Col, Row, Button, Table, Form, Card} from 'react-bootstrap'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateWorkorder, getWorkorderDetails } from '../actions/workorderActions'
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
    // const [mold, setMold] = useState('')
    // const [cast, setCast] = useState('')
    // const [paint, setPaint] = useState('')
    // const [complete, setComplete] = useState('')


    const dispatch = useDispatch()
    const {id} = useParams();
    let navigate = useNavigate()

    

    const workorderUpdate = useSelector((state) => state.workorderUpdate)
    const {success} = workorderUpdate

    const workorderDetails = useSelector((state) => state.workorderDetails)
    const {workorder} = workorderDetails

    // const updateOrder = orders.slice()
    // console.log(updateOrder)

    // const buildOrder = (e) => {
    //     setOrders(updateOrder)
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
                    <Col className='my-2'>
                        <h3>Orders</h3>
                    </Col>
                    <Table striped bordered hover responsive className='table-md my-2'>
                        <thead>
                            <tr>
                                <th>Product #</th>
                                <th>Quantity</th>
                                <th>Mold</th>
                                <th>Cast</th>
                                <th>Paint</th>
                                <th>Complete</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {workorder.orders.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.product}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.mold}</td>
                                    <td>{item.cast}</td>
                                    <td>{item.paint}</td>
                                    <td>{item.complete}</td>
                                    <td><Button><Link className="button-link" to={`/workorders/${item._id}/editOrder`} state={{id: id}}>Edit</Link></Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Col>
                        <Button 
                            className='my-3 float-end' 
                            type='submit'
                        >Update Workorder</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default WorkorderUpdateScreen