import styles from "./terms.module.css";
import TermYes from "./termyes";
import TermNo from "./termno";

export default function Terms(props) {
  return (
    <div className={styles.tos}>
        <h2> Terms and Conditions </h2>
        <div className="container">
        <div className="row">
          <TermYes styles={styles.tosYes}/>
          <TermNo styles={styles.tosNo}/>
        </div>
        </div>
        <br />
    </div>
  );
}
