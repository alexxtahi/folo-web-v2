import * as FeatherIcon from "react-feather";
import { Link } from "react-router-dom";

function ResetPasswordView() {
    return (
        // < !--page - wrapper Start-- >
        <section>
            <div className="container-fluid p-0">
                <div className="row m-0">
                    <div className="col-12 p-0">
                        <div className="login-card">
                            <div className="login-main">
                                <form className="theme-form login-form">
                                    <h4 className="mb-3">Réinitialisez votre mot de passe</h4>
                                    <h6>Entrez votre adresse mail et un code de réinitialisation vous sera envoyé.</h6>
                                    <div className="form-group">
                                        <label>Adresse mail</label>
                                        <div className="input-group"><span className="input-group-text">
                                            <FeatherIcon.Mail />
                                        </span>
                                            <input className="form-control" type="email" required="" placeholder="Email / Nom d'utilisateur" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-primary btn-block" type="submit">Envoyer</button>
                                    </div>
                                    <div className="form-group"><span className="reset-password-link">Vous n'avez rien reçu ?  <a className="btn-link text-danger" href="javascript:void(0)">Renvoyer le code</a></span></div>
                                    <div className="form-group">
                                        <label>Code de réinitalisation</label>
                                        <div className="row">
                                            <div className="col">
                                                <input className="form-control text-center opt-text" type="text" value="00" maxlength="2" />
                                            </div>
                                            <div className="col">
                                                <input className="form-control text-center opt-text" type="text" value="00" maxlength="2" />
                                            </div>
                                            <div className="col">
                                                <input className="form-control text-center opt-text" type="text" value="00" maxlength="2" />
                                            </div>
                                        </div>
                                    </div>
                                    <h6>Créer un nouveau mot de passe</h6>
                                    <div className="form-group">
                                        <label>Nouveau mot de passe</label>
                                        <div className="input-group"><span className="input-group-text"> <FeatherIcon.Lock /></span>
                                            <input className="form-control" type="password" name="login[password]" required="" placeholder="*********" />
                                            <div className="show-hide"><span className="show"></span></div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Confirmation du mot de passe</label>
                                        <div className="input-group"><span className="input-group-text"> <FeatherIcon.Lock /></span>
                                            <input className="form-control" type="password" name="login[password]" required="" placeholder="*********" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="checkbox">
                                            <input id="checkbox1" type="checkbox" />
                                            <label className="text-muted" for="checkbox1">Me connecter</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-primary btn-block" type="submit">Valider                          </button>
                                    </div>
                                    <p>Vous connaissez déjà votre mot de passe ?<Link className="ms-2" to="/login">Connectez vous</Link></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        //<!--page - wrapper end-- >
    );
}

export default ResetPasswordView;