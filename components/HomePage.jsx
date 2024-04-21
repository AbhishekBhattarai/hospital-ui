"use client";
import React, { useState } from "react";

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

  // Dummy image sections data
  const imageSections = [
    {
      image: "/img 1.jpg",
      title: "Emergency Care",
      doctor: "Dr. John Doe",
      description:
        "Our emergency department is open 24/7 to provide urgent medical care.",
    },
    {
      image: "/img 2.jpg",
      title: "Cardiology",
      doctor: "Dr. Jane Smith",
      description:
        "Our cardiology department offers comprehensive heart care services.",
    },
    {
      image: "/img 3.jpg",
      title: "Oncology",
      doctor: "Dr. Michael Johnson",
      description:
        "We provide advanced cancer treatments and compassionate care for our patients.",
    },
    {
      image: "/img_5.jpg",
      title: "Pediatrics",
      doctor: "Dr. Sarah Williams",
      description:
        "Our pediatric department is dedicated to providing specialized care for children.",
    },
    {
      image: "/img_6.jpg",
      title: "Surgery",
      doctor: "Dr. Robert Brown",
      description:
        "Our surgical team performs a wide range of procedures using the latest techniques and equipment.",
    },
  ];

  // State to manage popup visibility
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // State to manage selected appointment data
  const [selectedAppointment, setSelectedAppointment] = useState({
    doctor: "",
    time: "",
    day: "",
    name: "",
    email: "",
    phoneNumber: "",
  });

  // State to manage success message visibility
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  // Function to toggle popup visibility
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
    setSuccessMessageVisible(false); // Hide success message when opening the popup
  };

  // Function to handle input change for appointment information
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSelectedAppointment({
      ...selectedAppointment,
      [name]: value,
    });
  };

  // Function to handle appointment booking
  const handleBooking = () => {
    // Perform appointment booking logic here
    // For demonstration purposes, just logging the appointment data
    console.log("Booking appointment...");
    console.log("Appointment Data:", selectedAppointment);
    // Show success message
    setSuccessMessageVisible(true);
    // Close the popup after a delay
    setTimeout(() => {
      togglePopup();
    }, 2000); // Adjust the delay as needed
  };

  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/mainpage.jpg')",
        backgroundOpacity: 0.5,
      }}
    >
      <div className="container mx-10 px-5 py-8 bg-white bg-opacity-75 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Welcome to {hospitalData.name}
        </h1>
        <p className="text-lg mb-6 text-center">
          Providing exceptional healthcare services to our community.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {imageSections.map((section, index) => (
            <ImageSectionCard
              key={index}
              section={section}
              togglePopup={togglePopup}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={togglePopup}
            className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600"
          >
            Book an Appointment
          </button>
        </div>
      </div>

      {isPopupOpen && (
        <AppointmentPopup
          selectedAppointment={selectedAppointment}
          handleInputChange={handleInputChange}
          handleBooking={handleBooking}
          togglePopup={togglePopup}
        />
      )}

      {successMessageVisible && (
        <SuccessMessage onClose={() => setSuccessMessageVisible(false)} />
      )}
    </div>
  );
};

const ImageSectionCard = ({ section, togglePopup }) => {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <img
        src={section.image}
        alt={section.title}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
        <p className="text-gray-600 mb-2">Doctor: {section.doctor}</p>
        <p>{section.description}</p>
        <button
          onClick={() => togglePopup(section)}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

const AppointmentPopup = ({
  selectedAppointment,
  handleInputChange,
  handleBooking,
  togglePopup,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
        <h2 className="text-2xl font-bold mb-4">Book an Appointment</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label
              htmlFor="doctor"
              className="block text-gray-700 font-semibold mb-1"
            >
              Choose a Doctor:
            </label>
            <select
              id="doctor"
              name="doctor"
              value={selectedAppointment.doctor}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            >
              <option value="">Select</option>
              <option value="Dr. John Doe">Dr. John Doe</option>
              <option value="Dr. Jane Smith">Dr. Jane Smith</option>
              <option value="Dr. Michael Johnson">Dr. Michael Johnson</option>
              <option value="Dr. Sarah Williams">Dr. Sarah Williams</option>
              <option value="Dr. Robert Brown">Dr. Robert Brown</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="time"
              className="block text-gray-700 font-semibold mb-1"
            >
              Choose a Time:
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={selectedAppointment.time}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="day"
              className="block text-gray-700 font-semibold mb-1"
            >
              Choose a Day:
            </label>
            <input
              type="date"
              id="day"
              name="day"
              value={selectedAppointment.day}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-1"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={selectedAppointment.name}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-1"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={selectedAppointment.email}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-gray-700 font-semibold mb-1"
            >
              Phone Number:
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={selectedAppointment.phoneNumber}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button" // Ensure it's not a form submission
              onClick={togglePopup} // Bind togglePopup function
              className="text-gray-500 hover:text-gray-700 mr-4"
            >
              Cancel
            </button>
            <button
              onClick={handleBooking}
              className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600"
            >
              Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const SuccessMessage = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-green-500 bg-opacity-75 z-50">
      <div className="bg-white p-4 rounded-md shadow-md max-w-md">
        <p className="text-2xl font-bold text-green-800">Success!</p>
        <p className="text-green-800">Appointment booked successfully.</p>
        <button
          onClick={onClose}
          className="bg-green-700 text-white px-4 py-2 rounded-md mt-4"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default HomePage;
