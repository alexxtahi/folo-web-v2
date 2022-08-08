import { useEffect, useState } from "react";
import * as FeatherIcon from "react-feather";
import User from "../../models/User";
import { apiEndpoints } from "../../utils/constants";
import Alert from "../Alert";
import $ from 'jquery';
// Component
function AnnonceTable(props) {
    // Properties
    const [formDatas, setFormDatas] = useState({
        title: '',
        subtitle: null,
        type: 'INFO',
        authorized_profiles: [],
        content: '',
        date_publication: null,
        link: null,
        image: null,
    });
    const [submitBtnPressed, setSubmitBtnPressed] = useState(false);
    const [successHappens, setSuccessHappens] = useState({ state: false, message: '' });
    const [errorHappens, setErrorHappens] = useState({ state: false, message: '' });
    // Methods
    const clearEditForm = () => {
        setFormDatas({
            title: '',
        subtitle: null,
        type: 'INFO',
        authorized_profiles: [],
        content: '',
        date_publication: null,
        link: null,
        image: null,
        });
    }
    const loadEditForm = (annonce) => {
        // Clear datas
        clearEditForm();
        // Load datas
        setFormDatas({
            title: annonce.title,
            subtitle: annonce.subtitle,
            type: annonce.type,
            authorized_profiles: annonce.authorizedProfiles,
            content: annonce.content,
            date_publication: annonce.datePub.toLocaleDateString(),
            link: annonce.link,
            image: annonce.image,
        });
    }
    const updateAnnonce = async (event, id) => { // Send updated annonce datas to server
        // Configs
        // console.log(formDatas); //! debug
        setSubmitBtnPressed(true);
        setErrorHappens(false);
        event.preventDefault();
        const url = apiEndpoints.annonces.update + id;
        // Send request
        await fetch(
            url,
            {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': User.authUser.accessToken
                },
                body: JSON.stringify({
                    title: formDatas.title,
                    subtitle: formDatas.subtitle,
                    type: formDatas.type,
                    authorized_profiles: formDatas.authorized_profiles,
                    content: formDatas.content,
                    // date_publication: formDatas.date_publication, // TODO: Fix this
                    link: formDatas.link,
                    image: formDatas.image,
                }),
            })
            .then(response => response.json())
            .then(jsonData => {
                // Check the response
                if (jsonData.success) {
                    // Show success alert
                    setSuccessHappens({ state: true, message: jsonData.message });
                    window.location.reload();
                    console.log(jsonData); //! debug
                } else {
                    setErrorHappens({ state: true, message: 'Echec: ' + jsonData.message });
                }

            }).catch(error => {
                // Show error alert
                setErrorHappens({ state: true, message: 'Echec: Une erreur est survenue.' });
                console.log(error); //! debug
            });
        // Enable login button
        setSubmitBtnPressed(false);
    }
    const deleteAnnonce = async (id) => { // Send new annonce datas to server
        // Configs
        // console.log(formDatas); //! debug
        setSubmitBtnPressed(true);
        setErrorHappens(false);
        const url = apiEndpoints.annonces.delete + id;
        // Send request
        await fetch(
            url,
            {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': User.authUser.accessToken
                },
            })
            .then(response => response.json())
            .then(jsonData => {
                // Check the response
                if (jsonData.success) {
                    // Show success alert
                    setSuccessHappens({ state: true, message: jsonData.message });
                    window.location.reload();
                    console.log(jsonData); //! debug
                } else {
                    setErrorHappens({ state: true, message: 'Echec: ' + jsonData.message });
                }

            }).catch(error => {
                // Show error alert
                setErrorHappens({ state: true, message: 'Echec: Une erreur est survenue.' });
                console.log(error); //! debug
            });
        // Enable login button
        setSubmitBtnPressed(false);
    }
    // Render
    return (
        <div className="col-sm-12">
            <div className="card">
                <div className="card-header">
                    <h5>Liste des annonces</h5>
                    <span>Vous avez ici la liste de toutes les annonces enregistrées</span>
                </div>
                {errorHappens.state ? <Alert message={errorHappens.message} type="light" onCloseBtnClick={() => setErrorHappens({ state: false, message: '' })} /> : null}
                {successHappens.state ? <Alert message={successHappens.message} type="primary" prefixIcon={<FeatherIcon.CheckCircle />} onCloseBtnClick={() => setSuccessHappens({ state: false, message: '' })} /> : null}
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
                                    <td>{index + 1}</td>
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
                                        {/* Edit */}
                                        <button className="btn btn-primary btn-xs" type="button" style={{ marginRight: 5 }} data-bs-toggle="modal" data-bs-target={"#editModal" + annonce.id} onClick={(event) => loadEditForm(annonce)}><FeatherIcon.Edit /></button>
                                        <div className="modal fade bd-example-modal-lg" id={"editModal" + annonce.id} tabIndex="-1" role="dialog" aria-labelledby={"#editModalLabel" + annonce.id} aria-hidden="true">
                                            <div className="modal-dialog modal-lg" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id={"editModalLabel" + annonce.id}>Modification de l'annonce</h5>
                                                        <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <form className="form theme-form" id={"edit-form-" + annonce.id} onSubmit={(event) => updateAnnonce(event, annonce.id)}>
                                                            <div className="row">
                                                                <div className="col-sm-4">
                                                                    <div className="mb-3">
                                                                        <label htmlFor={"title-" + annonce.id}>Titre <span>*</span></label>
                                                                        <input name={"title-" + annonce.id} required className="form-control" type="text" placeholder="Titre de l'annonce"
                                                                            value={formDatas.title}
                                                                            onChange={(event) => setFormDatas(currentState => { return { ...currentState, title: event.target.value }; })}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-4">
                                                                    <div className="mb-3">
                                                                        <label htmlFor={"subtitle-" + annonce.id}>Sous-titre</label>
                                                                        <input name={"subtitle-" + annonce.id} className="form-control" type="text" placeholder="Sous-titre de l'annonce"
                                                                            value={formDatas.subtitle}
                                                                            onChange={(event) => setFormDatas(currentState => { return { ...currentState, subtitle: event.target.value }; })}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-4">
                                                                    <div className="mb-3">
                                                                        <label htmlFor={"type-" + annonce.id}>Type</label>
                                                                        <select name={"type-" + annonce.id} className="form-select"
                                                                            value={formDatas.type}
                                                                            onChange={(event) => setFormDatas(currentState => { return { ...currentState, type: event.target.value }; })}>
                                                                            <option value="INFO" selected={formDatas.type === 'INFO' ? true : false}>INFO</option>
                                                                            <option value="RAPPEL" selected={formDatas.type === 'RAPPEL' ? true : false}>RAPPEL</option>
                                                                            <option value="SCOLARITÉ" selected={formDatas.type === 'SCOLARITÉ' ? true : false}>SCOLARITÉ</option>
                                                                            <option value="CONVOCATION" selected={formDatas.type === 'CONVOCATION' ? true : false}>CONVOCATION</option>
                                                                            <option value="RÉSULTATS SCOLAIRES" selected={formDatas.type === 'RÉSULTATS' ? true : false}>RÉSULTATS SCOLAIRES</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col">
                                                                    <div className="mb-3">
                                                                        <label htmlFor={"authorized_profiles-" + annonce.id + "[]"}>Profils autorisés</label>
                                                                        <select name={"authorized_profiles-" + annonce.id + "[]"} className="js-example-basic-multiple col-sm-12" multiple="multiple"
                                                                            value={formDatas.authorized_profiles}
                                                                            // TODO: Fix get selected values issue in onChange event
                                                                            onChange={(event) => {
                                                                                console.log(event.target.value);
                                                                                setFormDatas(currentState => { return { ...currentState, authorized_profiles: Array.from(event.target.selectedOptions, option => option.value) }; })
                                                                            }}>
                                                                            {props.userTypes.map(userType => (
                                                                                <option value={userType.title}>{userType.name}</option>
                                                                            ))}
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col">
                                                                    <div className="mb-3">
                                                                        <label htmlFor={"content-" + annonce.id}>Contenu <span>*</span></label>
                                                                        <textarea name={"content-" + annonce.id} required className="form-control" id="exampleFormControlTextarea4" rows="3"
                                                                            value={formDatas.content}
                                                                            onChange={(event) => setFormDatas(currentState => { return { ...currentState, content: event.target.value }; })}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-sm-4">
                                                                    <div className="mb-3">
                                                                        <label htmlFor={"date_publication-" + annonce.id}>Date de publication</label>
                                                                        <input name={"date_publication-" + annonce.id} className="form-control" type="datetime-local"
                                                                            value={formDatas.date_publication}
                                                                            onChange={(event) => setFormDatas(currentState => { return { ...currentState, date_publication: event.target.value }; })}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-4">
                                                                    <div className="mb-3">
                                                                        <label htmlFor={"link-" + annonce.id}>Lien</label>
                                                                        <input htmlFor={"link-" + annonce.id} className="form-control" type="text" placeholder="Lien utile"
                                                                            value={formDatas.link}
                                                                            onChange={(event) => setFormDatas(currentState => { return { ...currentState, link: event.target.value }; })}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-4">
                                                                    <div className="mb-3">
                                                                        <label htmlFor={"image-" + annonce.id}>Image</label>
                                                                        <input htmlFor={"image-" + annonce.id} className="form-control" accept="image/*" type="file"
                                                                            value={formDatas.image}
                                                                            onChange={(event) => setFormDatas(currentState => { return { ...currentState, image: event.target.value }; })}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button className="btn btn-light" type="button" data-bs-dismiss="modal">Annuler</button>
                                                        <button className="btn btn-primary" form={"edit-form-" + annonce.id} type="submit">Enregistrer</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Delete */}
                                        <button className="btn btn-danger btn-xs" type="button" data-bs-toggle="modal" data-original-title="test" data-bs-target={"#deleteModal" + annonce.id}><FeatherIcon.Trash /></button>
                                        <div className="modal fade" id={"deleteModal" + annonce.id} tabIndex="-1" role="dialog" aria-labelledby={"deleteModalLabel" + annonce.id} aria-hidden="true">
                                            <div className="modal-dialog" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id={"deleteModalLabel" + annonce.id}>Confirmation</h5>
                                                        <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">Voulez vous vraiment supprimer cet élément ?</div>
                                                    <div className="modal-footer">
                                                        <button className="btn btn-light" type="button" data-bs-dismiss="modal">Annuler</button>
                                                        <button className="btn btn-danger" type="button" onClick={() => deleteAnnonce(annonce.id)} data-bs-dismiss="modal">Supprimer</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

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