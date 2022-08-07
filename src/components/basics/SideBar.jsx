import * as FeatherIcon from "react-feather";
import User from "../../models/User";
import { activeSidebarButton } from "../../utils/functions";

function SideBar() {
    return (
        // < !--Page Sidebar Start-- >
        <header className="main-nav">
            <div className="sidebar-user text-center"><a className="setting-primary"
                href="#">
                <FeatherIcon.Settings />
            </a><img
                    className="img-90 rounded-circle"
                    src={process.env.PUBLIC_URL + "/assets/images/dashboard/1.png"} alt="" />
                <div className="badge-bottom"><span className="badge badge-primary">New</span></div><a
                    href="user-profile.html">
                    <h6 className="mt-3 f-14 f-w-600">{User.authUser.name + ' ' + User.authUser.lastname}</h6></a>
                <p className="mb-0 font-roboto">{User.authUser.userType}</p>
                <ul>
                    <li><span><span className="counter">19.8</span>k</span>
                        <p>Follow</p>
                    </li>
                    <li><span>2 year</span>
                        <p>Experince</p>
                    </li>
                    <li><span><span className="counter">95.2</span>k</span>
                        <p>Follower </p>
                    </li>
                </ul>
            </div>
            <nav>
                <div className="main-navbar">
                    <div className="left-arrow" id="left-arrow">
                        <FeatherIcon.ArrowLeft /></div>
                    <div id="mainnav">
                        <ul className="nav-menu custom-scrollbar">
                            <li className="back-btn">
                                <div className="mobile-back text-end"><span>Back</span><i
                                    className="fa fa-angle-right ps-2" aria-hidden="true"></i></div>
                            </li>
                            <li className="sidebar-main-title">
                                <div>
                                    <h6>Général</h6>
                                </div>
                            </li>
                            <li className="dropdown"><a className={"nav-link menu-title " + activeSidebarButton('/home')}
                                href="/home"><FeatherIcon.Home /><span>Tableau de bord</span></a>
                            </li>
                            <li className="dropdown"><a className={"nav-link menu-title " + activeSidebarButton('/chat')}
                                href="/chat"><FeatherIcon.MessageCircle /><span>Chat</span></a>
                            </li>
                            <li className="dropdown"><a className={"nav-link menu-title " + activeSidebarButton('/notifs')}
                                href="/notifs"><FeatherIcon.Bell /><span>Notifications</span></a>
                            </li>
                            <li className="sidebar-main-title">
                                <div>
                                    <h6>Administration</h6>
                                </div>
                            </li>
                            <li className="dropdown"><a className={"nav-link menu-title " + activeSidebarButton('/annonces')}
                                href="/annonces"><FeatherIcon.Info /><span>Annonces</span></a>
                            </li>
                            <li className="dropdown"><a className={"nav-link menu-title " + activeSidebarButton('/home')}
                                href="/"><FeatherIcon.Calendar /><span>Emploi du temps</span></a>
                            </li>
                            <li className="dropdown"><a className={"nav-link menu-title " + activeSidebarButton('/home')}
                                href="/"><FeatherIcon.DollarSign /><span>Paiements</span></a>
                            </li>
                            <li className="sidebar-main-title">
                                <div>
                                    <h6>Gestion des classes</h6>
                                </div>
                            </li>

                            <li className="dropdown"><a className={"nav-link menu-title " + activeSidebarButton('/home')}
                                href="#"><FeatherIcon.Clipboard /><span>Classes</span></a>
                            </li >
                            <li className="dropdown"><a className={"nav-link menu-title " + activeSidebarButton('/home')}
                                href="#"><FeatherIcon.Bookmark /><span>Sections</span></a>
                            </li >
                            <li className="dropdown"><a className={"nav-link menu-title " + activeSidebarButton('/home')}
                                href="/"><FeatherIcon.CheckSquare /><span>Listes de présences</span></a>
                            </li >
                            <li className="dropdown"><a className={"nav-link menu-title " + activeSidebarButton('/home')}
                                href="#"><FeatherIcon.User /><span>Elèves</span></a>
                            </li >
                            <li className="dropdown"><a className={"nav-link menu-title " + activeSidebarButton('/home')}
                                href="#"><FeatherIcon.Book /><span>Matières</span></a>
                            </li >
                            <li className="dropdown"><a className={"nav-link menu-title " + activeSidebarButton('/home')}
                                href="#"><FeatherIcon.FileText /><span>Notes</span></a>
                            </li >
                            <li className="dropdown"><a className={"nav-link menu-title " + activeSidebarButton('/home')}
                                href="#"><FeatherIcon.Edit /><span>Examens</span></a>
                            </li >
                            <li className="sidebar-main-title">
                                <div>
                                    <h6>Extras scolaire</h6>
                                </div>
                            </li>
                            <li className="dropdown"> <a className={"nav-link menu-title " + activeSidebarButton('/home')}
                                href="#"><FeatherIcon.MapPin /><span>Dortoirs</span></a>
                            </li >
                            <li className="dropdown"> <a className={"nav-link menu-title " + activeSidebarButton('/home')}
                                href="#"><FeatherIcon.Star /><span>Événements</span></a>
                            </li >
                            <li className="sidebar-main-title">
                                <div>
                                    <h6>Configurations</h6>
                                </div>
                            </li>
                            <li className="dropdown"> <a className={"nav-link menu-title " + activeSidebarButton('/home')}
                                href="#"><FeatherIcon.Users /><span>Utilisateurs</span></a>
                            </li >
                            <li className="dropdown"> <a className={"nav-link menu-title " + activeSidebarButton('/home')}
                                href="#"><FeatherIcon.Settings /><span>Options</span></a>
                            </li >
                        </ul >
                    </div >
                    <div className="right-arrow" id="right-arrow">
                        <FeatherIcon.ArrowRight /></div>
                </div >
            </nav >
        </header >
        // <!--Page Sidebar Ends-- >
    );
}

export default SideBar;