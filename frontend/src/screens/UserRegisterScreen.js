import React from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'

const UserRegisterScreen = () => {
    return (
        <FormContainer>
            <h1>Sign Up</h1>
            <Form onSubmit={}>
                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type='name' 
                        placeholder='Enter Name' 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type='password' 
                        placeholder='Enter password' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='confirmPassword'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control 
                        type='password' 
                        placeholder='Confirm password' 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary' className='my-3'>
                    Register
                </Button>
            </Form>

            <Row className='py-3'>
                <Col>
                    Have an Account?{' '} 
                    <Link to={redirect 
                        ? `/login?redirect=${redirect}` 
                        : '/login'}>
                            Login
                    </Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default UserRegisterScreen
