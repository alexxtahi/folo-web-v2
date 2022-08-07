
// Component
function BestStudentsTable(props) {
    // Properties
    let bestStudents = [];
    // TODO: Finish this
    props.bestStudents.forEach(student => {
        // console.log('student enreg: ' + student.dateEnreg); //! debug
        bestStudents.push(
            <tr>
                <td className="bd-t-none u-s-tb">
                    <div className="align-middle image-sm-size">
                        <img className="img-radius align-top m-r-15 rounded-circle" src={process.env.PUBLIC_URL + "/assets/images/user/4.jpg"} alt="" />
                        <div className="d-inline-block">
                            <h6>{student.user.name + ' ' + student.user.lastname}
                                {/* <span className="text-muted"> (14+ Online)</span> */}
                            </h6>
                        </div>
                    </div>
                </td>
                <td>{student.classSection.name}</td>
                {/* TODO: Finish this */}
                <td>18/20</td>
                <td>Mathématiques</td>
            </tr>
        );
    })
    // Render
    return (
        <div className="col-xl-6 xl-100 box-col-12">
            <div className="card employee-status">
                <div className="card-header pb-0 d-flex justify-content-between
                    align-items-center">
                    <h5>Les meilleurs élèves</h5>
                    <div className="setting-list">
                        <ul className="list-unstyled setting-option">
                            <li>
                                <div className="setting-primary"><i className="icon-settings"></i></div>
                            </li>
                            <li><i className="view-html fa fa-code font-primary"></i></li>
                            <li><i className="icofont icofont-maximize full-card
                            font-primary"></i></li>
                            <li><i className="icofont icofont-minus minimize-card
                            font-primary"></i></li>
                            <li><i className="icofont icofont-refresh reload-card
                            font-primary"></i></li>
                            <li><i className="icofont icofont-error close-card
                            font-primary"></i></li>
                        </ul>
                    </div>
                </div>
                <div className="card-body">
                    <div className="user-status table-responsive">
                        <table className="table table-bordernone">
                            <thead>
                                <tr>
                                    <th scope="col">Nom & Prénom(s)</th>
                                    <th scope="col">Classe</th>
                                    <th scope="col">Moyenne</th>
                                    <th scope="col">Matière de base</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bestStudents}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BestStudentsTable;