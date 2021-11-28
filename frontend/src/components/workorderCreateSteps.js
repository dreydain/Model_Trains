import React from 'react'
import {Nav} from 'react-bootstrap'

const workorderCreateSteps = ({step1, step2, step3}) => {
    return (
        <Nav className='justify-content-center mb-4'>
            <Nav.Item>
                {step1 
                ? <Nav.Link  to='/workorderinfo'>Workorder Info</Nav.Link>
                : <Nav.Link disabled>Workorder Info</Nav.Link>
                } 
            </Nav.Item>

            <Nav.Item>
                {step2 
                ? <Nav.Link  to='/customerinfo'>Customer Info</Nav.Link>
                : <Nav.Link disabled>Customer Info</Nav.Link>
                } 
            </Nav.Item>

            <Nav.Item>
                {step3 
                ? <Nav.Link  to='/productinfo'>Product Info</Nav.Link>
                : <Nav.Link disabled>Product Info</Nav.Link>
                } 
            </Nav.Item>
        </Nav>
    )
}

export default workorderCreateSteps