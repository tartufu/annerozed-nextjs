import styles from "./herobanner.module.css";

export default function HeroBanner(props) {
  return (
    <div className={styles.herobanner}>
      <div className={styles.center}>
        <h1> Annerozed's </h1>
        <h1> Commission Land</h1>
        <br/>
        <a href="https://ko-fi.com/annerozed" target="_blank">
          <img className={styles.kofi} src="images/contact/kofi2.png" />
        </a>
      </div>
    </div>
  );
}
