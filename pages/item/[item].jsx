import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

// COMPONENTS IMPORT
import Navbar from '@/components/navbar'

function Item(props) {
    const router = useRouter()
    const [id, setId] = useState(router.query.item)

    useEffect(() => {
        console.log(router.query.item)
    }, [])

    return (
        <div>
            <Navbar />
            <h1>Item {id}</h1>
        </div>
    );
}

export default Item;