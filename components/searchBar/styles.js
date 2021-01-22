import styled from 'styled-components'

export const Body = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
`

export const Input = styled.input`
    width: 500px;
    background-color: white;
    padding: 20px, 0px, 20px, 0px;
    border-bottom: 1px solid #F4F4F4;
    border-top: 1px solid #F4F4F4;
    font-weight: 500;
    font-size: 13px;
`

export const IconContainer = styled.div`
     border-top: 1px solid #F4F4F4;
     border-bottom: 1px solid #F4F4F4;
     border-left: 1px solid #F4F4F4;
     border-radius: 0px 0px 0px 3px;
     padding: 20px;
     background-color: #FFFFFF;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ButtonContainer = styled.div`
    border-top: 1px solid #F4F4F4;
    border-bottom: 1px solid #F4F4F4;
    border-right: 1px solid #F4F4F4;
    border-radius: 0px 3px 3px 0px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 15px;
`;

export const VerticalLine = styled.div`
    width: 1px;
    height: 30px;
    background-color: #F4F4F4;
`;

export const Tab = styled.button`
    padding: 12px 18px 12px 18px;
    border-radius: 3px 3px 0px 0px;
    font-weight: 600;
    font-size: 13px;
    cursor: pointer;
    ${(props) => props.active ? `
        background-color: #FFFFFF;
        color: #0056DA;
    ` : `
        background: rgba(255, 255, 255, 0.3);
        color: #FFFFFF;
    `}
`;
