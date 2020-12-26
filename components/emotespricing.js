export default function EmotesPricing(props) {
  return (
    <div>
      <h3>Emote Pricing</h3>
      <p> Redraw of Existing Emotes - 6USD</p>
      <p> Original Emotes - 12 USD</p>
      <p> Additional 12 USD for Gif Emotes</p>
      <br />

      <h3>Bundle Pricing</h3>
      <p> 5 Redraws of Existing Emotes - 28 USD</p>
      <p> 4 Original Emotes - 45 USD </p>
      <br />

      <h3> Special Requests </h3>
      <p>
        {" "}
        Depending on complexity of request, pricing will be adjusted and
        informed before start of payment. See below.
      </p>
      <br />
      <div className={props.styles.swordemote}>
        <img src="images/emotes/luluGSa.png" />
        <img src="images/emotes/luluGSb.png" />
        <img src="images/emotes/luluGSc.png" />
        <img src="images/emotes/luluGSd.png" />
      </div>
    </div>
  );
}
