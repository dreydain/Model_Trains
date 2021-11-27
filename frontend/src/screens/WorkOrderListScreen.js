import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Button, Table, Row, Col} from 'react-bootstrap'
import {listWorkorders} from '../actions/workorderActions'
import {Link} from 'react-router-dom'


const WorkOrderListScreen = () => {

    const dispatch = useDispatch()

    const workorderList = useSelector((state) => state.workorderList)
    const {workorders} = workorderList

    useEffect(() => {
        dispatch(listWorkorders())
    }, [dispatch])


    return (
        <>
            <Row>
                <Col>
                    <Button className='my-2 float-end' href={'/workorders/new'}>Add a WorkOrder</Button>
                </Col>
            </Row>
            
            <Table striped bordered hover responsive className='table-md'>
                <thead>
                    <tr>
                        <th>Work Order</th>
                        <th>Customer</th>
                        <th>Quantity</th>
                        <th>Order Date</th>
                        <th>Due Date</th>
                        <th>Ship Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {workorders.map((workorder) => (
                        <tr key={workorder._id}>
                            <td><Link to={`/workorders/${workorder._id}`}>{workorder.number}</Link></td>
                            <td>{workorder.customer.name}</td>
                            {workorder.orders.map((orderItems) => (
                                <td>{orderItems.quantity}</td>
                            ))}
                            <td>{workorder.orderDate}</td>
                            <td>{workorder.dueDate}</td>
                            <td>{workorder.shipped}</td>
                            <td><Link to={`/workorders/${workorder._id}/update`}>Update</Link></td>
                        </tr>
                    ))}
                    
                </tbody>
            </Table>
            
        </>
    )
}

export default WorkOrderListScreen
