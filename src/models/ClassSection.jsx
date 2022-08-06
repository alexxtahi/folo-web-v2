// import User from "./User";
// Model
class ClassSection {
    constructor(json) {
        this.id = json.id ?? null;
        this.name = json.name ?? null;
        // this.myClass = new MyClass(json.my_class) ?? new MyClass({});
        // this.section = new Section(json.section) ?? new Section({});
    }
    // Methods
    static fromArray(array) {
        return array.map(json => new ClassSection(json));
    }
};

export default ClassSection;