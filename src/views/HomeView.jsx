import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PreLoader from "../components/PreLoader";
import SideBar from "../components/SideBar";

function HomeView() {
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
                    <Content />
                    <Footer />
                </div>
                {/* <!-- Page Body Ends--> */}
            </div>
        </div>
    );
}

export default HomeView;
