import React, {useState, useEffect} from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col, Button, Card, Form} from 'react-bootstrap'
import {getWorkorderDetails} from '../actions/workorderActions'


const OrderEditScreen = () => {
    
    const dispatch = useDispatch()
    const location = useLocation()
    const {id} = location.state

    const workorderDetails = useSelector(state => state.workorderDetails)
    const {workorder} = workorderDetails

    useEffect(() => {
        dispatch(getWorkorderDetails(id))
    }, [dispatch, id])

    return (
        <>
            <h4>Order Id:</h4>
            <Card className='p-3'>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group className='mb-3' controlId='product'>
                                <Form.Label>Product</Form.Label>
                                <Form.Control 
                                    type='text'  
                                ></Form.Control>
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className='mb-3' controlId='quantity'>
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control 
                                    type='number'  
                                ></Form.Control>
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className='mb-3' controlId='complete'>
                                <Form.Label>Complete</Form.Label>
                                <Form.Control 
                                    type='number'  
                                ></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Group className='mb-3' controlId='mold'>
                                <Form.Label>Mold</Form.Label>
                                <Form.Control 
                                    type='number'  
                                ></Form.Control>
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className='mb-3' controlId='cast'>
                                <Form.Label>Cast</Form.Label>
                                <Form.Control 
                                    type='number'  
                                ></Form.Control>
                            </Form.Group>
                        </Col>
                        
                        <Col>
                            <Form.Group className='mb-3' controlId='paint'>
                                <Form.Label>Paint</Form.Label>
                                <Form.Control 
                                    type='number'  
                                ></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Col>
                        <Button 
                            className='my-3 float-end' 
                            type='submit'
                        >Update Order</Button>
                    </Col>
                </Form>
            </Card>

        </>
    )
}

export default OrderEditScreen
