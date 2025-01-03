import { useState } from "react";
import { LayoutGrid, List } from "lucide-react";
import WE from '../../../../Images/we.png';
import MOBILE from '../../../../Images/mobil.png';
import styles from "./ProjectList.module.css";

const projects = [
  {
    id: 1,
    name: "Strydd - Training App",
    description:
      "A training app that utilizes AI to help its users to perform workouts accurately, share their own workout videos, and explore workout videos from others.",
    image: WE,
    logo: MOBILE,
    category: "Mobile Apps",
  },
  {
    id: 2,
    name: "Enjoy - TV Movies App",
    description:
      "EnjoyTV is an advanced video controller for major streaming platforms. Simply connect your existing accounts from hulu, netflix, disney+, and more.",
    image: MOBILE,
    logo: WE,
    category: "TV Apps",
  },
  {
    id: 3,
    name: "Digcoach - Club Manager",
    description:
      "Digcoach helps clubs to manage its customers, coaches, the scheduling of appointments, the evaluation of customers and provides a detailed dashboard.",
    image: WE,
    logo: MOBILE,
    category: "Web Apps",
  },
];

function ProjectList() {
  const [viewType, setViewType] = useState("list");
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Mobile Apps", "Web Apps", "TV Apps"];

  const filteredProjects = projects.filter((project) =>
    activeFilter === "All" ? true : project.category === activeFilter
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.filters}>
          {filters.map((filter) => (
            <button
              key={filter}
              className={`${styles.filterButton} ${
                activeFilter === filter ? styles.active : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className={styles.viewToggle}>
          <span>List View</span>
          <button
            onClick={() => setViewType(viewType === "list" ? "grid" : "list")}
            className={styles.toggleButton}
            aria-label={`Switch to ${
              viewType === "list" ? "grid" : "list"
            } view`}
          >
            {viewType === "list" ? (
              <LayoutGrid size={20} />
            ) : (
              <List size={20} />
            )}
          </button>
          <span>Grid View</span>
        </div>
      </div>

      <div
        className={`${styles.projectsContainer} ${
          viewType === "grid" ? styles.gridView : ""
        }`}
      >
        {filteredProjects.map((project, index) => (
          <article
            key={project.id}
            className={`${styles.projectCard} ${
              index % 2 === 1 ? styles.even : ""
            }`}
          >
            <div className={styles.imageContainer}>
              <img
                src={project.image}
                alt={`${project.name} interface preview`}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <div className={styles.projectHeader}>
                <img
                  src={project.logo}
                  alt={`${project.name} logo`}
                  className={styles.logo}
                />
                <h2 className={styles.title}>{project.name}</h2>
              </div>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.category}>{project.category}</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
