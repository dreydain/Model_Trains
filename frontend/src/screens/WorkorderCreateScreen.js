import React, {useState} from 'react'
import {Form, Row, Col, Button, Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { createWorkorder } from '../actions/workorderActions'



const WorkorderCreateScreen = () => {
    const [number, setNumber] = useState('')
    const [rush, setRush] = useState('')
    const [orderDate, setOrderDate] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    // const [product, setProduct] = useState('')
    // const [quantity, setQuantity] = useState(Number)

    const dispatch = useDispatch()
    let navigate = useNavigate()

    const workorderCreate = useSelector((state) => state.workorderCreate)
    const {workorderInfo} = workorderCreate

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createWorkorder(number, rush, orderDate, dueDate, name, email, phone))
        navigate('/workorders/new/customer')
        console.log(workorderInfo)
    }

    return (
        <FormContainer>
            <Form onSubmit={submitHandler}>
                <Card>
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
                <Card>
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
                {/*<Card>
                    <Row>
                        <h1>Order Items</h1>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId='product'>
                                <Form.Label>Product #</Form.Label>
                                <Form.Control 
                                    type='text' 
                                    placeholder='Enter Product #' 
                                    value={product}
                                    onChange={(e) => setProduct(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId='quantity'>
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control 
                                    type='number' 
                                    placeholder='Select Quantity' 
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId='product'>
                                <Form.Label>Product #</Form.Label>
                                <Form.Control 
                                    type='text' 
                                    placeholder='Enter Product #' 
                                    value={product}
                                    onChange={(e) => setProduct(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId='quantity'>
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control 
                                    type='number' 
                                    placeholder='Select Quantity' 
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId='product'>
                                <Form.Label>Product #</Form.Label>
                                <Form.Control 
                                    type='text' 
                                    placeholder='Enter Product #' 
                                    value={product}
                                    onChange={(e) => setProduct(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId='quantity'>
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control 
                                    type='number' 
                                    placeholder='Select Quantity' 
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                </Card> */}
                <Row>
                    <Col>
                        <Button type='submit'>Create Workorder</Button>
                    </Col>
                    <Col>
                        <Button>Add Another Product</Button>
                    </Col>
                </Row>
            </Form>
        </FormContainer>
    )
}

export default WorkorderCreateScreen
