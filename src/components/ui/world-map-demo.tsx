"use client";

import { WorldMap } from "./world-map";
import { motion } from "framer-motion";

export function WorldMapDemo() {
  return (
    <div className="w-full">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
          Global <span className="text-transparent bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text">Connectivity</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We work with clients from place to place, delivering exceptional digital solutions.
    
        </p>
      </div>
      <WorldMap
        dots={[
          {
            start: {
              lat: 27.7172,
              lng: 85.3240,
            }, // Kathmandu, Nepal
            end: {
              lat: 40.7128,
              lng: -74.0060,
            }, // New York, USA
          },
          {
            start: { lat: 27.7172, lng: 85.3240 }, // Kathmandu, Nepal
            end: { lat: 51.5074, lng: -0.1278 }, // London, UK
          },
          {
            start: { lat: 27.7172, lng: 85.3240 }, // Kathmandu, Nepal
            end: { lat: -33.8688, lng: 151.2093 }, // Sydney, Australia
          },
          {
            start: { lat: 27.7172, lng: 85.3240 }, // Kathmandu, Nepal
            end: { lat: 35.6762, lng: 139.6503 }, // Tokyo, Japan
          },
          {
            start: { lat: 27.7172, lng: 85.3240 }, // Kathmandu, Nepal
            end: { lat: 1.3521, lng: 103.8198 }, // Singapore
          },
          {
            start: { lat: 27.7172, lng: 85.3240 }, // Kathmandu, Nepal
            end: { lat: 25.2048, lng: 55.2708 }, // Dubai, UAE
          },
        ]}
        lineColor="#2A9D8F"
      />
    </div>
  );
}
