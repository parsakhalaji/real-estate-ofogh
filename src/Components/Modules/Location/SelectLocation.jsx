import { MapContainer, TileLayer } from "react-leaflet";

function SelectLocation() {
    return (
        <div className="select-location__wrapper">
            <MapContainer center={[35.6892, 51.389]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </MapContainer>
        </div>
    );
}

export default SelectLocation;
