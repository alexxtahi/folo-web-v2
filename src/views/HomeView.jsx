import { useEffect, useState } from "react";
import * as FeatherIcon from "react-feather";
import { apiEndpoints } from "../utils/constants";
import User from "../models/User";
import Student from "../models/Student";
import DashCard from "../components/dashboard/DashCard";
import AnnoncePreviewBox from "../components/dashboard/AnnoncePreviewBox";
import Annonce from "../models/Annonce";
import BestStudentsTable from "../components/dashboard/BestStudentsTable";
import DashStats from "../components/dashboard/DashStats";
import ShortcutBox from "../components/dashboard/ShortcutsBox";
// Component
function HomeView() {
    // Properties
    const today = new Date();
    const [errorHappens, setErrorHappens] = useState(false);
    const [viewDatas, setViewDatas] = useState({
        currentSession: '',
        totalStudents: 0, totalTeachers: 0, totalClasses: 0, totalParents: 0,
        totalAnnonces: 0, totalUsers: 0,
        annonces: [], bestStudents: [],
        moneyReceived: 0, moneyToPay: 0,

    });
    // Methods
    const getHomeViewDatas = async () => { // Get the dashboard datas from the server
        // Configs
        const url = apiEndpoints.dashboard.home;
        // Send request
        await fetch(
            url,
            {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': User.authUser.accessToken
                },
            })
            .then(response => response.json())
            .then(jsonData => {
                // Check the response
                console.log('datas: ' + jsonData); //! debug
                if (jsonData.success) {
                    // Load dashboard datas
                    setViewDatas({
                        currentSession: jsonData.current_session,
                        totalStudents: jsonData.total_students,
                        totalTeachers: jsonData.total_teachers,
                        totalClasses: jsonData.total_class_sections,
                        totalParents: jsonData.total_parents,
                        totalAnnonces: jsonData.total_annonces,
                        totalUsers: jsonData.total_users,
                        annonces: Annonce.fromArray(jsonData.annonces),
                        bestStudents: Student.fromArray(jsonData.best_students),
                        moneyReceived: jsonData.money_received,
                        moneyToPay: jsonData.money_to_pay,

                    });
                } else {
                    setErrorHappens(true);
                }
            }).catch(error => {
                // Show error alert
                setErrorHappens(true);
                console.log(error); //! debug
            });
    }
    // Hooks
    useEffect(() => {
        // Get the dashboard datas when the component is mounted/updated
        getHomeViewDatas();
    }, []);
    // Render
    return (
        <div className="page-body">
            <div className="container-fluid">
                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-6">
                            <h3>Tableau de bord</h3>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item active">Session {viewDatas.currentSession}</li>
                            </ol>
                        </div>
                        {/* Shortcuts */}
                        <ShortcutBox />
                    </div>
                </div>
            </div>
            {/* <!-- Container-fluid starts--> */}
            <div className="container-fluid general-widget">
                <div className="row">
                    {/* Cards */}
                    <DashCard
                        totalStudents={viewDatas.totalStudents}
                        totalTeachers={viewDatas.totalTeachers}
                        totalClasses={viewDatas.totalClasses}
                        totalParents={viewDatas.totalParents}
                    />
                    <div className="col-xl-6 xl-100 box-col-12">
                        <div className="card">
                            <div className="cal-date-widget card-body">
                                <div className="row">
                                    <div className="col-xl-6 col-xs-12 col-md-6 col-sm-6">
                                        <div className="cal-info text-center">
                                            <div>
                                                <h2>{today.getDate()}</h2>
                                                <div className="d-inline-block">
                                                    <span className="b-r-dark pe-3">
                                                        {today.toLocaleString('default', { month: 'long' })}
                                                    </span>
                                                    <span className="ps-3">{today.getFullYear()}</span>
                                                </div>
                                                <p className="f-16">
                                                    Nous sommes aujourd’hui le {today.toLocaleString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-xs-12 col-md-6 col-sm-6">
                                        <div className="cal-datepicker">
                                            <div className="datepicker-here float-sm-end"
                                                data-language="en"> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Annonces */}
                    <AnnoncePreviewBox annonces={viewDatas.annonces} />
                    {/* Other Stats */}
                    <DashStats
                        totalAnnonces={viewDatas.totalAnnonces}
                        totalUsers={viewDatas.totalUsers}
                        moneyReceived={viewDatas.moneyReceived}
                        moneyToPay={viewDatas.moneyToPay}
                    />
                    {/* Best Students */}
                    <BestStudentsTable bestStudents={viewDatas.bestStudents} />

                    {/* Place other components here */}
                </div>
            </div>
            {/* <!-- Container-fluid Ends--> */}
        </div>
    );
}

export default HomeView;