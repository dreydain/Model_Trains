import React, {useEffect} from 'react'
import {Button, Table, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {listUsers, deleteUser} from '../actions/userActions'
import {Link} from 'react-router-dom'

const UserListScreen = () => {
    
    const dispatch = useDispatch()

    const userList = useSelector((state) => state.userList)
    const {users} = userList

    const userDelete = useSelector((state) => state.userDelete)
    const {success} = userDelete

    useEffect(() => {
        dispatch(listUsers())
    }, [dispatch, success])

    const deleteHandler = (id) => {
        dispatch(deleteUser(id))
        if(window.confirm('Are you sure?')) {
            dispatch(deleteUser(id)) 
        }
    }

    
    return (
        <>
            <Row>
                <Col>
                    <Button 
                    className='my-2 float-end'
                    href='/users/new'>
                        Add New Staff
                    </Button>
                </Col>
            </Row>
            
            <Table striped bordered hover responsive className='table-md'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Job Title</th>
                        <th>Employment Period</th>
                        <th>Wage</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td><Link to={`/users/${user._id}`}>{user.firstName}</Link></td>
                            <td>{user.lastName}</td>
                            <td>{user.jobTitle}</td>
                            <td>Employment Dates</td>
                            <td>{user.wage}</td>
                            <td><Link to={`/users/${user._id}/edit`}>Edit</Link> | <Button variant='danger'onClick={() => deleteHandler(user._id)}>Terminate</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            
        </>
    )
}

export default UserListScreen