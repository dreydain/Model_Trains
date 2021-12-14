import React, {useState, useEffect} from 'react'
import { useNavigate, useParams, useLocation, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {Table, Row, Col, Button, Card, Form} from 'react-bootstrap'
import {getWorkorderDetails, updateWorkorder} from '../actions/workorderActions'
import {orderUpdate} from '../actions/orderActions'


const OrderEditScreen = () => {
    const [product, setProduct] = useState('')
    const [quantity, setQuantity] = useState('')
    const [mold, setMold] = useState('')
    const [cast, setCast] = useState('')
    const [paint, setPaint] = useState('')
    const [complete, setComplete] = useState('')
    const [order, setOrder] = useState({})
    const [updatedOrder, setUpdatedOrder] = useState({
        
        quantity: quantity,
        complete: complete,
        mold: mold,
        cast: cast,
        paint: paint
    })
    
    
    const dispatch = useDispatch()
    const location = useLocation()
    const {id} = location.state
    
    const {orderID} = useParams()

    const workorderDetails = useSelector(state => state.workorderDetails)
    const {workorder} = workorderDetails

    // const orderUpdate = useSelector((state) => state.orderUpdate)
    // const {success} = orderUpdate

    useEffect(() => {
        dispatch(getWorkorderDetails(id))
        let array = workorder.orders.slice()
            for (var i = 0; i < array.length; i++) {
                if(array[i]._id === orderID) {
                    setOrder(array[i])
                }
            }
        
    }, [dispatch, id, orderID, workorder.orders])

    const submitHandler = (e) => {
        e.preventDefault()
        setUpdatedOrder({product: order.product, quantity, complete, mold, cast, paint})
        
        
    }




    return (
        <>
            <h4>Order Id: {orderID}</h4>
            <Card className='p-3'>
                <Form onSubmit={submitHandler}>
                    <Row>
                        <Col>
                            <Form.Group className='mb-3' controlId='product'>
                                <Form.Label>Product</Form.Label>
                                <Form.Control 
                                    type='text'
                                    value={order.product}
                                    onChange={(e) => setProduct(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className='mb-3' controlId='quantity'>
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control 
                                    type='number'
                                    placeholder={order.quantity}
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}  
                                ></Form.Control>
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className='mb-3' controlId='complete'>
                                <Form.Label>Complete</Form.Label>
                                <Form.Control 
                                    type='number'
                                    placeholder={order.complete}
                                    value={complete} 
                                    onChange={(e) => setComplete(e.target.value)} 
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
                                    placeholder={order.mold}
                                    value={mold} 
                                    onChange={(e) => setMold(e.target.value)}  
                                ></Form.Control>
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className='mb-3' controlId='cast'>
                                <Form.Label>Cast</Form.Label>
                                <Form.Control 
                                    type='number'
                                    placeholder={order.cast}
                                    value={cast} 
                                    onChange={(e) => setCast(e.target.value)}  
                                ></Form.Control>
                            </Form.Group>
                        </Col>
                        
                        <Col>
                            <Form.Group className='mb-3' controlId='paint'>
                                <Form.Label>Paint</Form.Label>
                                <Form.Control 
                                    type='number'
                                    placeholder={order.paint}
                                    value={paint} 
                                    onChange={(e) => setPaint(e.target.value)} 
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
