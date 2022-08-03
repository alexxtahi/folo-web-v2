import { useState } from "react";
import * as FeatherIcon from "react-feather";
import { Link } from "react-router-dom";
import Alert from "../../components/Alert";
import Btn from "../../components/Btn";
import Loader from "../../components/Loader";
import AuthMiddleware from "../../middleware/AuthMiddleware";
import User from "../../models/User";
import { apiEndpoints } from "../../utils/constants";

function LoginView() {
    // Properties
    const [identity, setIdentity] = useState("testeur@testeur.com");
    const [password, setPassword] = useState("testeur");
    const [remember, setRemember] = useState(false);
    const [loginBtnPressed, setLoginBtnPressed] = useState(false);
    const [errorHappend, setErrorHappend] = useState(false);
    // Methods
    const login = async (event) => { // Send login request to server
        // Configs
        setLoginBtnPressed(true);
        event.preventDefault();
        const url = apiEndpoints.auth.login;
        // Send request
        await fetch(
            url,
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    identity: identity,
                    password: password,
                    remember: remember
                }),

            })
            .then(response => response.json())
            .then(jsonData => {
                // Check the response
                if (jsonData.success) {
                    // Store authenticated user datas
                    User.authUser = new User(jsonData);
                    localStorage.setItem('authUser', JSON.stringify(User.authUser));
                    window.location.replace('/');
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
    return loginBtnPressed ? (
        <section>
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-12">
                        <div className="login-card">
                            <div className="theme-form login-form">
                                <Loader />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ) : (
        // < !--page - wrapper Start-- >
        <section>
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-12">
                        <div className="login-card">
                            <form className="theme-form login-form" id="login-form" onSubmit={login}>
                                {errorHappend ? <Alert message="Une erreur est survenue." onCloseBtnClick={() => setErrorHappend(false)} /> : null}
                                <h4>FOLO Education</h4>
                                <h6>Bon retour parmi nous ! Connectez vous ici.</h6>
                                <div className="form-group">
                                    <label htmlFor="identity">Identifiant</label>
                                    <div className="input-group"><span className="input-group-text">
                                        <FeatherIcon.Mail />
                                    </span>
                                        <input required className="form-control" type="email" name="identity" value={identity} onChange={(event) => setIdentity(event.target.value)} placeholder="Email / Nom d'utilisateur" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Mot de passe</label>
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <FeatherIcon.Lock />
                                        </span>
                                        <input className="form-control" type="password" name="password" required value={password} onChange={(event) => setPassword(event.target.value)} placeholder="*********" />
                                        <div className="show-hide">
                                            <span className="show"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="checkbox">
                                        <input id="checkbox1" type="checkbox" checked={remember} onChange={(event) => setRemember(event.target.checked)} />
                                        <label htmlFor="checkbox1">Rester connecté</label>
                                    </div><Link className="link" to="/reset-password">Mot de passe oublié ?</Link>
                                </div>
                                <div className="form-group">
                                    <Btn
                                        text="Se connecter"
                                        bootstrapType={!loginBtnPressed ? "btn-primary" : "btn-light"}
                                        form="login-form"
                                        type="submit"
                                        isPressed={loginBtnPressed}
                                    />
                                    {/* <button className="btn btn-primary btn-block" type="submit" form="login-form">Se connecter</button> */}
                                </div>
                                <div className="login-social-title">
                                    <h5>Suivez nous</h5>
                                </div>
                                <div className="form-group">
                                    <ul className="login-social">
                                        <li><a href="https://www.linkedin.com/company/folo-education/" target="_blank" rel="noreferrer"><FeatherIcon.Linkedin /></a></li>
                                        <li><a href="https://www.facebook.com/foloschool" target="_blank" rel="noreferrer"><FeatherIcon.Facebook /></a></li>
                                    </ul>
                                </div>
                                <p>Copyright © 2022 FOLO Education par BRAINSTATION.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // <!--page - wrapper end-- >
    );
}

export default LoginView;