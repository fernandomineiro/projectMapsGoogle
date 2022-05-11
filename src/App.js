import React from "react";
import "./stylesheet.css";
import Map from "./components/Map";

function App() {
    return (
        <div id="mapContainer">
            <div id="mapClipPath">
                <Map />
            </div>
        </div>
    )
}

export default App;