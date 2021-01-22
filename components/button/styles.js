import styled from 'styled-components'

export const Button = styled.button`
    padding: 13px 30px 13px 30px;
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
    border-radius: 3px;
    font-weight: 600;
    font-size: 13px;
    cursor: pointer;
`