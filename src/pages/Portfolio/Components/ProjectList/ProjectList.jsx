import { useState } from "react";
import { LayoutGrid, List } from "lucide-react";
import WE from "../../../../Images/aa.png";
import MOBILE from "../../../../Images/mr.png";
import PR from "../../../../Images/pr.png";
import RW from "../../../../Images/rw.png";
import TR from "../../../../Images/tr.png";
import R from "../../../../Images/r.png";
import F from "../../../../Images/f.png";
import G from "../../../../Images/g.png";
import styles from "./ProjectList.module.css";

const projects = [
  {
    id: 1,
    name: "E-Commerce Website for an Electronics Store",
    description:
      "This e-commerce website caters to an electronics store specializing in gadgets, accessories, and home appliances. The platform is built to handle a large inventory with detailed product descriptions, customer reviews, and comparison tools. It includes features like personalized recommendations, flash sales, and a loyalty program to enhance customer engagement. The website is optimized for fast loading speeds and mobile responsiveness, ensuring a smooth shopping experience across devices. Additionally, it integrates with third-party tools for email marketing and customer support.",
    image: WE,
    logo: MOBILE,
    category: "Web Apps",
  },
  {
    id: 2,
    name: "E-Commerce Website for a Fashion Brand",
    description:
      "This e-commerce platform is designed for a modern fashion brand, offering a seamless shopping experience for customers. The website features a clean, visually appealing design with high-quality product images, intuitive navigation, and a user-friendly interface. Key functionalities include product categorization, advanced search filters, a secure payment gateway, and integration with popular shipping providers. Customers can create accounts, save their favorite items, and track orders in real-time. The platform also includes an admin panel for inventory management, order processing, and sales analytics.",
    image: MOBILE,
    logo: WE,
    category: "Web Apps",
  },
  {
    id: 3,
    name: "Parking Management System",
    description:
      "This web-based parking management system simplifies the process of managing parking spaces for both administrators and users. The platform allows drivers to check real-time parking availability, reserve spots in advance, and make payments online. For parking lot operators, the system provides tools for monitoring occupancy, generating reports, and managing pricing plans. The website also includes a map integration feature to help users locate nearby parking facilities. With its user-friendly interface and robust backend, this system is ideal for urban areas or large parking complexes.",
    image: PR,
    logo: MOBILE,
    category: "Web Apps",
  },
  {
    id: 4,
    name: "Charity Crowdfunding Platform",
    description:
      "This web project is a crowdfunding platform specifically for charitable causes. It allows individuals and organizations to create fundraising campaigns, share their stories, and collect donations from supporters worldwide. The platform includes features like progress trackers, donor recognition, and social media integration to boost visibility. Users can browse through various campaigns, filter by category, and contribute securely through multiple payment methods. The website also provides analytics tools for campaign creators to monitor their progress and engage with donors effectively.",
    image: RW,
    logo: RW,
    category: "Web Apps",
  },
  // Mobile app
  {
    id: 5,
    name: "Train Booking App",
    description:
      "This mobile app simplifies the process of booking train tickets for travelers. Users can search for train routes, check availability, and book tickets in just a few taps. The app supports multiple payment options and sends e-tickets directly to the user's device. Additional features include real-time train status updates, seat selection, and the ability to cancel or modify bookings. The app also integrates a trip planner to help users find the best routes and schedules. With its intuitive design and fast performance, this app ensures a hassle-free travel experience.",
    image: TR,
    logo: RW,
    category: "Mobile Apps",
  },
  {
    id: 6,
    name: "Employee Management App",
    description:
      "This mobile app is tailored for businesses to streamline employee management tasks. It allows managers to track employee attendance, assign tasks, and monitor productivity. Employees can clock in and out, submit leave requests, and access their schedules directly from the app. The platform also includes a communication hub for team collaboration, file sharing, and announcements. For HR departments, the app provides tools for performance reviews, payroll management, and generating reports. The app is secure, scalable, and designed to improve efficiency in the workplace.",
    image: R,
    logo: R,
    category: "Mobile Apps",
  },
  {
    id: 7,
    name: "Smart Calendar App",
    description:
      "This mobile app is a powerful calendar tool designed to help users organize their personal and professional lives. It allows users to create events, set reminders, and sync their schedules across multiple devices. The app includes features like color-coding for different categories, recurring events, and a daily agenda view. It also integrates with other apps (e.g., email, task managers) to provide a centralized platform for managing time. A unique feature is the AI-powered assistant that suggests optimal times for meetings and tasks based on the user's habits. The app is designed to be visually appealing and highly customizable to suit individual preferences.",
    image: F,
    logo: F,
    category: "Mobile Apps",
  },
  {
    id: 8,
    name: "Fitness Tracker App",
    description:
      "This mobile app is designed to help users achieve their fitness goals by providing a comprehensive suite of tools. It includes features like workout plans, step tracking, calorie counting, and progress monitoring. Users can log their daily activities, set personalized goals, and receive reminders to stay on track. The app also integrates with wearable devices to sync data in real-time. Additional features include a community section for sharing achievements, video tutorials for exercises, and a nutrition guide. The app is designed with a sleek, user-friendly interface to motivate users and make fitness fun.",
    image: G,
    logo: G,
    category: "Mobile Apps",
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
                {/* <img
                  src={project.logo}
                  alt={`${project.name} logo`}
                  className={styles.logo}
                /> */}
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
