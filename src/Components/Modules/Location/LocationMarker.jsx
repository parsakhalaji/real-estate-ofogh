import React, { useContext } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import LocationContext from "../../../Contexts/Location/LocationContext";

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});

function LocationMarker() {
    const { location, setLocation } = useContext(LocationContext);

    const map = useMapEvents({
        click: (event) => {
            const { lat, lng } = event.latlng;
            setLocation({ lat, lng });
        },
    });

    return location === null ? null : (
        <Marker position={[location.lat, location.lng]} icon={DefaultIcon}>
            <Popup>You are here</Popup>
        </Marker>
    );
}

export default LocationMarker;
