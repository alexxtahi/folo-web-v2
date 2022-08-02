import Loader from "./Loader";

function Btn(props) {
    return (
        <button className={"btn " + props.bootstrapType + " btn-block"} type={props.type} form={props.form} onClick={props.onClick}>
            {!props.isPressed ? props.text : "Chargement..."}
        </button>
    );
}

export default Btn;