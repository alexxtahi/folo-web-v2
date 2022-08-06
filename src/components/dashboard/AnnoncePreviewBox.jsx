import { dateDiff, getTodayDate } from '../../utils/functions';

function AnnoncePreviewBox(props) {
    // Properties
    let annonces = [];
    props.annonces.forEach(annonce => {
        // console.log('annonce enreg: ' + annonce.dateEnreg); //! debug
        annonces.push(
            <li className="media"><span className="me-3 font-primary">A</span>
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
                                    <div className="setting-primary"><i
                                        className="icon-settings"></i></div>
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
                        <div className="code-box-copy">
                            <button className="code-box-copy__btn btn-clipboard"
                                data-clipboard-target="#recent-activity" title="Copy"><i
                                    className="icofont icofont-copy-alt"></i></button>
                            <pre><code className="language-html" id="recent-activity">&lt;div className="card"&gt;
                                &lt;div className="card-header pb-0 d-flex justify-content-between align-items-center"&gt;
                                &lt;h5 className="text-uppercase"&gt;Recent Activity&lt;/h5&gt;
                                &lt;div className="setting-list"&gt;
                                &lt;ul className="list-unstyled setting-option"&gt;
                                &lt;li&gt;&lt;div className="setting-primary"&gt;&lt;i className="icon-settings"&gt;&lt;/i&gt;&lt;/div&gt;&lt;/li&gt;
                                &lt;li&gt;&lt;i className="view-html fa fa-code font-primary"&gt;&lt;/i&gt;&lt;/li&gt;
                                &lt;li&gt;&lt;i className="icofont icofont-maximize full-card font-primary"&gt;&lt;/i&gt;&lt;/li&gt;
                                &lt;li&gt;&lt;i className="icofont icofont-minus minimize-card font-primary"&gt;&lt;/i&gt;&lt;/li&gt;
                                &lt;li&gt;&lt;i className="icofont icofont-refresh reload-card font-primary"&gt;&lt;/i&gt;&lt;/li&gt;
                                &lt;li&gt;&lt;i className="icofont icofont-error close-card font-primary"&gt;&lt;/i&gt;&lt;/li&gt;
                                &lt;/ul&gt;
                                &lt;/div&gt;
                                &lt;/div&gt;
                                &lt;div className="card-body"&gt;
                                &lt;ul className="crm-activity"&gt;
                                &lt;li className="media"&gt;&lt;span className="me-3 font-primary"&gt;A&lt;/span&gt;
                                &lt;div className="align-self-center media-body"&gt;
                                &lt;h6 className="mt-0"&gt;Any desktop publishing packages and web page editors.&lt;/h6&gt;
                                &lt;ul className="dates"&gt;
                                &lt;li&gt;25 July 2017&lt;/li&gt;
                                &lt;li&gt;20 hours ago&lt;/li&gt;
                                &lt;/ul&gt;
                                &lt;/div&gt;
                                &lt;/li&gt;
                                &lt;li className="media"&gt;
                                &lt;span className="me-3 font-secondary"&gt;C&lt;/span&gt;
                                &lt;div className="align-self-center media-body"&gt;
                                &lt;h6 className="mt-0"&gt;Contrary to popular belief, Lorem Ipsum is not simply. &lt;/h6&gt;
                                &lt;ul className="dates"&gt;
                                &lt;li&gt;25 July 2017&lt;/li&gt;
                                &lt;li&gt;20 hours ago &lt;/li&gt;
                                &lt;/ul&gt;
                                &lt;/div&gt;
                                &lt;/li&gt;
                                &lt;li className="media"&gt;
                                &lt;span className="me-3 font-primary"&gt;E&lt;/span&gt;
                                &lt;div className="align-self-center media-body"&gt;
                                &lt;h6 className="mt-0"&gt;Established fact that a reader will be distracted &lt;/h6&gt;
                                &lt;ul className="dates"&gt;
                                &lt;li&gt;25 July 2017&lt;/li&gt;
                                &lt;li&gt;20 hours ago&lt;/li&gt;
                                &lt;/ul&gt;
                                &lt;/div&gt;
                                &lt;/li&gt;
                                &lt;li className="media"&gt;
                                &lt;span className="me-3 font-secondary"&gt;H&lt;/span&gt;
                                &lt;div className="align-self-center media-body"&gt;
                                &lt;h6 className="mt-0"&gt;H-Code - A premium portfolio template from ThemeZaa &lt;/h6&gt;
                                &lt;ul className="dates"&gt;
                                &lt;li&gt;25 July 2017&lt;/li&gt;
                                &lt;li&gt;20 hours ago &lt;/li&gt;
                                &lt;/ul&gt;
                                &lt;/div&gt;
                                &lt;/li&gt;
                                &lt;li className="media"&gt;
                                &lt;span className="me-3 font-primary"&gt;T&lt;/span&gt;
                                &lt;div className="align-self-center media-body"&gt;
                                &lt;h6 className="mt-0"&gt;There isn't anything embarrassing hidden.&lt;/h6&gt;
                                &lt;ul className="dates"&gt;
                                &lt;li&gt;25 July 2017&lt;/li&gt;
                                &lt;li&gt;20 hours ago&lt;/li&gt;
                                &lt;/ul&gt;
                                &lt;/div&gt;
                                &lt;/li&gt;
                                &lt;li className="media"&gt;
                                &lt;div className="align-self-center media-body"&gt;
                                &lt;ul className="dates"&gt;
                                &lt;li&gt;25 July 2017&lt;/li&gt;
                                &lt;li&gt;20 hours ago&lt;/li&gt;
                                &lt;/ul&gt;
                                &lt;/div&gt;
                                &lt;/li&gt;
                                &lt;/ul&gt;
                                &lt;/div&gt;
                                &lt;/div&gt;</code></pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnnoncePreviewBox;
