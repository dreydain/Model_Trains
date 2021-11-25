import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getUserDetails, deleteUser} from '../actions/userActions'
import {useParams, useNavigate} from 'react-router-dom'
import {Row, Col, ListGroup, Button} from 'react-bootstrap'

const UserDetailsScreen = () => {
    const dispatch = useDispatch()
    const {id} = useParams();
    let navigate = useNavigate()
    
    const userDelete = useSelector((state) => state.userDelete)
    const {success} = userDelete

    const userDetails = useSelector((state) => state.userDetails)
    const {user} = userDetails

    useEffect(() => {
        dispatch(getUserDetails(id))
    }, [dispatch, id, success])

    const deleteHandler = (id) => {
        dispatch(deleteUser(id))
        if(window.confirm('Are you sure?')) {
            dispatch(deleteUser(id))
            navigate('/userlist')
        }
    }

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
                            Phone: {user.phone}
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
                        <Button 
                            className='my-5'
                            href={`/users/${user._id}/edit`}
                            >
                            Update User
                        </Button>
                    </Col>
                    <Col>
                        <Button className='my-5 float-end' variant='danger' onClick={() => deleteHandler(user._id)}>Terminate</Button>
                    </Col>
                </Row>
            </Row>
        </>
    )
}

export default UserDetailsScreen


