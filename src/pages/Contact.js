import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const socialMediaData = [
  {
    name: "Facebook",
    icon: faFacebook,
    url: "https://www.facebook.com/your-profile",
  },
  { name: "Twitter", icon: faTwitter, url: "https://twitter.com/your-profile" },
  {
    name: "LinkedIn",
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/your-profile",
  },
  {
    name: "Instagram",
    icon: faInstagram,
    url: "https://www.instagram.com/in/your-profile",
  },
];

const Contact = () => {
  return (
    <div style={styles.container}>
      <h2>Contact Me</h2>
      <p>Email: vanessaigwe1@gmail.com</p>
      <p>Phone: +237 6 53 07 23 08</p>

      <h3>Follow Me On Social Media</h3>
      <div className="social-icons" style={styles.socialIcons}>
        {socialMediaData.map(({ name, icon, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
          >
            <FontAwesomeIcon beat icon={icon} size="2x" />
          </a>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #FF5964",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    marginTop: "120px",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "20px",
  },
  iconLink: {
    color: "#FF5964",
    textDecoration: "none",
    transition: "color 0.3s ease-in-out",
  },
};

export default Contact;
