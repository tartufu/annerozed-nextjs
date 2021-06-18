export default function ComparisonCard(props) {

    let cardDetails = [props.pricingHeader, props.pricingBlurb];

    function zip(arrays) {
        return arrays[0].map(function(_,i){
            return arrays.map(function(array){return array[i]})
        });
    }
    // https://www.semicolonworld.com/question/42960/javascript-equivalent-of-python-s-zip-function

    cardDetails = zip(cardDetails);
    console.log("aasdasd", cardDetails)
  return (
    <div className={`${props.colWidth} ${props.className}`}>
      <h3> {props.title}</h3>
      {cardDetails.map((cardDetail) => 
      <>
        {cardDetail.map((card) => 
            <p>{card}</p>
        )}
        </>
      )}
    </div>
  );
}
