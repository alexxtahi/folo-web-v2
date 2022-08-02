export const SERVER_URL = 'http://localhost:8000/api';

export const apiEndpoints = {
    auth: {
        login: `${SERVER_URL}/auth/login`,
        logout: `${SERVER_URL}/auth/logout`,
    }
};