import React, {useEffect} from 'react'
import {Link, useParams, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getProductDetails, deleteProduct} from '../actions/productActions'
import {Row, Col, Image, ListGroup, Card, Button, Form} from 'react-bootstrap'



const ProductDetailsScreen = () => {
    
    const dispatch = useDispatch()
    const {id} = useParams();
    let navigate = useNavigate()

    const productDetails = useSelector(state => state.productDetails)
    const {product} = productDetails

    const productDelete = useSelector((state) => state.productDelete)
    const {success} = productDelete

    useEffect(() => {
        dispatch(getProductDetails(id))
    }, [dispatch, id, success])

    const deleteHandler = (id) => {
        dispatch(deleteProduct(id))
        if(window.confirm('Are you sure?')) {
            dispatch(deleteProduct(id))
            navigate('/productlist')
        }
    }


    return (
        <>
            <Row>
                <Col><Link className='btn btn-light my-3' to='/productlist'>Go Back</Link></Col>
                <Col>
                    <Button className='my-3 float-end' variant='danger' onClick={() => deleteHandler(product._id)}>Delete</Button>
                    <Button className='m-3 float-end' href={`/products/${product._id}/edit`}>Update</Button>
                </Col>  
            </Row>
            
            <Row>
                <Col md={5}>
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>
                <Col md={7}>
                
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col><h4>Product #</h4></Col>
                                <Col><h5>{product.number}</h5></Col>
                                <Col><h4>Name:</h4></Col>
                                <Col><h5>{product.name}</h5></Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                                <Col><h4>Brand:</h4></Col>
                                <Col><h5>{product.brand}</h5></Col>
                                <Col><h4>Category:</h4></Col>
                                <Col><h5>{product.category}</h5></Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                                <Col><h4>Stock:</h4></Col>
                                <Col><h5>{product.stock}</h5></Col>
                                <Col><h4>Price:</h4></Col>
                                <Col><h5>${product.price}</h5></Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            <Row className='my-3'>
                <h5><strong>Description:</strong> {product.description}</h5>
            </Row>
        </>
    )
}

export default ProductDetailsScreen