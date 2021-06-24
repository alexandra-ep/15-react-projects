import { useState, useEffect } from "react";
import { Loading } from "./Loading";
import { Tours } from "./Tours";

const url = "https://course-api.com/react-tours-project";

export default function ToursPage() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  // Remove tour
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  // Fetch tours
  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if(tours.length === 0) {
    return (
      <div className="no-tours">
        <h2>No tours left</h2>
        <button className="no-tours-btn" onClick={fetchTours}>Refresh</button>
      </div>
    )
  }

  return (
    <section className="tours">
      <Tours tours={tours} removeTour={removeTour} />
    </section>
  );
}
