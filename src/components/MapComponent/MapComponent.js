// import React, { useEffect, useRef } from 'react';

// const MapComponent = ({ locations }) => {
//   const mapRef = useRef(null);

//   useEffect(() => {
//     const map = new window.google.maps.Map(mapRef.current, {
//       zoom: 10,
//       center: locations[0],
//     });

//     const directionsService = new window.google.maps.DirectionsService();
//     const directionsRenderer = new window.google.maps.DirectionsRenderer();

//     directionsRenderer.setMap(map);

//     const waypoints = locations.slice(1, locations.length - 1).map(location => ({
//       location: location,
//       stopover: true,
//     }));

//     directionsService.route(
//       {
//         origin: locations[0],
//         destination: locations[locations.length - 1],
//         waypoints: waypoints,
//         optimizeWaypoints: true,
//         travelMode: window.google.maps.TravelMode.DRIVING,
//       },
//       (result, status) => {
//         if (status === window.google.maps.DirectionsStatus.OK) {
//           directionsRenderer.setDirections(result);
//         } else {
//           console.error("Error",status);
//         }
//       }
//     );
//   }, [locations]);

//   return <div ref={mapRef} style={{ width: '100%', height: '100%' }} />;
// };

// export default MapComponent;



import React, { useEffect, useRef } from 'react';



const MapComponent = ({ locations }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      zoom: 10,
      center: locations[0],
    });

    const directionsService = new window.google.maps.DirectionsService();
    const directionsRenderer = new window.google.maps.DirectionsRenderer();

    directionsRenderer.setMap(map);

    const waypoints = locations.slice(1, locations.length - 1).map(location => ({
      location: location,
      stopover: true,
    }));

    
    directionsService.route(
      {
        origin: locations[0],
        destination: locations[locations.length - 1],
        waypoints: waypoints,
        optimizeWaypoints: true,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(result);
        } else {
          console.error("Error",status);
        }
      }
    );
  }, [locations]);

  return <div ref={mapRef} style={{ width: '100%', height: '100vh' }} />;
};

export default MapComponent;