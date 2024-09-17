import React from 'react'

import { product } from './product'

function Name() {
    return (
    <div style={{color: 'green', fontWeight: 'bold', fontSize: '1.5rm'}}>{product.name}</div>
    )
}

export default Name