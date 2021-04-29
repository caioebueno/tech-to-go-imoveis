import styled from 'styled-components'
import bg from '../../public/bg.png'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0px, 0px;
    padding-bottom: 50px;
`

export const Main = styled.main`
    width: 1000px;
    margin: 80px 0px 80px 0px;
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    font-weight: bold;
    font-size: 47px;
    color: #FFFFFF;
    margin: 80px 0px 80px 0px;
`
export const Center = styled.div`
    width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    ${(props) => props.spaceBetween && `
        justify-content: space-between;
    `}
`

export const Col = styled.div`
    display: flex;
    flex-direction: column;
`

export const Subtitle = styled.h3`
    margin: 0px;
    font-weight: bold;
    font-size: 36px;
    margin-bottom: 20px;
`

export const Description = styled.p`
    margin: 0px;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #ACB4BB;
`

export const SaleItemContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto;
`

export const SaleTab = styled.span`
    font-weight: 600;
    font-size: 15px;
    color: #ACB4BB;
    padding-bottom: 5px;
    cursor: pointer;
    ${(props) => props.margin && `
        margin: 0px 50px 0px 50px;
    `}
    ${(props) => props.active && `
        color: #0056DA;
        border-bottom: 2px solid #0056DA;
    `}
`

export const Dashboard = styled.button`
`