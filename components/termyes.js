export default function TermYes(props) {
  return (
    <div className={`col-md-6 ${props.styles}`}>
      <ul>
        <li> Payment via Ko-fi </li>
        <li>
          {" "}
          I have the right to decline any requests and will not be forced to
          work for free{" "}
        </li>
        <li>
          {" "}
          Please specify a deadline in advance. Prices may change depending on
          how short the deadline.{" "}
        </li>
        <li>
          {" "}
          A draft will be given in advance to confirm sizes/style. Payment must
          be received after confirmation or the project will be dropped. (This
          applies to 4-komas or full sized pictures. Not emotes){" "}
        </li>
        <li>
          {" "}
          The working period may vary between 1 day - 1 month depending on how
          complex the request is.{" "}
        </li>
        <li>
          {" "}
          I reserve the right to upload the commissioned artwork to my public
          channels unless requested not to.{" "}
        </li>
        <li> I will not send the raw files of the emotes I have made or redrawn, chibi works are exempted to this.</li>
        <li> If you want to repost my work, please credit @anneroz_ed. </li>
      </ul>
    </div>
  );
}
