import HomeView from "./HomeView";
import Footer from "../components/basics/Footer";
import Header from "../components/basics/Header";
import SideBar from "../components/basics/SideBar";

function BasicLayout() {
    return (
        <div>
            {/* // < !--Loader starts-- > */}
            {/* <PreLoader /> */}
            {/* // <!--Loader ends-- > */}
            {/* // < !--page - wrapper Start-- > */}
            <div className="page-wrapper compact-wrapper" id="pageWrapper">
                <Header />
                {/* <!-- Page Body Start--> */}
                <div className="page-body-wrapper sidebar-icon">
                    <SideBar />
                    <HomeView />
                    <Footer />
                </div>
                {/* <!-- Page Body Ends--> */}
            </div>
        </div>
    );
}

export default BasicLayout;
