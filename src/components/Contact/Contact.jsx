import React from "react";
import avatar from "../img/user.png";
import styles from "..//css/contact.module.css";

import Star from "./Star";

export default function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });

  function toggleFavorite() {
    setContact((prevContact) => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite,
    }));
  }

  return (
    <main>
      <article className={styles.card}>
        <img
          src={avatar}
          className={styles.avatar}
          alt="User profile picture of John Doe"
        />
        <div className={styles.info}>
          <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
          <h2 className={styles.name}>
            {contact.firstName} {contact.lastName}
          </h2>
          <p className={styles.contact}>{contact.phone}</p>
          <p className={styles.contact}>{contact.email}</p>
        </div>
      </article>
    </main>
  );
}
