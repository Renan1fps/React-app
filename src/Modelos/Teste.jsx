import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export function Teste(){

  const defaultProps = {
    center: {
      lat: -22.814261,
      lng: -47.032705
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '700px', width: '500px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={-22.814261}
          lng={-47.032705}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}