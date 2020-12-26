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
    </div>
  );
}
