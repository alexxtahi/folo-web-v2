import { useState } from "react";
import * as FeatherIcon from "react-feather";
function FlagDropdown() {
    // Properties
    const [languages, setLanguages] = useState([
        {
            name: "English",
            selected: false,
        },
        {
            name: "Français",
            selected: true,
        }
    ]);
    // Render
    return (
        <li className="onhover-dropdown">
            <div className="bookmark-box"><FeatherIcon.Flag /></div>
            <div className="bookmark-dropdown onhover-show-div">
                <ul className="m-t-5">
                    <li className="add-to-bookmark">
                        <FeatherIcon.Flag className="bookmark-icon" />
                        Français
                        <span className="pull-right">
                            <FeatherIcon.Check />
                        </span>
                    </li>
                    <li className="add-to-bookmark">
                        <FeatherIcon.Flag className="bookmark-icon" />
                        English
                        {/* <span className="pull-right">
                            <FeatherIcon.Check />
                        </span> */}
                    </li>
                </ul>
            </div>
        </li>
    );
}

export default FlagDropdown;