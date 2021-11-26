import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Form, Button} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import {createProduct} from '../actions/productActions'
import {useNavigate} from 'react-router-dom'




const ProductCreateScreen = () => {
    const [number, setNumber] = useState('')
    const [name, setName] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [image, setImage] = useState('')
    const [stock, setStock] = useState(Number)
    const [price, setPrice] = useState(Number)
    const [description, setDescription] = useState('')
    
    const dispatch = useDispatch()
    let navigate = useNavigate()

    const productCreate = useSelector((state) => state.productCreate)
    const {productInfo} = productCreate

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createProduct(number, name, brand, category, image, stock, price, description))
        navigate('/productlist')
        console.log(productInfo)
    }

    

    return (
        <FormContainer>
            <h1>Update</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='number'>
                    <Form.Label>Product #</Form.Label>
                    <Form.Control 
                        type='text' 
                        placeholder='Enter Product Number' 
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='name'>
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control 
                        type='text' 
                        placeholder='Enter Product Name' 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='brand'>
                    <Form.Label>Brand</Form.Label>
                    <Form.Control 
                        type='text' 
                        placeholder='Enter Brand' 
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='category'>
                    <Form.Label>Category</Form.Label>
                    <Form.Control 
                        type='text' 
                        placeholder='Enter Category' 
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='image'>
                    <Form.Label>Image</Form.Label>
                    <Form.Control 
                        type='text' 
                        placeholder='Enter Image URL' 
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='stock'>
                    <Form.Label>Stock</Form.Label>
                    <Form.Control 
                        type='number' 
                        placeholder='Enter Stock' 
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='price'>
                    <Form.Label>Price</Form.Label>
                    <Form.Control 
                        type='number' 
                        placeholder='Enter Price' 
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='description'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                        type='text-area' 
                        placeholder='Enter Description' 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary' className='my-3'>
                    Create
                </Button>
            </Form>
        </FormContainer>
    )
}

export default ProductCreateScreen