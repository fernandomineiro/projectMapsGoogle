import React, { useEffect } from "react";
import { withScriptjs, withGoogleMap } from "react-google-maps";

import MapPage from "../pages/MapPage";

const Map = () => {
  const WrappedMap = withScriptjs(withGoogleMap(MapPage));
  return (
    <WrappedMap
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCVc5BV5f51pj4r0K3RhGy4EDVGFKyGfqo`}
      loadingElement={<div style={{ height: "100%" }} />}
      containerElement={<div style={{ height: "100%" }} />}
      mapElement={<div style={{ height: "100%" }} />}
    />
  );
};

export default Map;
