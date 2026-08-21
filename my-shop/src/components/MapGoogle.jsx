import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const startPosition = {
    lat: 56.970975031,
    lng: 24.160427589,
};

function MapGoogle() {
    return (
        <APIProvider apiKey={API_KEY}>
            <Map
                defaultCenter={startPosition}
                defaultZoom={12}
                style={{ width: "500px", height: "190px" }}
            >
                <Marker position={startPosition} />
            </Map>
        </APIProvider>
    )
}
export default MapGoogle