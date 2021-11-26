import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Form, Button} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import {getProductDetails, updateProduct, } from '../actions/productActions'
import {useParams, useNavigate} from 'react-router-dom'
import {PRODUCT_UPDATE_RESET} from '../constants/productConstants'



const ProductUpdateScreen = () => {
    const [number, setNumber] = useState('')
    const [name, setName] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [image, setImage] = useState('')
    const [stock, setStock] = useState(Number)
    const [price, setPrice] = useState(Number)
    const [description, setDescription] = useState('')
    
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const {id} = useParams();

    const productDetails = useSelector((state) => state.productDetails)
    const {product} = productDetails

    const productUpdate = useSelector((state) => state.productUpdate)
    const {success} = productUpdate


    useEffect(() => {
        
        if(!product.name || !product._id || success) {
            dispatch({type: PRODUCT_UPDATE_RESET})
            dispatch(getProductDetails(id))
    
        } else {
            setNumber(product.number)
            setName(product.name)
            setBrand(product.brand)
            setCategory(product.category)
            setImage(product.image)
            setStock(product.stock)
            setPrice(product.price)
            setDescription(product.description)
        }
        
    }, [dispatch, id, success, product])
    

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateProduct({id: product._id, number, name, brand, category, image, stock, price, description}))
        navigate('/productlist')
    }

    

    return (
        <FormContainer>
            <h1>Update</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='number'>
                    <Form.Label>Workorder #</Form.Label>
                    <Form.Control 
                        type='text' 
                        placeholder='Enter Workorder Number' 
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
                    Update
                </Button>
            </Form>
        </FormContainer>
    )
}

export default ProductUpdateScreen