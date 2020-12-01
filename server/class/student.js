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

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getFirstName() {
        return this.first_name;
    }

    getLastName() {
        return this.last_name;
    }

    getAddress() {
        return this.address;
    }

    getClassGroup() {
        return this.class_group;
    }

    getBirthPlace() {
        return this.birth_place;
    }

    getBirthDate() {
        return this.birth_date;
    }
    
    setFirstName(first_name) {
        this.first_name = first_name;
    }

    setLastName(last_name) {
        this.last_name = last_name;
    }

    setAddress(address) {
        this.address = address;
    }

    setClassGroup(class_group) {
        this.class_group = class_group;
    }

    setBirthDate(birth_date) {
        this.birth_date = birth_date;
    }

    setBirthPlace(birth_place) {
        this.birth_place = birth_place;
    }
    


}

module.exports = Student;