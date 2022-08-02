import * as FeatherIcon from "react-feather";
import { Link } from "react-router-dom";

function LoginView() {
    return (
        // < !--page - wrapper Start-- >
        <section>
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-12">
                        <div className="login-card">
                            <form className="theme-form login-form">
                                <h4>FOLO Education</h4>
                                <h6>Bon retour parmi nous ! Connectez vous ici.</h6>
                                <div className="form-group">
                                    <label>Identifiant</label>
                                    <div className="input-group"><span className="input-group-text">
                                        <FeatherIcon.Mail />
                                    </span>
                                        <input className="form-control" type="email" required="" placeholder="Email / Nom d'utilisateur" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Mot de passe</label>
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <FeatherIcon.Lock />
                                        </span>
                                        <input className="form-control" type="password" name="login[password]" required="" placeholder="*********" />
                                        <div className="show-hide"><span className="show">                         </span></div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="checkbox">
                                        <input id="checkbox1" type="checkbox" />
                                        <label for="checkbox1">Rester connecté</label>
                                    </div><Link className="link" to="/reset-password">Mot de passe oublié ?</Link>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary btn-block" type="submit">Se connecter</button>
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