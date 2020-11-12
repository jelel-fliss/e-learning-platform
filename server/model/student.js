class Student {

    constructor(id, email, first_name, last_name, birth_place, birth_date, class_group, address) {
        this.id = id;
        this.email = email;
        this.first_name = first_name;
        this.last_name = last_name;
        this.birth_date = birth_date;
        this.birth_place = birth_place;
        this.class_group = class_group;
        this.address = address;
    }
}

module.exports = Student;