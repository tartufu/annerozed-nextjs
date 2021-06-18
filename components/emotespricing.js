export default function EmotesPricing(props) {
  return (
    <div>
      <h3>Emote Pricing</h3>
      <p> Redraw of Existing Emotes - <strong>8 USD</strong> </p>
      <p> Original Emotes - <strong>16 USD</strong></p>
      <p> Additional <strong>12 USD</strong> for Gif Emotes</p>
      <br />

      <h3>Bundle Pricing</h3>
      <p> 4 Redraws of Existing Emotes - <strong>28 USD</strong></p>
      <p> 5 Original Emotes - <strong>70 USD</strong> </p>
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
