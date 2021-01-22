import React, { useState } from 'react'

// STYLED COMPONENTS
import {
    Body, Input, Row, IconContainer,
    ButtonContainer, VerticalLine,
    Tab,
} from './styles'

// REACT ICONS
import { RiSearchLine } from 'react-icons/ri'
import { BiFilter } from 'react-icons/bi'

// COMPONENTS IMPORT
import Button from '../button'
import Filter from '../filter'

function SearchBar(props) {
        const [tab, setTab] = useState(0)
        const [showFilter, setShowFilter] = useState(false)

        return (
            <Body>
                <Row>
                    {tab === 0 ? <Tab active >Comprar</Tab> : <Tab onClick={() => {setTab(0)}} >Comprar</Tab>}
                    {tab === 1 ? <Tab active>Alugar</Tab> : <Tab onClick={() => {setTab(1)}} >Alugar</Tab>}
                </Row>
                <Row>
                    <IconContainer>
                        <RiSearchLine size={20} style={{ marginBottom: -3 }} color='#ACB4BB' />
                    </IconContainer>
                    <Input
                        placeholder='Procure por bairo, cidade, endereco...'

                    />
                    <ButtonContainer>
                        <VerticalLine />
                        <button
                            onClick={() => {
                                setShowFilter(!showFilter)
                            }}
                        >
                            <BiFilter size={30} style={{marginLeft: 18, marginRight: 18}} color='#ACB4BB' />
                        </button>
                        <Button 
                            title='Pesquisar'
                        />
                    </ButtonContainer>
                </Row>
                {showFilter && <Filter />}
            </Body>
        )
    }

export default SearchBar