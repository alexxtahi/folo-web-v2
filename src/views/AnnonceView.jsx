import { useEffect, useState } from "react";
import { apiEndpoints } from "../utils/constants";
import User from "../models/User";
import Annonce from "../models/Annonce";
import ShortcutBox from "../components/dashboard/ShortcutsBox";
import AnnonceTable from "../components/annonces/AnnonceTable";
import AnnonceForm from "../components/annonces/AnnonceForm";
import UserType from "../models/UserType";
// Component
function AnnonceView() {
    // Properties
    const [errorHappens, setErrorHappens] = useState({ state: false, message: '' });
    const [viewDatas, setViewDatas] = useState({
        currentSession: '',
        annonces: [], userTypes: [],

    });
    // Methods
    const getAnnonceViewDatas = async () => { // Get the dashboard datas from the server
        // Configs
        const url = apiEndpoints.annonces.home;
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
                        annonces: Annonce.fromArray(jsonData.annonces),
                        userTypes: UserType.fromArray(jsonData.user_types),
                    });
                } else {
                    setErrorHappens({ state: true, message: jsonData.message });
                }
            }).catch(error => {
                // Show error alert
                setErrorHappens({ state: true, message: 'Une erreur est survenue.' });
                console.log(error); //! debug
            });
    }
    // Hooks
    useEffect(() => {
        // Get the dashboard datas when the component is mounted/updated
        getAnnonceViewDatas();
    }, []);
    // Render
    return (
        <div className="page-body">
            <div className="container-fluid">
                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-6">
                            <h3>Annonces</h3>
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
            <div className="container-fluid">
                <div className="row">
                    {/* Form */}
                    <AnnonceForm userTypes={viewDatas.userTypes} />
                    {/* Table */}
                    <AnnonceTable annonces={viewDatas.annonces} userTypes={viewDatas.userTypes} />
                    {/* Place other components here */}
                </div>
            </div>
            {/* <!-- Container-fluid Ends--> */}
        </div>
    );
}

export default AnnonceView;