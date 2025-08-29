import React, { useEffect, useState } from "react";


const API_KEY = "dde24cd2e72a4a48b7fd78dec3a2c47a";
const url = "https://api.ipgeolocation.io/v2/ipgeo?apiKey="

const UserLocation = () => {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const response = await fetch(`${url}${API_KEY}`);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setLocation(data);
                // console.log("Location Details:", data);

            } catch (err) {
                console.error("Error fetching location:", err);
                setError(err.message);
            }
        };

        fetchLocation();
    }, []);

    if (error) return <div>Error: {error}</div>;

    return (
        <div className="user-location">
            {location ? (
                <div className="location-content">
                    <p>IP: {location.ip} | </p>
                    <p>{location.location.city} | </p>
                    <p>{location.location.state_prov} | </p>
                    <p>{location.location.country_name} | </p>
                    <img src={location.location.country_flag} alt="country flag" />
                </div>
            ) : (
                <div>Loading location...</div>
            )}
        </div>
    );
};

export default UserLocation;
