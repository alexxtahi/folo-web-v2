function Alert(props) {
    return (
        <div className="card-body">
            <div className="alert alert-light dark alert-dismissible fade show" role="alert"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-alert-triangle"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12" y2="17"></line></svg>
                <p>{props.message}</p>
                <button className="btn-close" type="button" dataBsDismiss="alert" ariaLabel="Close" dataBsOriginalTitle="" title="" onClick={props.onCloseBtnClick}></button>
            </div>
        </div>
    );
}

export default Alert;