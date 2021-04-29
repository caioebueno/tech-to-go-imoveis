import React, { useState } from 'react';

import PopUp from './popup'

import { ContainerContact, Contact, ContainerButton, Button } from './styles'

function index(props) {

    const [ShowPopUp, setShowPopUp] = useState(false);

    const OpenPopUp = () => {
        setShowPopUp(prev => !prev);
    };

    return (
        <ContainerContact>
            <Contact>
                Interessado nesse imovel?
            </Contact>
            <ContainerButton>
                <Button onClick={OpenPopUp}>
                    Contato
                </Button>
            </ContainerButton>
            {ShowPopUp ? <PopUp close={setShowPopUp} /> : null}
        </ContainerContact >
    );
}

export default index;