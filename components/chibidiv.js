import styles from "./chibidiv.module.css";
import ChibiDivCard from "./chibidivcard";

export default function ChibiDiv(props) {
  return (
    <div className={styles.chibidiv}>
      <h2> Chibi Works</h2>
      <div className="container">
        <div className="row">
          <ChibiDivCard
            header="Grayscale"
            imgSrc="/images/chibi/chibi-gray.png"
            desc1="15 USD"
            desc2="+12 USD per additional character"
          />
          <ChibiDivCard
            header="Colored"
            imgSrc="/images/chibi/chibi-color.png"
            desc1="21 USD per head"
            desc2="+18 USD per additional character"
          />
          <ChibiDivCard
            header="Memes"
            imgSrc="/images/chibi/chibi-meme.png"
            desc1="Gameplay parodies and roleplays are great too!"
            desc2="21 USD per memer "
          />
        </div>
      </div>
    </div>
  );
}
