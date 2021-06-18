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
      pricingHeader: ['Emote Pricing', 'Bundle Pricing', 'Special Requests '],
      pricingBlurb: ['redraw 8USD, orignal 16USD, gif additional 12USD', '4 redraws 28USD, 5 Original 70USD', 'Subject to complexity of request'],
      className: styles.comparisonCardHighlight
  }

  let komaCard = {
      title: "4-Koma",
      pricingHeader: ['Grayscale', 'Color', 'Memes'],
      pricingBlurb: ['15 Usd, +12 USD per additional character', '21 USD, +18 USD per additional character', '21 USD per memer'],
      className: styles.comparisonCard
  }

  const cards = [emoteCard, chibiCard];
  const colWidth = `col-md-${(12 /cards.length)}`;

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
                colWidth={colWidth}
            />
        )}
      </div>
      <br />
    </div>
  );
}
