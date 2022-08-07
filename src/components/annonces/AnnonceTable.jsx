import * as FeatherIcon from "react-feather";
// Component
function AnnonceTable(props) {
    // Properties
    // Render
    return (
        <div className="col-sm-12">
            <div className="card">
                <div className="card-header">
                    <h5>Liste des annonces</h5>
                    <span>Vous avez ici la liste de toutes les annonces enregistrées</span>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Nº</th>
                                <th scope="col">Titre</th>
                                <th scope="col">Sous-titre</th>
                                <th scope="col">Type</th>
                                <th scope="col">Contenu</th>
                                <th scope="col">Date</th>
                                <th scope="col">Profils</th>
                                <th scope="col">État</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.annonces.map((annonce, index) =>
                            (
                                <tr>
                                    <td>{index}</td>
                                    <td>{annonce.title}</td>
                                    <td>{annonce.subtitle}</td>
                                    <td>{annonce.type}</td>
                                    <td>{annonce.content}</td>
                                    <td>{annonce.datePub.toLocaleDateString()}</td>
                                    <td>{annonce.authorizedProfiles}</td>
                                    <td>{annonce.isPublished ? 'Publiée' : 'Enregistrée pour publication le ' + annonce.datePub.toLocaleDateString()}</td>
                                    <td style={{
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis'
                                    }}>
                                        <button class="btn btn-primary btn-xs" type="button" style={{ marginRight: 5 }}><FeatherIcon.Edit /></button>
                                        <button class="btn btn-danger btn-xs" type="button"><FeatherIcon.Trash /></button>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AnnonceTable;