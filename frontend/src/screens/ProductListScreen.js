import React, {useEffect} from 'react'
import {Button, Table, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {listProducts, deleteProduct} from '../actions/productActions'
import {Link, useNavigate} from 'react-router-dom'

const ProductListScreen = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate()

    const productList = useSelector((state) => state.productList)
    const {products} = productList

    const productDelete = useSelector((state) => state.productDelete)
    const {success} = productDelete

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch, success])

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
                <Col>
                    <Button className='my-3' href={'/products/new'}>Add a Product</Button>
                </Col>
            </Row>
            
            <Table striped bordered hover responsive className='table-md'>
                <thead>
                    <tr>
                        <th>Product #</th>
                        <th>Name</th>
                        <th>Stock</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product._id}>
                            <td><Link to={`/products/${product._id}`}>{product.number}</Link></td>
                            <td>{product.name}</td>
                            <td>{product.stock}</td>
                            <td>{product.brand}</td>
                            <td>{product.category}</td>
                            <td>
                                <Link to={`/products/${product._id}/edit`}>Update</Link> | <Button variant='danger' onClick={() => deleteHandler(product._id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            
        </>
    )
}

export default ProductListScreen
