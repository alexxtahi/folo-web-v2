class User {
    constructor(json) {
        this.accessToken = json.access_token ?? null;
        this.id = json.user.id ?? null;
        this.name = json.user.name ?? null;
        this.lastname = json.user.lastname ?? null;
        this.email = json.user.email ?? null;
        this.code = json.user.code ?? null;
        this.username = json.user.username ?? null;
        this.userType = json.user.user_type ?? null;
        this.dob = json.user.dob ?? null;
        this.gender = json.user.gender ?? null;
        this.photo = json.user.photo ?? null;
        this.phone = json.user.phone ?? null;
        this.phone2 = json.user.phone2 ?? null;
        this.address = json.user.address ?? null;
    }
    // Statics
    static authUser = localStorage.getItem('authUser') !== null ? JSON.parse(localStorage.getItem('authUser')) : null;
    // Methods

};

export default User;