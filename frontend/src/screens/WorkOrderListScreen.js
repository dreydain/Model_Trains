import React, {useEffect} from 'react'
import {Button, Table, Row, Col} from 'react-bootstrap'


const WorkOrderListScreen = () => {


    return (
        <>
            <Row>
                <Col>
                    <Button className='my-2 float-end'>Add a WorkOrder</Button>
                </Col>
            </Row>
            
            <Table striped bordered hover responsive className='table-md'>
                <thead>
                    <tr>
                        <th>Work Order</th>
                        <th>Quantity</th>
                        <th>Order Date</th>
                        <th>Due Date</th>
                        <th>Ship Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>workorder #</td>
                        <td>50</td>
                        <td>10/16/21</td>
                        <td>11/16/21</td>
                        <td>Ship Date</td>
                        <td>update</td>
                    </tr>
                </tbody>
            </Table>
            
        </>
    )
}

export default WorkOrderListScreen
