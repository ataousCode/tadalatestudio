import React from "react";
import { FaThLarge, FaList } from "react-icons/fa";
import "./ViewToggle.css";

const ViewToggle = ({ viewType, setViewType }) => {
  return (
    <div className="view-toggle">
      <span className="view-label">View:</span>
      <button
        className={`toggle-button ${viewType === "list" ? "active" : ""}`}
        onClick={() => setViewType("list")}
        aria-label="List view"
      >
        <FaList />
      </button>
      <button
        className={`toggle-button ${viewType === "grid" ? "active" : ""}`}
        onClick={() => setViewType("grid")}
        aria-label="Grid view"
      >
        <FaThLarge />
      </button>
    </div>
  );
};

export default ViewToggle;
