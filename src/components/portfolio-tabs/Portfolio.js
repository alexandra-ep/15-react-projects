import { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

export default function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  const { company, dates, duties, title } = jobs[value];
  return (
    <div className="portfolio">
      <div className="portfolio__container">
        <div className="portfolio__container__title">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>
        <div className="portfolio__container__jobs">
          <div className="btn-container">
            {jobs.map((item, index) => {
              return (
                <button
                  key={item.id}
                  onClick={() => setValue(index)}
                  className={`job-btn ${index === value && "active-btn"}`}
                >
                  {item.company}
                </button>
              );
            })}
          </div>
          <div className="portfolio__container__jobs__info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div key={index} className="job-desc">
                  <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                  <p>{duty}</p>
                </div>
              );
            })}
          </div>
        </div>
        <button type="button" className="btn">
          more info
        </button>
      </div>
    </div>
  );
}
