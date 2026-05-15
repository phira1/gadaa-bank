import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const ContactMap = ({ refProp, controls, slideInRight }) => {
  const latitude = 8.9812552;
  const longitude = 38.762526;

  const mapLinkUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

  return (
    <motion.div
      ref={refProp}
      initial="hidden"
      animate={controls}
      variants={slideInRight}
      className="bg-white rounded-2xl md:rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      {/* Header */}
      <div className="p-4 md:p-6 border-b border-gray-100">
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 md:mb-3 flex items-center">
          <FaMapMarkerAlt className="text-red-600 mr-2 md:mr-3" />
          Find Us on Map
        </h3>

        <p className="text-gray-700 text-xs md:text-sm lg:text-base leading-relaxed">
          Gadaa Bank Head Office – Gotera, Kirkos SubCity W-03,
          HNo-#745, Addis Ababa, Ethiopia
        </p>
      </div>

      {/* Map */}
      <div className="relative h-[22rem] md:h-[28rem] lg:h-[34rem] xl:h-[38rem] overflow-hidden bg-gray-100">
        <MapContainer
          center={[latitude, longitude]}
          zoom={16}
          scrollWheelZoom={false}
          className="absolute inset-0 z-0 h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[latitude, longitude]}>
            <Popup>
              Gadaa Bank Head Office
              <br />
              Gotera, Kirkos SubCity W-03
            </Popup>
          </Marker>
        </MapContainer>

        {/* Badge */}
        <div className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1.5 text-[11px] md:text-xs font-semibold text-gray-700 shadow-md ring-1 ring-black/5 z-10">
          Interactive Map
        </div>

        {/* Open Maps Button */}
        <a
          href={mapLinkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 right-3 rounded-full bg-white/95 px-4 py-2 text-xs md:text-sm font-semibold text-red-600 shadow-md ring-1 ring-black/5 transition-all duration-200 hover:bg-white hover:shadow-lg z-10"
        >
          Open in Maps
        </a>

        {/* Footer Label */}
        <div className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1.5 text-[10px] md:text-xs text-gray-600 shadow-md ring-1 ring-black/5 z-10">
          Interactive Google Map
        </div>
      </div>
    </motion.div>
  );
};

export default ContactMap;