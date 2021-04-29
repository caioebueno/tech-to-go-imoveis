import styled from 'styled-components'

export const Col = styled.div `
    display: flex;
    flex-direction: column;
`

export const Row = styled.div `
    display: flex;
    flex-direction: row;
    width: 959px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`
export const Gallery = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`

export const GalleryImgsShort = styled.img`
    width: 110px;
    height: 62.15px;
    margin-top: 15px;
    margin-right: 10px;
`

export const GalleryImgBig = styled.img`
    width: 959px;
    height: 397px;
`
