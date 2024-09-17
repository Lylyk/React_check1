import React from 'react'
import { product } from './product'

function Image() {
    return (
    <img src={product.image} style={{width:'300px', height: '200px'  }} />
    )
}

export default Image