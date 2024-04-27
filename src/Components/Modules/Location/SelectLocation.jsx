import { MapContainer, TileLayer } from "react-leaflet";
import "./SelectLocation.css";
import LocationMarker from "./LocationMarker";
import { useContext } from "react";
import LocationContext from "../../../Contexts/Location/LocationContext";

function SelectLocation({ centerLocation }) {
    const { location } = useContext(LocationContext);
    return (
        <div className="select-location__wrapper">
            <MapContainer
                center={
                    centerLocation
                        ? centerLocation
                        : [location.lat, location.lng]
                }
                zoom={13}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <LocationMarker />
            </MapContainer>
        </div>
    );
}

export default SelectLocation;
