import React from 'react'
import PropTypes from 'prop-types'
import { RiArrowDownSLine } from 'react-icons/ri'

// STYLED COMPONENTS
import { Container, Label } from './styles'

NavbarItem.propTypes = {
    dropdown: PropTypes.bool,
    label: PropTypes.string.isRequired,
    active: PropTypes.bool,
}

NavbarItem.defaultProps = {
    dropdown: false,
    active: false,
}

function NavbarItem({ label, dropdown, active }) {
    return (
        <Container active={active}>
            <Label>{label}</Label>
            {dropdown && <RiArrowDownSLine color='#FFFFFF' size={18} style={{marginLeft: 3}} />}
        </Container>
    )
}

export default NavbarItem