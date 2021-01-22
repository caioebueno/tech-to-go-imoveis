import React from 'react'
import PropTypes from 'prop-types'

// STYLED COMPONENTS
import { Button } from './styles'

FilterCheckBox.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.any,
    onClick: PropTypes.func,
    active: PropTypes.bool,
};

FilterCheckBox.defaultProps = {
    active: false,
}

function FilterCheckBox(props) {
    return (
        <Button
            value={props.value}
            onClick={props.onClick}
            active={props.active}
        >
            {props.label}
        </Button>
    );
}

export default FilterCheckBox; 