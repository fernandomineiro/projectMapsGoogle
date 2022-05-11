import React, { useState } from "react";
import { GoogleMap, Marker, InfoWindow } from "react-google-maps";
import City from "../services/City";

const MapPage = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [properties] = useState(City);

  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 51.23651480350905, lng: -0.5703780104611352 }}
    >
      {properties.map((property) => (
        <Marker
          key={property.id}
          position={{
            lat: property.lat,
            lng: property.lng,
          }}
          icon={{
            url: "https://i.imgur.com/FpHIBa7.png",
            scaledSize: new window.google.maps.Size(25, 25),
          }}
          onClick={() => {
            setSelectedProperty(property);
          }}
        />
      ))}

      {selectedProperty && (
        <InfoWindow
          position={{
            lat: selectedProperty.lat,
            lng: selectedProperty.lng,
          }}
          onCloseClick={() => {
            setSelectedProperty(null);
          }}
        >
          <div>
            <h4>{selectedProperty.name}</h4>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default MapPage;
