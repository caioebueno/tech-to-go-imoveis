import styled from 'styled-components'

export const Center = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center; 
    background-color: #0056DA;
    padding: 15px 0px 15px 0px;
    ${(props) => props.transparent && `
        background-color: transparent;
    `}
`

export const Container = styled.div`
    width: 1000px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.h1`
    margin: 0px;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 28px;
`

export const ItemsContainer = styled.div`
    display: flex;
    flex-direction: row;
`
