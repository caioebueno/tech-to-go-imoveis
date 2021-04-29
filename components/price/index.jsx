import React from 'react';
import { ContainerPrice, Price } from './styles'

function index({ price }) {
    return (
        <ContainerPrice>
            <Price>
                R${price}
            </Price>
        </ContainerPrice>
    );
}

export default index;