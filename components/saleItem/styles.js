import styled from 'styled-components'

export const Container = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    width: 300px;
    margin: 15px 0px 15px 0px;
    cursor: pointer;
    &:nth-child(3n) {
        justify-self: end;
    }
    &:nth-child(2) {
        justify-self: center;
    }
    &:nth-child(5) {
        justify-self: center;
    }
`

export const Image = styled.img`
    width: 300px;
    height: 280px;
    border-radius: 3px 3px 0px 0px;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 100%;
`
export const NumberContainer = styled.div`
    border-top: 1px solid #EFF0F3;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Price = styled.h3`
    margin: 0px;
    font-weight: 600;
    font-size: 15px;
    line-height: 22px;
    color: #0056DA;
`

export const Title = styled.h3`
    margin: 0px;
    font-weight: 500;
    font-size: 14px;
`

export const Address = styled.h4`
    margin: 0px;
    font-weight: 500;
    font-size: 12px;
    color: #8B8F98;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    ${(props) => props.spaceBetween && `
        justify-content: space-between;
    `}
    align-items: center;
`

export const Col = styled.div`
    display: flex;
    flex-direction: column;
`

export const Number = styled.span`
    font-weight: 600;
    font-size: 14px;
    margin-left: 10px;
`
export const IconSpacer = styled.div`
    width: 10px;
`
