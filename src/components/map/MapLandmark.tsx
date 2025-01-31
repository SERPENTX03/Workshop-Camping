"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

// Dynamic import for MapContainer and other Leaflet components
const MapWithNoSSR = dynamic(
  () => import("./MapComponent"), // แยก Map Component ไปอีกไฟล์
  {
    ssr: false, // ไม่ใช้ Server-side rendering
    loading: () => <p>Loading Map...</p>,
  }
);

type LocationType = {
  lat: number;
  lng: number;
};

const MapLandmark = ({
  Location,
}: {
  Location?: LocationType;
}) => {
  const defaultLocation: [number, number] = [14, 105.5];
  const [position, setPosition] = useState<[number, number] | null>(null);

  return (
    <>
      <h1 className="font-semibold">Where Are You?</h1>
      <input type="hidden" name="lat" value={position ? position[0] : ""} />
      <input type="hidden" name="lng" value={position ? position[1] : ""} />
      <div className="h-[30vh] rounded-xl z-0 relative">
        <MapWithNoSSR 
          Location={Location} 
          defaultLocation={defaultLocation}
          position={position}
          setPosition={setPosition}
        />
      </div>
    </>
  );
};

export default MapLandmark;