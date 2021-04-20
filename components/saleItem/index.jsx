import React from 'react';
import PropTypes from 'prop-types';

// STYLED COMPONENTS
import {
    Container, InfoContainer, Price,
    Row, Col, Title, Address, NumberContainer,
    IconContainer, Number, IconSpacer,
    Image,
} from './styles'

// COMPONENTS IMPORT
import Badge from '@/components/badge'

// ASSETS IMPORT
import { RiRulerLine } from 'react-icons/ri'
import { RiHotelBedLine } from 'react-icons/ri'
import { BiBath } from 'react-icons/bi'

SaleItem.propTypes = {
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    area: PropTypes.number.isRequired,
    bedroom: PropTypes.number.isRequired,
    bathroom: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    end: PropTypes.bool
};

SaleItem.defaultProps = {
    end: false,
}

function SaleItem({ price, title, address, area, bedroom, bathroom, image, end }) {
    return (
        <Container end={end}>
            <Image src={image} />
            <InfoContainer>
                <Row spaceBetween>
                    <Price>{price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Price>
                    <Badge
                        label='Beira mar'
                    />
                </Row>
                <Title>{title}</Title>
                <Address>{address}</Address>
            </InfoContainer>
            <NumberContainer>
                <IconContainer>
                    <RiRulerLine color='#0056DA' size={18} />
                    <Number>{area} m2</Number>
                </IconContainer>
                <Row>
                    <IconContainer>
                        <RiHotelBedLine color='#0056DA' size={20} />
                        <Number>{bedroom}</Number>
                    </IconContainer>
                    <IconSpacer />
                    <IconContainer>
                        <BiBath color='#0056DA' size={20} />
                        <Number>{bathroom}</Number>
                    </IconContainer>
                </Row>
            </NumberContainer>
        </Container>
    );
}

export default SaleItem;