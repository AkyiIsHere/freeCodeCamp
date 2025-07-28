import styles from "./css/entry.module.css";

export default function Entry({ entry }) {
  return (
    <article className={styles.entryContainer}>
      <div className={styles.mainImgContainer}>
        <img
          className={styles.mainImg}
          src={entry.img.src}
          alt={entry.img.alt}
        />
      </div>

      <div className={styles.mainContent}>
        <img
          className={styles.locatorImg}
          src="./location.png"
          alt="map locator"
        />
        <span className={styles.country}>{entry.country}</span>
        <a href={entry.googleMapsLink} className={styles.googleMapsLink}>
          View on Google Maps
        </a>
        <h2 className={styles.locationTitle}>{entry.title}</h2>
        <span className={styles.date}>{entry.date}</span>
        <p className={styles.description}>{entry.text}</p>
      </div>
    </article>
  );
}
