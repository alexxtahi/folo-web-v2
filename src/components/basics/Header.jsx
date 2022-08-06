
import { useState } from "react";
import * as FeatherIcon from "react-feather";
import User from "../../models/User";
import Btn from "../Btn";
import { apiEndpoints } from "../../utils/constants";
import FlagDropdown from "../dropdowns/FlagDropdown";
import ChatDropdown from "../dropdowns/ChatDropdown";
import NotificationDropdown from "../dropdowns/NotificationDropdown";
// Component
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
                                <div className="search-bg"><FeatherIcon.Search className="fa fa-search" />
                                    <input className="form-control-plaintext" placeholder="Vous cherchez ?" />
                                </div>
                            </form><span className="d-sm-none mobile-search search-bg"><i
                                className="fa fa-search"></i></span>
                        </li>
                    </ul>
                </div>
                <div className="nav-right col pull-right right-menu p-0">
                    <ul className="nav-menus">
                        {/* TODO: Ecrire les traitements de cette partie */}
                        {/* Chat */}
                        <ChatDropdown />
                        {/* Notifications */}
                        <NotificationDropdown />
                        {/* Languages */}
                        <FlagDropdown />
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