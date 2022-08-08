import { useState } from "react";
import * as FeatherIcon from "react-feather";
import User from "../../models/User";
import { apiEndpoints } from "../../utils/constants";
// Component
function AnnonceForm(props) {
    // Properties
    const [loginBtnPressed, setLoginBtnPressed] = useState(false);
    const [errorHappend, setErrorHappend] = useState(false);
    // Methods
    const addAnnonce = async (event) => { // Send new annonce datas to server
        // Configs
        // setLoginBtnPressed(true);
        event.preventDefault();
        const url = apiEndpoints.annonces.post;
        const formData = new FormData(event.target);
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
                    title: formData.get('title'),
                    subtitle: formData.get('subtitle'),
                    type: formData.get('type'),
                    authorized_profiles: formData.getAll('authorized_profiles[]'),
                    content: formData.get('content'),
                    date_publication: formData.get('date_publication'),
                    link: formData.get('link'),
                    image: formData.get('image'),
                }),
            })
            .then(response => response.json())
            .then(jsonData => {
                // Check the response
                if (jsonData.success) {
                    // Store authenticated user datas
                    User.authUser = new User(jsonData.user, jsonData.access_token);
                    localStorage.setItem('authUser', JSON.stringify(User.authUser));
                    window.location.replace('/home');
                    console.log(User.authUser); //! debug
                } else {
                    setErrorHappend(true);
                }

            }).catch(error => {
                // Show error alert
                setErrorHappend(true);
                console.log(error); //! debug
            });
        // Enable login button
        setLoginBtnPressed(false);
    }
    // Render
    return (
        <div className="col-sm-12">
            <div className="card">
                <div className="card-header">
                    <h5>Ajouter une annonce</h5>
                    <span>Remplissez le formulaire pour créer une annonce et la publier</span>
                </div>
                <div className="card-body">
                    <form className="form theme-form" id="add-form" onSubmit={addAnnonce}>
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
                                <div className="text-end">
                                    <button className="btn btn-primary me-3" type="submit">Ajouter</button>
                                    <button className="btn btn-danger" type="reset">Effacer</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default AnnonceForm;