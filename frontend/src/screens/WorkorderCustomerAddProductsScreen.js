import React, {useState} from 'react'
import {Form, Row, Col, Button, Card} from 'react-bootstrap'
//import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { updateWorkorderCustomer } from '../actions/workorderActions'



const WorkorderCreateScreen = () => {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    // const [product, setProduct] = useState('')
    // const [quantity, setQuantity] = useState(Number)

    const dispatch = useDispatch()
    ///let navigate = useNavigate()

    const customerUpdate = useSelector((state) => state.customerUpdate)
    const {workorder} = customerUpdate

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateWorkorderCustomer(name, email, phone))
        //navigate('/')
        console.log(workorder)
    }

    return (
        <FormContainer>
            <Form onSubmit={submitHandler}>
                
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
                {/* <Card>
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
                        <Button type='submit'>Add Customer</Button>
                    </Col>
                    
                </Row>
            </Form>
        </FormContainer>
    )
}

export default WorkorderCreateScreen