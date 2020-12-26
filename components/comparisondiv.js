import styles from "./comparisondiv.module.css";
import ComparisonCard from "./comparisoncard";

export default function ComparisonDiv(props) {
  
  let chibiCard = {
      title: "Chibi Works",
      pricingHeader: ['Grayscale', 'Color', 'Memes'],
      pricingBlurb: ['15 Usd, +12 USD per additional character', '21 USD, +18 USD per additional character', '21 USD per memer'],
      className: styles.comparisonCard
  }

  let emoteCard = {
      title: "Emotes and Gifs",
      pricingHeader: ['Bundle Pricing', 'Color', 'Memes'],
      pricingBlurb: ['15 Usd, +12 USD per additional character', '21 USD, +18 USD per additional character', '21 USD per memer'],
      className: styles.comparisonCardHighlight
  }

  let komaCard = {
      title: "4-Koma",
      pricingHeader: ['Grayscale', 'Color', 'Memes'],
      pricingBlurb: ['15 Usd, +12 USD per additional character', '21 USD, +18 USD per additional character', '21 USD per memer'],
      className: styles.comparisonCard
  }

  const cards = [chibiCard, emoteCard, komaCard];

  return (
    <div className={styles.comparisonDiv}>
      <h2> Price Comparisons </h2>
      <div className={`row ${styles.comparisonCards}`}>
        {cards.map((card) => 
            <ComparisonCard 
                title={card.title}
                pricingHeader={card.pricingHeader}
                pricingBlurb={card.pricingBlurb}
                className={card.className}
            />
        )}
      </div>
      <br />
    </div>
  );
}
