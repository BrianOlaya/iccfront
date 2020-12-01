import L from 'leaflet'

export const IconLocation = L.icon ({
    iconUrl: require("../../images/location.svg"),
    iconRetinaUrl: require("../../images/location.svg"),
    iconAnchor: null,
    shadowUrl:null,
    shadowSize:null,
    shadowAnchor:null,
    iconSize:[35, 35],
    className:"leaflet-venue-icon"
});
