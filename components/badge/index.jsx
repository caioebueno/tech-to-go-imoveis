import React from 'react'
import PropTypes from 'prop-types'

// STYLED COMPONENTS
import {Container} from './styles'

Badge.propTypes = {
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    label: PropTypes.string.isRequired,
}

Badge.defaultProps = {
    backgroundColor: 'rgba(0, 86, 218, 0.2)',
    color: '#0056DA',
}

function Badge({backgroundColor, color, label}) {
    return (
        <Container
            backgroundColor={backgroundColor}
            color={color}
        >
            {label}
        </Container>
    );
}

export default Badge