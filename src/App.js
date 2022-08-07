import './App.css';
import Footer from "./components/basics/Footer";
import Header from "./components/basics/Header";
import SideBar from "./components/basics/SideBar";
import { Outlet } from "react-router-dom";
// Component
function App() {
  // Render
  return (
    <div>
      {/* // < !--Loader starts-- > */}
      {/* <PreLoader /> */}
      {/* // <!--Loader ends-- > */}
      {/* // < !--page - wrapper Start-- > */}
      <div className="page-wrapper compact-wrapper" id="pageWrapper">
        <Header /> {/* Dashboard header */}
        <div className="page-body-wrapper sidebar-icon">
          <SideBar /> {/* Dashboard sidebar */}
          <Outlet />  {/* Render child views */}
          <Footer /> {/* Dashboard footer */}
        </div>
      </div>
    </div>
  );
}

export default App;
