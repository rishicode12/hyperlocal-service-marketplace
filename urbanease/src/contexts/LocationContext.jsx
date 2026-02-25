import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "urbanease:selectedLocation";

const defaultLocation = { city: "Delhi", state: "New Delhi", country: "INDIA" };

const LocationContext = createContext({
  location: defaultLocation,
  setLocation: () => {},
  display: "Delhi, IN",
});

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : defaultLocation;
    } catch {
      return defaultLocation;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(location));
    } catch {}
  }, [location]);

  const display = useMemo(() => {
    if (!location) return "Select location";
    const parts = [location.city, location.state].filter(Boolean);
    return parts.join(", ");
  }, [location]);

  const value = useMemo(
    () => ({ location, setLocation, display }),
    [location, display]
  );

  return (
    <LocationContext.Provider value={value}>{children}</LocationContext.Provider>
  );
};

export const useLocationContext = () => useContext(LocationContext);

