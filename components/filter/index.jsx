import React, { useState } from 'react';
import Slider from '@material-ui/core/Slider';

// STYLED COMPONENTS
import {Body, Label, Row} from './styles'

// COMPONENTS IMPORT
import CheckBox from '../filterCheckBox'

function Filter(props) {
    const [filterOptions, setFilterOptions] = useState({
        type: 1,
        bedrooms: 1,
        area: [100, 500],
        bathrooms: 1,
        price: [100000, 2000000],
        park: 1,
    })

    const setType = (type) => {
        setFilterOptions({
            ...filterOptions,
            type: type
        })
    }

    const setBedroom = (bedroom) => {
        setFilterOptions({
            ...filterOptions,
            bedrooms: bedroom
        })
    }

    const setBathroom = (bathroom) => {
        setFilterOptions({
            ...filterOptions,
            bathrooms: bathroom
        })
    }

    const setPark = (park) => {
        setFilterOptions({
            ...filterOptions,
            park: park
        })
    }

    const setArea = (e, area) => {
        setFilterOptions({
            ...filterOptions,
            area: area
        })
    }

    const setPrice = (e, price) => {
        setFilterOptions({
            ...filterOptions,
            price: price
        })
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
                    {filterOptions.bedrooms === 1 ? <CheckBox active label='1' value={1} /> : <CheckBox onClick={() => {setBedroom(1)}} label='1' value={1} />}
                    {filterOptions.bedrooms === 2 ? <CheckBox active label='2' value={2} /> : <CheckBox onClick={() => {setBedroom(2)}} label='2' value={2} />}
                    {filterOptions.bedrooms === 3 ? <CheckBox active label='3' value={3} /> : <CheckBox onClick={() => {setBedroom(3)}} label='3' value={3} />}
                    {filterOptions.bedrooms === 4 ? <CheckBox active label='4' value={4} /> : <CheckBox onClick={() => {setBedroom(4)}} label='4' value={4} />}
                </Row>
            </Row> 
            <Row>
                <Row>
                    <Label>Area</Label>
                    <Slider
                        value={filterOptions.area}
                        min={100}
                        max={500}
                        onChange={setArea}
                    />
                </Row>
                <Row>
                    <Label>Banheiros</Label>
                    {filterOptions.bathrooms === 1 ? <CheckBox active label='1' value={1} /> : <CheckBox onClick={() => {setBathroom(1)}} label='1' value={1} />}
                    {filterOptions.bathrooms === 2 ? <CheckBox active label='2' value={2} /> : <CheckBox onClick={() => {setBathroom(2)}} label='2' value={2} />}
                    {filterOptions.bathrooms === 3 ? <CheckBox active label='3' value={3} /> : <CheckBox onClick={() => {setBathroom(3)}} label='3' value={3} />}
                    {filterOptions.bathrooms === 4 ? <CheckBox active label='4' value={4} /> : <CheckBox onClick={() => {setBathroom(4)}} label='4' value={4} />}
                </Row>
            </Row>
            <Row>
                <Row>
                    <Label>Valor</Label>
                    <Slider
                        value={filterOptions.price}
                        min={100}
                        max={500}
                        onChange={setPrice}
                    />
                </Row>
                <Row>
                    <Label>Garagens</Label>
                    {filterOptions.park === 1 ? <CheckBox active label='1' value={1} /> : <CheckBox onClick={() => {setPark(1)}} label='1' value={1} />}
                    {filterOptions.park === 2 ? <CheckBox active label='2' value={2} /> : <CheckBox onClick={() => {setPark(2)}} label='2' value={2} />}
                    {filterOptions.park === 3 ? <CheckBox active label='3' value={3} /> : <CheckBox onClick={() => {setPark(3)}} label='3' value={3} />}
                    {filterOptions.park === 4 ? <CheckBox active label='4' value={4} /> : <CheckBox onClick={() => {setPark(4)}} label='4' value={4} />}
                </Row>
            </Row>  
        </Body>
    );
}

export default Filter;