import * as FeatherIcon from "react-feather";
function DashCard(props) {
    return (
        <>
            <div className="col-sm-6 col-xl-3 col-lg-6">
                <div className="card o-hidden border-0">
                    <div className="bg-primary b-r-4 card-body">
                        <div className="media static-top-widget">
                            <div className="align-self-center text-center">
                                <FeatherIcon.User />
                            </div>
                            <div className="media-body"><span className="m-0">Elèves</span>
                                <h4 className="mb-0 counter">{props.totalStudents}</h4>
                                <FeatherIcon.User className="icon-bg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-xl-3 col-lg-6">
                <div className="card o-hidden border-0">
                    <div className="bg-primary b-r-4 card-body">
                        <div className="media static-top-widget">
                            <div className="align-self-center text-center">
                                <FeatherIcon.Users />
                            </div>
                            <div className="media-body"><span className="m-0">Enseignants</span>
                                <h4 className="mb-0 counter">{props.totalTeachers}</h4>
                                <FeatherIcon.Users className="icon-bg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-xl-3 col-lg-6">
                <div className="card o-hidden border-0">
                    <div className="bg-secondary b-r-4 card-body">
                        <div className="media static-top-widget">
                            <div className="align-self-center text-center">
                                <FeatherIcon.Clipboard /></div>
                            <div className="media-body"><span className="m-0">Classes</span>
                                <h4 className="mb-0 counter">{props.totalClasses}</h4>
                                <FeatherIcon.Clipboard className="icon-bg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-xl-3 col-lg-6">
                <div className="card o-hidden border-0">
                    <div className="bg-primary b-r-4 card-body">
                        <div className="media static-top-widget">
                            <div className="align-self-center text-center">
                                <FeatherIcon.User /></div>
                            <div className="media-body"><span className="m-0">Parents</span>
                                <h4 className="mb-0 counter">{props.totalParents}</h4>
                                <FeatherIcon.User className="icon-bg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashCard;