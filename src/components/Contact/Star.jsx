import starFilled from "../img/star-filled.png";
import starEmpty from "../img/star-empty.png";
import styles from "../css/contact.module.css";

export default function Star({ isFilled, handleClick }) {
  let starIcon = isFilled ? starFilled : starEmpty;

  return (
    <button
      onClick={handleClick}
      aria-pressed={isFilled}
      aria-label={isFilled ? "Remove from favourites" : "Add to Favourites"}
      className={styles.favoriteButton}
    >
      <img
        src={starIcon}
        alt={isFilled ? "filled star icon" : "empty star icon"}
        className={styles.favorite}
      />
    </button>
  );
}
