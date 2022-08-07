import * as FeatherIcon from "react-feather";
// Component
function DashStats(props) {
    // Properties
    // Render
    return (
        <div className="col-xl-6 xl-60 box-col-15">
            <div className="widget-joins card">
                <div className="row">
                    <div className="col-sm-6 pe-0">
                        <div className="media border-after-xs">
                            <div className="align-self-center me-3">
                                {/* TODO: Add link */}
                                <button className="btn btn-primary btn-block">
                                    Voir
                                </button>
                            </div>
                            <div className="media-body details ps-3"><span className="mb-1">Annonces</span>
                                <h5 className="mb-0 counter">{props.totalAnnonces}</h5>
                            </div>
                            <div className="media-body align-self-center">
                                <FeatherIcon.Info
                                    className="font-primary float-end ms-2"
                                    data-feather="shopping-bag" /></div>
                        </div>
                    </div>
                    <div className="col-sm-6 ps-0">
                        <div className="media">
                            <div className="align-self-center me-3">
                                <button className="btn btn-primary btn-block">
                                    Voir
                                </button>
                            </div>
                            <div className="media-body details ps-3"><span className="mb-1">Utilisateurs</span>
                                <h5 className="mb-0 counter">{props.totalUsers}</h5>
                            </div>
                            <div className="media-body align-self-center">
                                <FeatherIcon.Users
                                    className="font-primary float-end ms-3"
                                    data-feather="layers" /></div>
                        </div>
                    </div>
                    <div className="col-sm-6 pe-0">
                        <div className="media border-after-xs">
                            <div className="align-self-center me-3">
                                <button className="btn btn-primary btn-block">
                                    Voir
                                </button>
                            </div>
                            <div className="media-body details ps-3 pt-0"><span
                                className="mb-1">Versements</span>
                                <h5 className="mb-0 counter">{props.moneyReceived} FCFA</h5>
                            </div>
                            <div className="media-body align-self-center">
                                <FeatherIcon.DollarSign
                                    className="font-primary float-end ms-2"
                                    data-feather="shopping-cart" /></div>
                        </div>
                    </div>
                    <div className="col-sm-6 ps-0">
                        <div className="media">
                            <div className="align-self-center me-3">
                                <button className="btn btn-primary btn-block">
                                    Voir
                                </button>
                            </div>
                            <div className="media-body details ps-3 pt-0"><span
                                className="mb-1">A payer</span>
                                <h5 className="mb-0 counter">{props.moneyToPay} FCFA</h5>
                            </div>
                            <div className="media-body align-self-center"><FeatherIcon.DollarSign
                                className="font-primary float-end ms-2"
                                data-feather="dollar-sign" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashStats;