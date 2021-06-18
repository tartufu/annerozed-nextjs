export default function TermNo(props) {
  return (
    <div className={`col-md-6 ${props.styles}`}>
      <p> I do not accept the following commissions: </p>
      <ul>
        <li> Mecha </li>
        <li> Furry </li>
        <li> Gore </li>
        <li> NSFW </li>
      </ul>
      <br></br>
      <p> Additional Remarks</p>
      <ul>
        <li> I will not send the raw files of the emotes I have made or redrawn, chibi works are exempted to this.</li>
      </ul>
    </div>
  );
}
