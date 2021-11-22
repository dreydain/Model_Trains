import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getUserDetails} from '../actions/userActions'
import {useParams} from 'react-router-dom'
import {Row, Col, ListGroup, Button} from 'react-bootstrap'

const UserDetailsScreen = () => {
    const dispatch = useDispatch()
    const {id} = useParams();
    

    const userDetails = useSelector((state) => state.userDetails)
    const {user} = userDetails

    useEffect(() => {
        dispatch(getUserDetails(id))
    }, [dispatch, user, id])

    return (
        <>
            <Row>
                <Row>
                    <Col>
                        <Button className='my-2' variant='light'>Go Back</Button>
                    </Col>
                </Row>
                <Col md={6}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>{user.firstName} {user.lastName}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Email: {user.email}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Phone: {user.pone}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Address: {user.address}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Job Title: {user.jobTitle}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Wage: {user.wage}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Row>
                <Col>
                        <Button className='my-5'>Update User</Button>
                    </Col>
                    <Col>
                        <Button className='my-5 float-end' variant='danger'>Terminate</Button>
                    </Col>
                </Row>
            </Row>
        </>
    )
}

export default UserDetailsScreen


