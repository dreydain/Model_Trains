import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Form, Button} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import {getUserDetails, updateUser, } from '../actions/userActions'
import {useParams, useNavigate} from 'react-router-dom'
import {USER_UPDATE_RESET} from '../constants/userConstants'



const UserUpdateScreen = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [jobTitle, setJobTitle] = useState('')
    const [wage, setWage] = useState('')
    const [startDate, setStartDate] = useState(Date)
    const [endDate, setEndDate] = useState(Date)
    
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const {id} = useParams();

    const userDetails = useSelector((state) => state.userDetails)
    const {user} = userDetails

    const userUpdate = useSelector((state) => state.userUpdate)
    const {success} = userUpdate


    useEffect(() => {
        
        if(!user.firstName || !user._id || success) {
            dispatch(getUserDetails(id))
    
        } else {
            setFirstName(user.firstName)
            setLastName(user.lastName)
            setEmail(user.email)
            setPhone(user.phone)
            setAddress(user.address)
            setJobTitle(user.jobTitle)
            setWage(user.wage)
            setStartDate(user.startDate)
            setEndDate(user.endDate)
        }
        
    }, [dispatch, id, success, user])
    

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateUser({id: user._id, firstName, lastName, email, phone, address, jobTitle, wage, startDate, endDate}))
        dispatch({type: USER_UPDATE_RESET})
        navigate('/userlist')
    }

    

    return (
        <FormContainer>
            <h1>Update</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='firstName'>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                        type='name' 
                        placeholder='Enter First Name' 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='lastName'>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                        type='name' 
                        placeholder='Enter Last Name' 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control 
                        type='email' 
                        placeholder='Enter Email' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='phone'>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control 
                        type='text' 
                        placeholder='Enter Phone' 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='address'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control 
                        type='text' 
                        placeholder='Enter Address' 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='jobTitle'>
                    <Form.Label>Job Title</Form.Label>
                    <Form.Control 
                        type='text' 
                        placeholder='Enter Job Title' 
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='wage'>
                    <Form.Label>Wage</Form.Label>
                    <Form.Control 
                        type='number' 
                        placeholder='Enter Wage' 
                        value={wage}
                        onChange={(e) => setWage(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='startDate'>
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control 
                        type='date' 
                        placeholder='Select Start Date' 
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='endDate'>
                    <Form.Label>End Date</Form.Label>
                    <Form.Control 
                        type='date' 
                        placeholder='Select End Date' 
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary' className='my-3'>
                    Update
                </Button>
            </Form>
        </FormContainer>
    )
}

export default UserUpdateScreen