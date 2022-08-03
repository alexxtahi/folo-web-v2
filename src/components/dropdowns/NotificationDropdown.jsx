import * as FeatherIcon from "react-feather";
// Component
function NotificationDropdown() {
    // Properties
    // Render
    return (
        <li className="onhover-dropdown">
            <div className="notification-box"><FeatherIcon.Bell /><span
                className="dot-animated"></span></div>
            <ul className="notification-dropdown onhover-show-div">
                <li>
                    <p className="f-w-700 mb-0">You have 3 Notifications<span
                        className="pull-right badge badge-primary badge-pill">4</span></p>
                </li>
                <li className="noti-primary">
                    <div className="media"><span className="notification-bg
                        bg-light-primary"><FeatherIcon.Activity /></span>
                        <div className="media-body">
                            <p>Delivery processing </p><span>10 minutes ago</span>
                        </div>
                    </div>
                </li>
                <li className="noti-secondary">
                    <div className="media"><span className="notification-bg
                        bg-light-secondary"><FeatherIcon.CheckCircle /></span>
                        <div className="media-body">
                            <p>Order Complete</p><span>1 hour ago</span>
                        </div>
                    </div>
                </li>
                <li className="noti-success">
                    <div className="media"><span className="notification-bg
                        bg-light-success"><FeatherIcon.FileText /></span>
                        <div className="media-body">
                            <p>Tickets Generated</p><span>3 hour ago</span>
                        </div>
                    </div>
                </li>
                <li className="noti-danger">
                    <div className="media"><span className="notification-bg
                        bg-light-danger"><FeatherIcon.UserCheck /></span>
                        <div className="media-body">
                            <p>Delivery Complete</p><span>6 hour ago</span>
                        </div>
                    </div>
                </li>
            </ul>
        </li>
    );
}

export default NotificationDropdown;