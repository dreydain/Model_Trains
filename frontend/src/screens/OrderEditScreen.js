import React, {useState, useEffect} from 'react'
import { useNavigate, useParams, useLocation, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {Table, Row, Col, Button, Card, Form} from 'react-bootstrap'
import {getWorkorderDetails} from '../actions/workorderActions'


const OrderEditScreen = () => {
    const [product, setProduct] = useState('')
    const [quantity, setQuantity] = useState('')
    const [mold, setMold] = useState('')
    const [cast, setCast] = useState('')
    const [aint, setPaint] = useState('')
    const [complete, setComplete] = useState('')
    const [order, setOrder] = useState({})
    
    const dispatch = useDispatch()
    const location = useLocation()
    const {id} = location.state
    
    const {orderID} = useParams()

    const workorderDetails = useSelector(state => state.workorderDetails)
    const {workorder} = workorderDetails

    useEffect(() => {
        dispatch(getWorkorderDetails(id))
        let array = workorder.orders.slice()
            for (var i = 0; i < array.length; i++) {
                if(array[i]._id === orderID) {
                    setOrder(array[i])
                }
            }
        
    }, [dispatch, id, orderID, workorder.orders])

    



    return (
        <>
            <h4>Order Id: {orderID}</h4>
            <Card className='p-3'>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group className='mb-3' controlId='product'>
                                <Form.Label>Product</Form.Label>
                                <Form.Control 
                                    type='text'
                                    value={order.product}  
                                ></Form.Control>
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className='mb-3' controlId='quantity'>
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control 
                                    type='number'
                                    value={order.quantity}  
                                ></Form.Control>
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className='mb-3' controlId='complete'>
                                <Form.Label>Complete</Form.Label>
                                <Form.Control 
                                    type='number'
                                    value={order.complete}  
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
                                    value={order.mold}  
                                ></Form.Control>
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className='mb-3' controlId='cast'>
                                <Form.Label>Cast</Form.Label>
                                <Form.Control 
                                    type='number'
                                    value={order.cast}  
                                ></Form.Control>
                            </Form.Group>
                        </Col>
                        
                        <Col>
                            <Form.Group className='mb-3' controlId='paint'>
                                <Form.Label>Paint</Form.Label>
                                <Form.Control 
                                    type='number'
                                    value={order.paint}  
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
