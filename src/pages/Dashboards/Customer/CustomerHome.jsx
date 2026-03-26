import React, { useState } from "react";
import "./CustomerHome.css";

function CustomerHome() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [waterType, setWaterType] = useState("");

  const [filteredSources, setFilteredSources] = useState([]);
  const [selectedOwner, setSelectedOwner] = useState(null);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [bookingStatus, setBookingStatus] = useState("");

  // ✅ Cities & Areas
  const cityAreas = {
    Bangalore: ["Whitefield", "BTM", "Electronic City", "Yelahanka"],
    Hyderabad: ["Madhapur", "Gachibowli", "Kukatpally"],
    Chennai: ["T Nagar", "OMR", "Velachery"],
  };

  // ✅ More Owners Data
  const waterSources = [
    {
      id: 1,
      ownerName: "Ramesh Kumar",
      company: "Aqua Pure Tankers",
      phone: "9876543210",
      city: "Bangalore",
      area: "Whitefield",
      type: "Drinking",
      price: 500,
      drivers: [
        { id: 1, name: "Ravi", phone: "9000000001", available: true },
        { id: 2, name: "Suresh", phone: "9000000002", available: false },
      ],
    },
    {
      id: 2,
      ownerName: "Manoj Sharma",
      company: "Blue Water Supply",
      phone: "9876541111",
      city: "Bangalore",
      area: "Whitefield",
      type: "Drinking",
      price: 480,
      drivers: [
        { id: 3, name: "Kiran", phone: "9000000003", available: true },
      ],
    },
    {
      id: 3,
      ownerName: "Sandeep Reddy",
      company: "Fresh Water Supply",
      phone: "9876500000",
      city: "Bangalore",
      area: "BTM",
      type: "Drinking",
      price: 550,
      drivers: [
        { id: 4, name: "Mahesh", phone: "9000000004", available: true },
      ],
    },
    {
      id: 4,
      ownerName: "Arjun Rao",
      company: "Hydro Tankers",
      phone: "9876512345",
      city: "Hyderabad",
      area: "Madhapur",
      type: "Drinking",
      price: 600,
      drivers: [
        { id: 5, name: "Raju", phone: "9000000005", available: true },
      ],
    },
    {
      id: 5,
      ownerName: "Vikram",
      company: "Chennai Aqua",
      phone: "9876599999",
      city: "Chennai",
      area: "OMR",
      type: "Borewell",
      price: 350,
      drivers: [
        { id: 6, name: "Selva", phone: "9000000006", available: true },
      ],
    },
  ];

  // 🔍 Search
  const handleSearch = () => {
    if (!city || !area || !waterType) {
      alert("Please select all fields");
      return;
    }

    const results = waterSources.filter(
      (item) =>
        item.city === city &&
        item.area === area &&
        item.type === waterType
    );

    setFilteredSources(results);
    setSelectedOwner(null);
    setSelectedDriver(null);
    setBookingStatus("");
  };

  // 🚚 Driver Selection
  const handleDriverSelect = (driver) => {
    setSelectedDriver(driver);

    setTimeout(() => {
      setBookingStatus("Driver Accepted ✅");
    }, 1500);
  };

  return (
    <div className="customer-home">
      <h1>Welcome, {user?.name} 👋</h1>

      {/* 🔍 Search */}
      <div className="search-box">
        <select
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            setArea("");
          }}
        >
          <option value="">Select City</option>
          {Object.keys(cityAreas).map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <select value={area} onChange={(e) => setArea(e.target.value)}>
          <option value="">Select Area</option>
          {city &&
            cityAreas[city].map((a) => <option key={a}>{a}</option>)}
        </select>

        <select
          value={waterType}
          onChange={(e) => setWaterType(e.target.value)}
        >
          <option value="">Water Type</option>
          <option value="Drinking">Drinking</option>
          <option value="Borewell">Borewell</option>
        </select>

        <button onClick={handleSearch}>Search</button>
      </div>

      {/* 🏢 Owners */}
      <div className="results">
        {filteredSources.length > 0 ? (
          filteredSources.map((owner) => (
            <div
              key={owner.id}
              className="card"
              onClick={() => setSelectedOwner(owner)}
            >
              <h3>{owner.company}</h3>
              <p>👤 {owner.ownerName}</p>
              <p>📍 {owner.area}</p>
              <p>💰 ₹{owner.price}</p>
            </div>
          ))
        ) : (
          <p>No suppliers found</p>
        )}
      </div>

      {/* 📊 Owner Details */}
      {selectedOwner && (
        <div className="details">
          <h2>{selectedOwner.company}</h2>
          <p>👤 Owner: {selectedOwner.ownerName}</p>
          <p>📞 {selectedOwner.phone}</p>
          <p>💧 Type: {selectedOwner.type}</p>
          <p>💰 Price: ₹{selectedOwner.price}</p>

          <h3>Available Drivers 🚚</h3>

          {selectedOwner.drivers.filter(d => d.available).length > 0 ? (
            selectedOwner.drivers
              .filter((driver) => driver.available)
              .map((driver) => (
                <div key={driver.id} className="driver-card">
                  <p>👤 {driver.name}</p>
                  <p>📞 {driver.phone}</p>
                  <button onClick={() => handleDriverSelect(driver)}>
                    Select Driver
                  </button>
                </div>
              ))
          ) : (
            <p>No drivers available</p>
          )}
        </div>
      )}

      {/* 🚚 Driver Assigned */}
      {selectedDriver && (
        <div className="details">
          <h3>Driver Assigned 🚚</h3>
          <p>👤 {selectedDriver.name}</p>
          <p>📞 {selectedDriver.phone}</p>
        </div>
      )}

      {/* 📩 Booking Status */}
      {bookingStatus && (
        <div className="details success">
          <h3>{bookingStatus}</h3>
          <p>📩 Confirmation sent to your system</p>
          <p>🚛 Water is on the way...</p>
        </div>
      )}
    </div>
  );
}

export default CustomerHome;