import { Facebook, Twitter, Instagram } from "lucide-react";
import styles from "./TeamSection.module.css";
import atalib from "../../../../Images/atalib.jpg";
import will from "../../../../Images/will.jpg";
import be from "../../../../Images/b.jpg";
import b from "../../../../Images/so.jpg";
import ous from "../../../../Images/ous.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Almousleck Atalib Ag",
    role: "DevOps & Cloud Engineer",
    image: atalib,
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 2,
    name: "Josip TITO-DENANGOWE",
    role: "ML-Software Engineer",
    image: b,
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 3,
    name: "Banda Willian",
    role: "Front End Developer",
    image: will,
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  
  {
    id: 4,
    name: "Ampouala Benjamin",
    role: "Mobile App Developer",
    image: be,
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 5,
    name: "Ousname Sangary",
    role: "BackEnd Developer",
    image: ous,
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  }
];

const TeamSection = () => {
  return (
    <section className={styles.teamSection}>
      <div className={styles.yellowAccent}></div>
      <div className={styles.container}>
        <h2 className={styles.title}>OUR PERFECT TEAM</h2>

        <div className={styles.teamGrid}>
          {teamMembers.map((member) => (
            <div key={member.id} className={styles.teamMember}>
              <div className={styles.imageWrapper}>
                <img
                  src={member.image}
                  alt={member.name}
                  className={styles.memberImage}
                />
              </div>
              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
                <p className={styles.memberDescription}>{member.description}</p>
                <div className={styles.socialLinks}>
                  <a href={member.social.facebook} aria-label="Facebook">
                    <Facebook size={20} />
                  </a>
                  <a href={member.social.twitter} aria-label="Twitter">
                    <Twitter size={20} />
                  </a>
                  <a href={member.social.instagram} aria-label="Instagram">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.yellowAccent}></div>
    </section>
  );
};

export default TeamSection;
