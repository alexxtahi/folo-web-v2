import * as FeatherIcon from "react-feather";
// Component
function ChatDropdown() {
    // Properties

    // Render
    return (
        <li className="onhover-dropdown"><FeatherIcon.MessageCircle />
            <ul className="chat-dropdown onhover-show-div">
                <li>
                    <div className="media"><img className="img-fluid rounded-circle
                        me-3" src={process.env.PUBLIC_URL + "/assets/images/user/4.jpg"} alt="" />
                        <div className="media-body"><span>Ain Chavez</span>
                            <p className="f-12 light-font">Lorem Ipsum is simply
                                dummy...</p>
                        </div>
                        <p className="f-12">32 mins ago</p>
                    </div>
                </li>
                <li>
                    <div className="media"><img className="img-fluid rounded-circle
                        me-3" src={process.env.PUBLIC_URL + "/assets/images/user/1.jpg"} alt="" />
                        <div className="media-body"><span>Erica Hughes</span>
                            <p className="f-12 light-font">Lorem Ipsum is simply
                                dummy...</p>
                        </div>
                        <p className="f-12">58 mins ago</p>
                    </div>
                </li>
                <li>
                    <div className="media"><img className="img-fluid rounded-circle
                        me-3" src={process.env.PUBLIC_URL + "/assets/images/user/2.jpg"} alt="" />
                        <div className="media-body"><span>Kori Thomas</span>
                            <p className="f-12 light-font">Lorem Ipsum is simply
                                dummy...</p>
                        </div>
                        <p className="f-12">1 hr ago</p>
                    </div>
                </li>
                <li className="text-center"> <a className="f-w-700"
                    href="#">See All </a></li>
            </ul>
        </li>
    );
}

export default ChatDropdown;