import styled from 'styled-components'

export const Container = styled.a`
    cursor: pointer;
    margin: 0px 20px 0px 20px;
    padding: 5px 0px 5px 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    ${(props) => props.active && `
        border-bottom: 1px solid #FFFFFF;
        border-top: 1px solid transparent;
    `}
`

export const Label = styled.label`
    font-weight: 600;
    font-size: 14px;
    color: #FFFFFF;
`