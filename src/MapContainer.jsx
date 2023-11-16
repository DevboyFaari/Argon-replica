import React, { useEffect } from "react";
import { useState } from "react";
import "./MapContainer.css";
import LoadingSpinner from "./LoadingSpinner";

const MapContainer = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <div className="map">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d126834.05801193304!2d3.3521664!3d6.5765376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1698952974642!5m2!1sen!2sng"
          width="1010"
          height="850"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      )}
    </div>
  );
};

export default MapContainer;
