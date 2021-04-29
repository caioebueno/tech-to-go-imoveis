import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

// COMPONENTS IMPORT
import Navbar from '@/components/navbar'
import Product from '@/components/product/index';

function Item(props) {
    const router = useRouter()
    const [id, setId] = useState(router.query.item)

    useEffect(() => {
        console.log(router.query.item)
    }, [])

    return (
        <>
            <Navbar />
            <Product id={router.query.item} />
        </>
    );
}

export default Item;