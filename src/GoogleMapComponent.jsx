import React, { useEffect, useRef } from "react";

function GoogleMapComponent() {
  const mapRef = useRef(null); 

  useEffect(() => {
    const loadGoogleMaps = () => {
      return new Promise((resolve, reject) => {
        if (window.google && window.google.maps) {
          resolve(window.google.maps);
        } else {
          const script = document.createElement("script");
          script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&v=weekly`;
          script.async = true;
          script.onload = () => resolve(window.google.maps);
          script.onerror = () => reject(new Error("Google Maps API failed to load"));
          document.head.appendChild(script);
        }
      });
    };

    const initializeMap = async () => {
      try {
        const googleMaps = await loadGoogleMaps();
        if (mapRef.current) {
          new googleMaps.Map(mapRef.current, {
            center: { lat: 37.7749, lng: -122.4194 }, 
            zoom: 10,
          });
        }
      } catch (error) {
        console.error("Error loading Google Maps:", error);
      }
    };

    initializeMap();
  }, []);

  return (
    <div>
      <div id="map" ref={mapRef} className="w-full h-[300px] md:w-[full] md:h-[350px] lg:w-[100%] lg:h-[400px]"></div>
    </div>
  );
}

export default GoogleMapComponent;
