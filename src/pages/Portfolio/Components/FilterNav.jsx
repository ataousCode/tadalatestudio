import React from "react";
import "./FilterNav.css";

const FilterNav = ({ activeFilter, setActiveFilter }) => {
  const filters = [
    { id: "all", label: "All" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "web", label: "Web Apps" },
    { id: "tv", label: "TV Apps" },
  ];

  return (
    <div className="filter-nav">
      {filters.map((filter) => (
        <button
          key={filter.id}
          className={`filter-button ${
            activeFilter === filter.id ? "active" : ""
          }`}
          onClick={() => setActiveFilter(filter.id)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default FilterNav;
