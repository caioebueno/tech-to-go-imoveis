import React from 'react';

import { PopUpBackground, PopUp, TitlePopUp, SubTitlePopUp, TitleInput, Input, InputMsg, Row, Col, ButtonStartContactContainer, ButtonStartContact } from './styles'

export const popup = ({ close }) => {

    return (
        <PopUpBackground onClick={() => { close(false) }}>
            <PopUp onClick={(e) => { e.stopPropagation() }}>
                <Col>
                    <TitlePopUp>Olá!</TitlePopUp>
                    <SubTitlePopUp>Algum textinho Algum textinho Algum textinho Algum textinho Algum textinho</SubTitlePopUp>
                </Col>

                <Col>
                    <TitleInput>Nome</TitleInput>
                    <Input></Input>
                </Col>


                <Col>
                    <TitleInput>Email</TitleInput>
                    <Input></Input>
                </Col>

                <Col>
                    <TitleInput>Numero (Opcional)</TitleInput>
                    <Input></Input>
                </Col>

                <Col>
                    <TitleInput>Mensagem</TitleInput>
                    <InputMsg></InputMsg>
                </Col>

                <Row style={{ justifyContent: 'center' }}>
                    <ButtonStartContactContainer>
                        <ButtonStartContact>Iniciar conversa</ButtonStartContact>
                    </ButtonStartContactContainer>
                </Row>
            </PopUp>
        </PopUpBackground >
    );
}

export default popup;