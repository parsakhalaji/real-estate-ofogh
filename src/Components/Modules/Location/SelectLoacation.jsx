import { MapContainer, TileLayer } from "react-leaflet";

function SelectLocation() {
    return (
        <MapContainer center={[35.6892, 51.389]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>
    );
}

export default SelectLocation;
