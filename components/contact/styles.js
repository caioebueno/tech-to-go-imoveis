import styled from 'styled-components'

export const ContainerContact = styled.div`
    width: 269px;
    height: 127px;
    background: #FFFFFF;
    box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 5px;
`

export const Contact = styled.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    color: #0F2234;
`

export const ContainerButton = styled.div`
    width: 122px;
    height: 38px;
    background: #0056DA;
    border-radius: 3px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

        &:hover {
        cursor: pointer;
        opacity: 0.7;
    }
`

export const Button = styled.div`
    color: white;
`

export const PopUpBackground = styled.div`
	width: 100vw;
	height: 100vh;
	z-index: 50;
	left: 0;
	top: 0;
	position: fixed;
	background-color: rgba(203,203,203, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`

export const PopUp = styled.div`
	width: 399px;
    height: auto;
	background: #ffffff;
	box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
	border-radius: 4px;
	display: flex;
	flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
	padding: 15px;
`


export const TitlePopUp = styled.span`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #0F2234;
    text-align: left;
`
export const SubTitlePopUp = styled.span`
    width: 331px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #0F2234;
    text-align: left;
    margin-bottom: 10px;
`

export const TitleInput = styled.span`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    color: #0F2234;
    text-align: left;    
`

export const Input = styled.input`
    border: 1px solid rgba(0,86,218, 0.4);
    width: 341px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 3px;
`

export const InputMsg = styled.textarea `
    border: 1px solid rgba(0,86,218, 0.4);
    width: 341px;
    height: 114px;
    box-sizing: border-box;
    border-radius: 3px;
    margin-bottom: 20px;
`

export const ButtonStartContactContainer = styled.div`
    width: 237px;
    height: 50px;
    background: #4C80CF;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const ButtonStartContact = styled.div`
    color: white;
    font-size: 16px;
    font-weight: bold;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`
export const Col = styled.div `
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

`