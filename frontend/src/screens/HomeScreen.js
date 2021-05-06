import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Row, Col } from 'react-bootstrap'
import Product from "../components/Product"
import Message from "../components/Message"
import Loader from "../components/Loader"
import { listProducts } from "../actions/productActions"


const HomeScreen = () => {
    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList
    
    // useEffect is use to make a request to our backend
    // whatever inside here will run as sson as the component loads
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])


    return (
        <div>
            <h1>Latest Products</h1>
            {loading ? (<h2><Loader/></h2>) : error ? (<Message variant="danger">{error}</Message>) : (
                <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}/>
                    </Col>
                ))}
                </Row>
            )}
            
        </div>
    )
}

export default HomeScreen 
