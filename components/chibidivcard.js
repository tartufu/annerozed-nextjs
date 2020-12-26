

export default function ChibiDivCard(props) {
    return(
        <div className="col-md-4">
            <img src={props.imgSrc} />
            <h3> {props.header}</h3>
            <hr/>
            <p> {props.desc1}</p>
            <p> {props.desc2}</p>
            <br/>
        </div>
    )
}