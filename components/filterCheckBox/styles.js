import styled from 'styled-components'

export const Button = styled.button`
    padding: 7px 15px 7px 15px;
    border-radius: 3px;
    border: 1px solid #0056DA;
    cursor: pointer;
    font-weight: 600;
    margin: 0px 5px 0px 5px;
    ${(props) => props.active ? `
        background-color: #0056DA;
        color: #FFFFFF;
    ` : `
        background-color: #FFFFFF;
        color: #0056DA;
    `}
`
