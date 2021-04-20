import React, { useState } from 'react'
import PropTypes from 'prop-types'

// STYLED COMPONENTS
import { Center, Container, Logo, ItemsContainer } from './styles'

// COMPONENTS IMPORT
import Button from '@/components/button'
import Item from '@/components/navbarItem'

Navbar.propTypes = {
    transparent: PropTypes.bool,
    page: PropTypes.number.isRequired,
};

Navbar.defaultProps = {
    transparent: false,
}

function Navbar({ transparent, page }) {

    return (
        <Center transparent={transparent}>
            <Container>
                <Logo>Logo.</Logo>
                <ItemsContainer>
                    <Item
                        label='Home'
                        active={page === 0 ? true : false}
                    />
                    <Item
                        label='Compra'
                        dropdown
                        active={page === 1 ? true : false}
                    />
                    <Item
                        label='Aluguel'
                        dropdown
                        active={page === 2 ? true : false}
                    />
                </ItemsContainer>
                <Button
                    title='Contato'
                    backgroundColor='rgba(255, 255, 255, 0.3)'
                    color='#FFFFFF'
                />
            </Container>
        </Center>
    )
}

export default Navbar