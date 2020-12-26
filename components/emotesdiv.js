import styles from "./emotesdiv.module.css";
import EmotesGallery from "./emotesgallery";
import EmotesPricing from "./emotespricing";

export default function EmotesDiv(props) {
  return (
    <div className={styles.emotesdiv}>
      <h2>Emotes and Gifs</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <EmotesGallery styles={styles}/>
          </div>
          <div className="col-md-6">
            <EmotesPricing styles={styles}/>
          </div>
        </div>
      </div> 
      <br />
    </div>
  );
}
