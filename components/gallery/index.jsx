import React, { useState } from 'react';

import Images from './images'

import { Row, Gallery, GalleryImgBig, GalleryImgsShort } from './styles'


function index(props) {

    const [selectedImg, setSelectedImg] = useState({ img: Images[0], index: 0 });


    return (
        <>
            <Gallery>
                <GalleryImgBig alt='Selected' src={selectedImg.img} />
                <Row>
                    {Images.map((img, index) => (
                        <GalleryImgsShort alt='' src={img} onClick={() => setSelectedImg({ img, index })} style={{
                            border: selectedImg.index === index ? "1px solid #ffffff" : ""
                        }} />
                    ))}
                </Row>
            </Gallery>
        </>
    );
}

export default index;