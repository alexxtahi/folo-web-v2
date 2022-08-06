class User {
    constructor(json, accessToken = null) {
        this.accessToken = accessToken ?? null;
        this.id = json.id ?? null;
        this.name = json.name ?? null;
        this.lastname = json.lastname ?? null;
        this.email = json.email ?? null;
        this.code = json.code ?? null;
        this.username = json.username ?? null;
        this.userType = json.user_type ?? null;
        this.dob = json.dob ?? null;
        this.gender = json.gender ?? null;
        this.photo = json.photo ?? null;
        this.phone = json.phone ?? null;
        this.phone2 = json.phone2 ?? null;
        this.address = json.address ?? null;
    }
    // Statics
    static authUser = localStorage.getItem('authUser') !== null ? JSON.parse(localStorage.getItem('authUser')) : null;
    // Methods

};

export default User;