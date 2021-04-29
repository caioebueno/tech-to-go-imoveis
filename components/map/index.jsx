import React from 'react';
import { ContainerMap, TitleMap, Mapa } from './styles'

import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'

function Map() {
    return (
        <GoogleMap defaultZoom={15} defaultCenter={{ lat: -27.1398, lng: -48.5957 }}>

            <Marker
                position={{ lat: -27.1398, lng: -48.5957 }}
            />

        </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function index() {
    return (
        <>
            <ContainerMap>
                <TitleMap>
                    Localização
                </TitleMap>

                <Mapa>
                    <WrappedMap
                        AIzaSyDgJyQWIPMTI9xTy9ZPThCa21pJji0hHlw
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDn8BY-O_tb05UhDXsCCiYbAzmYvQ2VcJg&v=3.exp&libraries=geometry,drawing,places`}
                        loadingElement={<div style={{ height: '100%' }} />}
                        containerElement={<div style={{ height: '100%' }} />}
                        mapElement={<div style={{ height: '100%' }} />}
                    />
                </Mapa>
            </ContainerMap>
        </>
    );
}


export default index;