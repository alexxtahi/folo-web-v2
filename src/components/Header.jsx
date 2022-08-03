
import { useState } from "react";
import * as FeatherIcon from "react-feather";
import User from "../models/User";
import Btn from "./Btn";
import { apiEndpoints } from "../utils/constants";
function Header() {
    // Properties
    const [logoutBtnPressed, setLogoutBtnPressed] = useState(false);
    const [errorHappend, setErrorHappend] = useState(false);
    // Methods
    const logout = async (event) => { // Send login request to server
        // Configs
        setLogoutBtnPressed(true);
        event.preventDefault();
        const url = apiEndpoints.auth.logout;
        // Send request
        await fetch(
            url,
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': User.authUser.accessToken
                },
            })
            .then(response => response.json())
            .then(jsonData => {
                // Check the response
                console.log(jsonData); //! debug
                if (jsonData.success) {
                    // Remove authenticated user datas and redirect to the login view
                    User.authUser = null;
                    localStorage.removeItem('authUser');
                    window.location.replace('/login');
                    // console.log(User.authUser); //! debug
                } else {
                    setErrorHappend(true);
                }
            }).catch(error => {
                // Show error alert
                setErrorHappend(true);
                console.log(error); //! debug
            });
        // Enable logout button
        setLogoutBtnPressed(false);
    }
    // Render
    return (
        // < !--Page Header Start-- >
        <div className="page-main-header">
            <div className="main-header-right row m-0">
                <div className="main-header-left">
                    <div className="logo-wrapper"><a href="index.html"><img
                        className="img-fluid" src={process.env.PUBLIC_URL + "/assets/images/logo/logo.png"} alt="" /></a></div>
                    <div className="dark-logo-wrapper"><a href="index.html"><img
                        className="img-fluid" src={process.env.PUBLIC_URL + "/assets/images/logo/dark-logo.png"}
                        alt="" /></a></div>
                    <div className="toggle-sidebar">
                        <FeatherIcon.AlignCenter className="status_toggle middle"
                            id="sidebar-toggle" /></div>
                </div>
                <div className="left-menu-header col">
                    <ul>
                        <li>
                            <form className="form-inline search-form">
                                <div className="search-bg"><i className="fa fa-search"></i>
                                    <input className="form-control-plaintext" placeholder="Search here....." />
                                </div>
                            </form><span className="d-sm-none mobile-search search-bg"><i
                                className="fa fa-search"></i></span>
                        </li>
                    </ul>
                </div>
                <div className="nav-right col pull-right right-menu p-0">
                    <ul className="nav-menus">
                        <li><a className="text-dark" href="#!"
                        // onClick="javascript:toggleFullScreen()"
                        >
                            <FeatherIcon.Maximize /></a></li>
                        <li className="onhover-dropdown">
                            <div className="bookmark-box"><FeatherIcon.Star /></div>
                            <div className="bookmark-dropdown onhover-show-div">
                                <div className="form-group mb-0">
                                    <div className="input-group">
                                        <div className="input-group-prepend"><span
                                            className="input-group-text"><i className="fa fa-search"></i></span></div>
                                        <input className="form-control" type="text"
                                            placeholder="Search for bookmark..." />
                                    </div>
                                </div>
                                <ul className="m-t-5">
                                    <li className="add-to-bookmark">
                                        <FeatherIcon.Inbox className="bookmark-icon" />Email<span className="pull-right">
                                            <FeatherIcon.Star /></span></li>
                                    <li className="add-to-bookmark"><FeatherIcon.MessageSquare className="bookmark-icon"
                                    />Chat<span
                                        className="pull-right"><FeatherIcon.Star /></span></li>
                                    <li className="add-to-bookmark"><FeatherIcon.Command className="bookmark-icon"
                                    />Feather Icon<span
                                        className="pull-right"><FeatherIcon.Star /></span></li>
                                    <li className="add-to-bookmark"><FeatherIcon.Airplay className="bookmark-icon"
                                    />Widgets<span
                                        className="pull-right"><FeatherIcon.Star /></span></li>
                                </ul>
                            </div>
                        </li>
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
                        <li>
                            <div className="mode"><i className="fa fa-moon-o"></i></div>
                        </li>
                        <li className="onhover-dropdown"><FeatherIcon.MessageSquare />
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
                        {/* Logout Button */}
                        <li className="onhover-dropdown p-0">
                            <Btn
                                text="Se déconnecter"
                                btnStyle="with-previous-icon"
                                previousIcon={<FeatherIcon.LogOut />}
                                bootstrapType="btn-primary-light"
                                type="button"
                                isPressed={logoutBtnPressed}
                                onClick={logout}
                            />
                        </li>
                    </ul>
                </div >
                <div className="d-lg-none mobile-toggle pull-right w-auto">
                    <FeatherIcon.MoreHorizontal /></div>
            </div >
        </div >
        //   <!--Page Header Ends-- >
    );
}

export default Header;