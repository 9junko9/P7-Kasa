import { useState, useEffect } from "react";

function useFetchApartments() {
  const [apartments, setApartments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchApartments = async () => {
      try {
        const response = await fetch("locations.json");
        const data = await response.json();
        if (isMounted) {
          setApartments(data);
        }
      } catch (error) {
        console.error(error);
        if (isMounted) {
          setError("Unable to fetch apartments.");
        }
      }
    };

    fetchApartments();

    return () => {
      isMounted = false;
    };
  }, []);

  return { apartments, error };
}

export default useFetchApartments;
