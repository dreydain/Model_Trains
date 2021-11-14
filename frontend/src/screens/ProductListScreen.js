import React, {useEffect} from 'react'
import {Button, Table, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {listProducts} from '../actions/productActions'

const ProductListScreen = () => {
    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList)
    const {loading, error, products} = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    
    return (
        <>
            <Row>
                <Col>
                    <Button className='my-2 float-end'>Add a Product</Button>
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
                            <td>{product.number}</td>
                            <td>{product.name}</td>
                            <td>{product.stock}</td>
                            <td>{product.brand}</td>
                            <td>{product.category}</td>
                            <td>Update | Delete</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            
        </>
    )
}

export default ProductListScreen
