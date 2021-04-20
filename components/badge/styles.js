import styled from 'styled-components'

export const Container = styled.div`
    padding: 3px 7px 3px 7px;
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
    border-radius: 3px;
    font-weight: 500;
    font-size: 9px;
`