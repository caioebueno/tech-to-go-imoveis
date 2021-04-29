/// REACT

import React from 'react';

/// STYLES 

import { Body, Row, Col, TextTitle, TextSmall, TagsContainer } from './styles';

/// COMPONENTS 

import Gallery from '../gallery/index'
import Contact from '../contact/index'
import Tag from '../tag/index'
import Description from '../description/index'
import Price from '../price/index'
import Map from '../map/index'

function index({ id }) {
    return (
        <Body>
            <Row>
                <Col>
                    <Gallery />
                    <TextSmall>Referencia n# {id}</TextSmall>

                    <Row style={{ justifyContent: 'space-between', marginTop: 5 }}>
                        <Col>
                            <TextTitle>Apartamento de frente pro mar</TextTitle>
                            <TextSmall>Rua 306, 88220-000, Itapema - SC</TextSmall>

                            <TagsContainer>
                                <Tag title='tao' value='teste' />
                                <Tag title='eae' value='55' />
                                <Tag title='bbb' value='552' />
                                <Tag title='taccco' value='teste' />
                                <Tag title='ddd' value='342' />
                                <Tag title='teeeeao' value='5345' />
                                <Tag title='tao' value='teste' />
                                <Tag title='eae' value='55' />
                                <Tag title='bbb' value='552' />
                                <Tag title='taccco' value='teste' />
                                <Tag title='ddd' value='342' />
                                <Tag title='teeeeao' value='5345' />
                            </TagsContainer>

                            <Row>
                                <Description />
                            </Row>

                        </Col>
                        <Col style={{ alignItems: 'center' }}>
                            <Price price='1.000.000' />
                            <Contact />
                        </Col>

                    </Row>

                    <Row>
                        <Map />
                    </Row>
                </Col>
            </Row>
        </Body>
    );
}

export default index;