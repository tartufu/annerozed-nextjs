import styles from "./komadiv.module.css";
import KomaGallery from "./komagallery";
import KomaPricing from "./komapricing";

export default function KomaDiv(props) {
  return (
    <div className={styles.komaDiv}>
        <h2> 4-Koma</h2>
        <div className={`row ${styles.komaDivContainer}`}>
            <KomaGallery />
            <KomaPricing />
        </div>
        <br />
    </div>
  );
}
