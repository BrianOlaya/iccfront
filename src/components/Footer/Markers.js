import React from 'react';
import {Marker} from 'react-leaflet';
import {IconLocation} from './IconLocation'

const Markers = () => {
    return (
        <Marker position={{lat:'6.183456', lng: '-75.596029'}} icon={IconLocation}/>
    )
}

export default Markers
