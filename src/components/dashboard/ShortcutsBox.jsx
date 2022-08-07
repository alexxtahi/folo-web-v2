import * as FeatherIcon from "react-feather";
// Component
function ShortcutBox() {
    return (
        <div className="col-sm-6">
            {/* <!-- Bookmark Start--> */}
            <div className="bookmark">
                <ul>
                    <li>
                        <a href="#" datacontainer="body" databstoggle="popover" dataplacement="top" title=""
                            dataoriginaltitle="Tables">
                            <FeatherIcon.Star />
                        </a>
                    </li>
                    <li>
                        <a href="#" datacontainer="body" databstoggle="popover" dataplacement="top" title=""
                            dataoriginaltitle="Tables">
                            <FeatherIcon.Users />
                        </a>
                    </li>
                </ul>
            </div>
            {/* <!-- Bookmark Ends--> */}
        </div>
    );
}

export default ShortcutBox;