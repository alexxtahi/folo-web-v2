import { MoreHorizontal } from "react-feather";
function Btn(props) {
    // Render
    switch (props.btnStyle) {
        case 'default': // Default Button
            return (
                <button className={"btn " + props.bootstrapType + " btn-block"} type={props.type} form={props.form} onClick={props.onClick}>
                    {!props.isPressed ? props.text : "Chargement..."}
                </button>
            );
        case 'with-previous-icon': // Default Button
            return (
                <button className={"btn " + props.bootstrapType} type={props.type} form={props.form} onClick={props.onClick}>
                    {props.previousIcon}
                    {!props.isPressed ? props.text : "Chargement..."}
                </button>
            );
        default:
            return (
                <button className={"btn " + props.bootstrapType + " btn-block"} type={props.type} form={props.form} onClick={props.onClick}>
                    {!props.isPressed ? props.text : "Chargement..."}
                </button>
            );
    }
}

export default Btn;