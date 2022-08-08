import { useState } from "react";
import * as FeatherIcon from "react-feather";
import User from "../../models/User";
import { apiEndpoints } from "../../utils/constants";
import Alert from "../Alert";
import Loader from "../Loader";
// Component
function AnnonceForm(props) {
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
    const addAnnonce = async (event) => { // Send new annonce datas to server
        // Configs
        // console.log(formDatas); //! debug
        setSubmitBtnPressed(true);
        setErrorHappens(false);
        event.preventDefault();
        const url = apiEndpoints.annonces.post;
        // Send request
        await fetch(
            url,
            {
                method: 'POST',
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
                    date_publication: formDatas.date_publication,
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
    // Render
    return submitBtnPressed ? (
        <div className="col-sm-12">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <Loader />
                    </div >
                </div >
            </div >
        </div >
    ) : (
        <div className="col-sm-12">
            <div className="card">
                <div className="card-header">
                    <h5>Ajouter une annonce</h5>
                    <span>Remplissez le formulaire pour créer une annonce et la publier</span>
                </div>
                {errorHappens.state ? <Alert message={errorHappens.message} type="light" onCloseBtnClick={() => setErrorHappens({ state: false, message: '' })} /> : null}
                {successHappens.state ? <Alert message={successHappens.message} type="primary" prefixIcon={<FeatherIcon.CheckCircle />} onCloseBtnClick={() => setSuccessHappens({ state: false, message: '' })} /> : null}
                <div className="card-body">
                    <form className="form theme-form" id="add-form" onSubmit={addAnnonce}>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="mb-3">
                                    <label htmlFor="title">Titre <span>*</span></label>
                                    <input name="title" required className="form-control" type="text" placeholder="Titre de l'annonce"
                                        value={formDatas.title}
                                        onChange={(event) => setFormDatas(currentState => { return { ...currentState, title: event.target.value }; })}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="mb-3">
                                    <label htmlFor="subtitle">Sous-titre</label>
                                    <input name="subtitle" className="form-control" type="text" placeholder="Sous-titre de l'annonce"
                                        value={formDatas.subtitle}
                                        onChange={(event) => setFormDatas(currentState => { return { ...currentState, subtitle: event.target.value }; })}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="mb-3">
                                    <label htmlFor="type">Type</label>
                                    <select name="type" className="form-select"
                                        value={formDatas.type}
                                        onChange={(event) => setFormDatas(currentState => { return { ...currentState, type: event.target.value }; })}>
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
                                    <select name="authorized_profiles[]" className="js-example-basic-multiple col-sm-12" multiple="multiple"
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
                                    <label htmlFor="content">Contenu <span>*</span></label>
                                    <textarea name="content" required className="form-control" id="exampleFormControlTextarea4" rows="3"
                                        value={formDatas.content}
                                        onChange={(event) => setFormDatas(currentState => { return { ...currentState, content: event.target.value }; })}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="mb-3">
                                    <label htmlFor="date_publication">Date de publication</label>
                                    <input name="date_publication" className="form-control" type="datetime-local"
                                        value={formDatas.date_publication}
                                        onChange={(event) => setFormDatas(currentState => { return { ...currentState, date_publication: event.target.value }; })}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="mb-3">
                                    <label htmlFor="link">Lien</label>
                                    <input htmlFor="link" className="form-control" type="text" placeholder="Lien utile"
                                        value={formDatas.link}
                                        onChange={(event) => setFormDatas(currentState => { return { ...currentState, link: event.target.value }; })}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="mb-3">
                                    <label htmlFor="image">Image</label>
                                    <input htmlFor="image" className="form-control" accept="image/*" type="file"
                                        value={formDatas.image}
                                        onChange={(event) => setFormDatas(currentState => { return { ...currentState, image: event.target.value }; })}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Buttons */}
                        <div className="row">
                            <div className="col">
                                <div className="text-end">
                                    <button className="btn btn-primary me-3" type="submit">Ajouter</button>
                                    <button className="btn btn-danger" type="reset">Effacer</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
}
export default AnnonceForm;