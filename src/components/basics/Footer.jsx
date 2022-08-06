import { getTodayDate } from "../../utils/functions";
// Component
function Footer() {
    return (
        // < !--footer start-- >
        <footer className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 footer-copyright">
                        <p className="mb-0">FOLO {getTodayDate().getFullYear()}</p>
                    </div>
                    <div className="col-md-6">
                        <p className="pull-right mb-0">
                            Développé par BRAINSTATION
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;