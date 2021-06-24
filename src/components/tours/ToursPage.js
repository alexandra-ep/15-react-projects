import { useState, useEffect } from "react";
import { Loading } from "./Loading";
import { Tours } from "./Tours";

const url = "https://course-api.com/react-tours-project";

export default function ToursPage() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

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
    return (
      <section>
        <Loading />
      </section>
    );
  }

  return (
    <section className="tours">
      <Tours tours={tours} />
    </section>
  );
}
