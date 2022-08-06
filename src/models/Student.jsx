import User from "./User";
import ClassSection from "./ClassSection";
// Model
class Student {
    constructor(json) {
        this.id = json.id ?? null;
        this.user = new User(json.user) ?? new User({});
        this.classSection = new ClassSection(json.class_section) ?? new ClassSection({});
        this.parentId = json.my_parent_id ?? null;
        this.dormId = json.dorm_id ?? null;
        this.session = json.session ?? null;
        this.age = json.age ?? null;
        this.yearAdmitted = json.year_admitted ?? null;
        this.grad = json.grad ?? null;
        this.gradDate = json.grad_date ?? null;
    }
    // Methods
    static fromArray(array) {
        return array.map(json => new Student(json));
    }
};

export default Student;