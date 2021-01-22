import React from 'react'
import PropTypes from 'prop-types';

// STYLED COMPONENTS
import { Button } from './styles'

Button.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
}

Button.defaultProps = {
    backgroundColor: '#0056DA',
    color: '#FFFFFF',
}

function ButtonComponent(props) {
    return (
        <Button
            onClick={props.onClick}
            color={props.color}
            backgroundColor={props.backgroundColor}
        >
            {props.title}
        </Button>
    )
}

export default ButtonComponent
