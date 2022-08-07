import * as FeatherIcon from "react-feather";
// Component
function AnnonceForm(props) {
    // Properties
    let userTypes = [];
    props.userTypes.forEach(userType => {
        // console.log('annonce enreg: ' + annonce.dateEnreg); //! debug
        userTypes.push(
            <option value={userType.title}>{userType.name}</option>
        );
    })
    // Render
    return (
        <div className="col-sm-12">
            <div className="card">
                <div className="card-header">
                    <h5>Ajouter une annonce</h5>
                    <span>Remplissez le formulaire pour créer une annonce et la publier</span>
                </div>
                <div className="card-body">
                    <div className="form theme-form">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="mb-3">
                                    <label htmlFor="title">Titre <span>*</span></label>
                                    <input name="title" required className="form-control" type="text" placeholder="Titre de l'annonce" />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="mb-3">
                                    <label htmlFor="subtitle">Sous-titre</label>
                                    <input name="subtitle" className="form-control" type="text" placeholder="Sous-titre de l'annonce" />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="mb-3">
                                    <label htmlFor="type">Type</label>
                                    <select name="type" className="form-select">
                                        <option value="INFO">INFO</option>
                                        <option value="RAPPEL">RAPPEL</option>
                                        <option value="SCOLARITÉ">SCOLARITÉ</option>
                                        <option value="CONVOCATION">CONVOCATION</option>
                                        <option value="RÉSULTATS SCOLAIRES">RÉSULTATS SCOLAIRES</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label htmlFor="authorized_profiles[]">Profils autorisés</label>
                                    <select name="authorized_profiles[]" className="js-example-basic-multiple col-sm-12" multiple="multiple">
                                        {userTypes}
                                    </select>
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label htmlFor="content">Contenu <span>*</span></label>
                                    <textarea name="content" required className="form-control" id="exampleFormControlTextarea4" rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="mb-3">
                                    <label htmlFor="date_publication">Date de publication</label>
                                    <input name="date_publication" className="form-control" type="datetime-local" />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="mb-3">
                                    <label htmlFor="link">Lien</label>
                                    <input htmlFor="link" className="form-control" type="text" placeholder="Lien utile" />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="mb-3">
                                    <label htmlFor="image">Image</label>
                                    <input htmlFor="image" className="form-control" accept="image/*" type="file" />
                                </div>
                            </div>
                        </div>
                        {/* Buttons */}
                        <div className="row">
                            <div className="col">
                                <div className="text-end"><a className="btn btn-primary me-3" href="#">Ajouter</a>
                                    <a className="btn btn-danger" href="#">Effacer</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AnnonceForm;