import React from 'react'

// STYLED COMPONENTS
import { Title, Center, Header,
    Container, Main, Col, Row,
    Subtitle, Description, SaleItemContainer,
    SaleTab,
} from './styles'

// COMPONENTS IMPORT
import SearchBar from '@/components/searchBar'
import Navbar from '@/components/navbar'
import Button from '@/components/button'
import SaleItem from '@/components/saleItem'

function Home(props) {
    return (
        <Container>
            <Header>
                <Navbar transparent />
                <Center>
                    <Title>
                        Algum Titulo Pra <br />
                        Chamar Atencao.
                    </Title>
                    <SearchBar />
                </Center>
            </Header>
            <Main>
                <Row spaceBetween>
                    <Col>
                        <Subtitle>Imoveis De Destaque</Subtitle>
                        <Description>Alguma descricao aqui alguma coisa, nao sei oque. Olhe as melhores oportunidades.</Description>
                    </Col>
                    <Button 
                        title='Ver todos imoveis'
                        backgroundColor='#DDE8F6'
                        color='#0056DA'
                    />
                </Row>
                <Row>
                    <SaleTab active >Casas</SaleTab>
                    <SaleTab margin >Apartamentos</SaleTab>
                    <SaleTab>Terrenos</SaleTab>
                </Row>
                <SaleItemContainer>
                    <SaleItem 
                        price={1000000}
                        title='Casa na rua do mar'
                        address='Rua 115 a1'
                        area={420}
                        bedroom={2}
                        bathroom={2}
                        image='https://res.cloudinary.com/duajhdher/image/upload/v1608253988/ndkxrnplj9v59jqq90yp.jpg'
                    />
                    <SaleItem 
                        price={1000000}
                        title='Casa na rua do mar'
                        address='Rua 115 a1'
                        area={420}
                        bedroom={2}
                        bathroom={2}
                        image='https://res.cloudinary.com/duajhdher/image/upload/v1608253988/ndkxrnplj9v59jqq90yp.jpg'
                    />
                    <SaleItem 
                        price={1000000}
                        title='Casa na rua do mar'
                        address='Rua 115 a1'
                        area={420}
                        bedroom={2}
                        bathroom={2}
                        image='https://res.cloudinary.com/duajhdher/image/upload/v1608253988/ndkxrnplj9v59jqq90yp.jpg'
                        end
                    />
                    <SaleItem 
                        price={1000000}
                        title='Casa na rua do mar'
                        address='Rua 115 a1'
                        area={420}
                        bedroom={2}
                        bathroom={2}
                        image='https://res.cloudinary.com/duajhdher/image/upload/v1608253988/ndkxrnplj9v59jqq90yp.jpg'
                    />
                    <SaleItem 
                        price={1000000}
                        title='Casa na rua do mar'
                        address='Rua 115 a1'
                        area={420}
                        bedroom={2}
                        bathroom={2}
                        image='https://res.cloudinary.com/duajhdher/image/upload/v1608253988/ndkxrnplj9v59jqq90yp.jpg'
                    />
                    <SaleItem 
                        price={1000000}
                        title='Casa na rua do mar'
                        address='Rua 115 a1'
                        area={420}
                        bedroom={2}
                        bathroom={2}
                        image='https://res.cloudinary.com/duajhdher/image/upload/v1608253988/ndkxrnplj9v59jqq90yp.jpg'
                    />
                </SaleItemContainer>
            </Main>
        </Container>
    )
}

export default Home