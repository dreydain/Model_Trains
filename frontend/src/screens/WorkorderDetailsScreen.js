import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getWorkorderDetails} from '../actions/workorderActions'
import {Row, Col, ListGroup, Button, Table} from 'react-bootstrap'



const WorkorderDetailsScreen = () => {
    
    const dispatch = useDispatch()
    const {id} = useParams();

    const workorderDetails = useSelector(state => state.workorderDetails)
    const {workorder} = workorderDetails

    useEffect(() => {
        dispatch(getWorkorderDetails(id))
    }, [dispatch, id])


    return (
        <>
            <Row>
                <Col><Button className='my-3' variant='light' href={'/workorderlist'}>Go Back</Button></Col>
                <Col>
                    <Button className='my-3 float-end' variant='danger'>Delete</Button>
                    <Button className='m-3 float-end' href={`/workorders/${workorder._id}/edit`}>Update</Button>
                </Col>  
            </Row>
            <Row>
                <h1>{workorder.number}</h1>
            </Row>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <Row>
                        <Col><h4>Rush:</h4></Col>
                        <Col><h5>{workorder.rush === true ? 'Yes' : 'No'}</h5></Col>
                        <Col><h4>Order Date:</h4></Col>
                        <Col><h5>{workorder.orderDate}</h5></Col>
                        <Col><h4>Due Date:</h4></Col>
                        <Col><h5>{workorder.dueDate}</h5></Col>
                    </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Row>
                        <Col><h4>Customer:</h4></Col>
                        <Col><h5>{workorder.name}</h5></Col>
                        <Col><h4>Email:</h4></Col>
                        <Col><h5>{workorder.email}</h5></Col>
                        <Col><h4>Phone:</h4></Col>
                        <Col><h5>{workorder.phone}</h5></Col>
                    </Row>
                </ListGroup.Item>
            </ListGroup>

            <hr/>

            <Table striped bordered hover responsive className='table-md my-5'>
                <thead>
                    <tr>
                        <th>Product #</th>
                        <th>Quantity</th>
                        <th>Mold</th>
                        <th>Cast</th>
                        <th>Paint</th>
                        <th>Complete</th>
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
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default WorkorderDetailsScreen