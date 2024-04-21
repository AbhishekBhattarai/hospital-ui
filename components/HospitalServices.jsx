// components/HomePage.js

import React from "react";
import HospitalServices from "./HospitalServices";

const HomePage = () => {
  // Dummy hospital data
  const hospitalData = {
    name: "Central City Hospital",
    address: "123 Main Street, Central City",
    phone: "555-123-4567",
    services: [
      "Emergency Care",
      "Cardiology",
      "Oncology",
      "Pediatrics",
      "Surgery",
    ],
  };

  return (
    <div className="bg-cover bg-center h-screen flex items-center justify-center">
      <HospitalServices services={hospitalData.services} />
    </div>
  );
};

export default HomePage;
