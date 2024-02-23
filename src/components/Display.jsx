import styles from "../styles/Display.module.css";

const Display = () => {
  return (
    <>
      <div className={styles.display}></div>
      <div className={styles.textContainer}>
        <h1>Computer Engineering</h1>
        <p>142,765 Computer Engineers follow this</p>
      </div>
    </>
  );
};

export default Display;
