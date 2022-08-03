import User from "../models/User";
import LoginView from "../views/auth/LoginView";

class AuthMiddleware {
    // Methods
    // Check authentication status
    static checkAuthState() {
        console.log('current path: ' + window.location.pathname); //! debug
        console.log('authenticated user: ' + User.authUser); //! debug
        if (window.location.pathname === '/login' && User.authUser !== null) // If user is already logged in...
            window.location.replace('/');
        if (window.location.pathname !== '/login' && User.authUser === null) // If user isn't logged in...
            window.location.replace('/login');
    }
    // Check status of a given route
    static makePrivate(component) {
        if (User.authUser === null) { // If user isn't logged in...
            return <LoginView />;
        } else {
            return component;
        }
    }
}

export default AuthMiddleware;