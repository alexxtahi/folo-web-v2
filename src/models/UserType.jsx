// Model
class UserType {
    constructor(json) {
        this.id = json.id ?? null;
        this.title = json.title ?? null;
        this.name = json.name ?? null;
        this.level = json.level ?? null;
    }
    // Methods
    static fromArray(array) {
        return array.map(json => new UserType(json));
    }
};

export default UserType;