import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "./SelectLocation.css";

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});

function ShowLocation({ location }) {
    return (
        <div className="select-location__wrapper">
            <MapContainer center={[location.lat, location.lng]} zoom={20}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker
                    position={[location.lat, location.lng]}
                    icon={DefaultIcon}
                ></Marker>
            </MapContainer>
        </div>
    );
}

export default ShowLocation;
