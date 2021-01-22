import React, { useState } from 'react';

// STYLED COMPONENTS
import {Body, Label, Row} from './styles'

// COMPONENTS IMPORT
import CheckBox from '../filterCheckBox'

function Filter(props) {
    const [filterOptions, setFilterOptions] = useState({
        type: 1,
        bedrooms: 1,
        area: [],
        bathrooms: 1,
        price: [],
        park: 1,
    })

    const setType = (type) => {
        setFilterOptions({
            ...filterOptions,
            type: type
        })
    }

    const setBedroom = (bedroom) => {
        
    }

    return (
        <Body>
            <Row>
                <Row>
                    <Label>Tipo</Label>
                    {filterOptions.type === 1 ? <CheckBox active label='Casa' value={1} /> : <CheckBox onClick={() => {setType(1)}} label='Casa' value={1} />}
                    {filterOptions.type === 2 ? <CheckBox active label='Apartamento' value={2} /> : <CheckBox onClick={() => {setType(2)}} label='Apartamento' value={2} />}
                    {filterOptions.type === 3 ? <CheckBox active label='Terreno' value={3} /> : <CheckBox onClick={() => {setType(3)}} label='Terreno' value={3} />}
                </Row>
                <Row>
                    <Label>Quartos</Label>
                    {filterOptions.bedrooms === 1 ? <CheckBox active label='1' value={1} /> : <CheckBox onClick={() => {}} label='1' value={1} />}
                    {filterOptions.bedrooms === 2 ? <CheckBox active label='2' value={2} /> : <CheckBox label='2' value={2} />}
                    {filterOptions.bedrooms === 3 ? <CheckBox active label='3' value={3} /> : <CheckBox label='3' value={3} />}
                    {filterOptions.bedrooms === 4 ? <CheckBox active label='4' value={4} /> : <CheckBox label='4' value={4} />}
                </Row>
            </Row> 
            <Row>
                <Row>
                    <Label>Area</Label>
                </Row>
                <Row>
                    <Label>Banheiros</Label>
                    <CheckBox active label='1' value={1} />
                    <CheckBox label='2' value={2} />
                    <CheckBox label='3' value={3} />
                    <CheckBox label='4' value={4} />
                </Row>
            </Row>
            <Row>
                <Row>
                    <Label>Valor</Label>
                </Row>
                <Row>
                    <Label>Garagens</Label>
                    <CheckBox active label='1' value={1} />
                    <CheckBox label='2' value={2} />
                    <CheckBox label='3' value={3} />
                    <CheckBox label='4' value={4} />
                </Row>
            </Row>  
        </Body>
    );
}

export default Filter;