import * as FeatherIcon from 'react-feather';
import { dateDiff, getTodayDate } from '../../utils/functions';

function AnnoncePreviewBox(props) {
    // Properties
    let annonces = [];
    props.annonces.forEach(annonce => {
        // console.log('annonce enreg: ' + annonce.dateEnreg); //! debug
        annonces.push(
            <li className="media"><span className="me-3 font-primary">{annonce.title.slice(0, 1)}</span>
                <div className="align-self-center media-body">
                    <h6 className="mt-0">{annonce.title}</h6>
                    <ul className="dates">
                        <li>{annonce.getStringDatePub()}</li>
                        <li>{annonce.getDiffWithToday()}</li>
                    </ul>
                </div>
            </li>
        );
    })
    // Render
    return (
        <div className="col-xl-4 col-md-6 box-col-12">
            <div>
                <div className="card card-activity">
                    <div className="card-header pb-0 d-flex justify-content-between
                      align-items-center">
                        <h5 className="text-uppercase">Annonces</h5>
                        <div className="setting-list">
                            <ul className="list-unstyled setting-option">
                                <li>
                                    <a href='#' className="setting-primary">
                                        <FeatherIcon.Link2 />
                                    </a>
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
                        <ul className="crm-activity">
                            {annonces}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnnoncePreviewBox;
