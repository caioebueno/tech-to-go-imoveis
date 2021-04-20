import React from 'react'

// MATERIAL UI
import Pagination from '@material-ui/lab/Pagination';

// COMPONENTS IMPORT
import Navbar from '@/components/navbar'

// STYLED COMPONENTS
import {Body, Main} from './styles'

function Items(props) {
    return (
        <Body>
            <Navbar page={1} />
            <Main>
                <Pagination 
                    count={10} 
                    shape="rounded" 
                    color='primary'
                />
            </Main>
        </Body>
    )
}

export default Items