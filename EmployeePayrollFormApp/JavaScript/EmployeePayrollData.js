class EmployeePayrollJsData{
    get id(){
        return this._id;
    }

    set id(id){
        this._id = id;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }

    get profilePic(){
        return this._profilePic;
    }

    set profilePic(profilePic){
        this._profilePic = profilePic;
    }

    get gender(){
        return this._gender;
    }

    set gender(gender){
        this._gender = gender;
    }

    get department(){
        return this._department;
    }

    set department(department){
        this._department = department;
    }

    get salary(){
        return this._note;
    }

    set salary(salary){
        this._salary = salary;
    }

    get note(){
        return this._note;
    }

    set note(note){
        this._note = note;
    }

    get startDate(){
        return this._startDate;
    }

    set startDate(startDate){
        let currentDate = new Date();
        if(startDate > currentDate){
            throw "Starting Date is a Future Date";
        }
        var diff = Math.abs(currentDate.getDate() - startDate.getTime());
        if (diff / (1000 * 60 * 60 * 24) > 30){
            throw "Starting Date is beond 30 days";
        }
        this._startDate = startDate;
    }

    toString(){
        const options = { year: 'numeric', month: 'long', day: 'numeric'};
        const empDate = !this.startDate ? "undefined" : this.startDate.toLocaleDateString("en-us", options);
        return "\nID = " + this.id + ", \Name = " + this.name + ", \nGender = " + this.gender + ", \nProfile Pic = " + this.profilePic + 
                    ", \nDepartment = " + this.department + ", \nSalary = " + this.salary + ", \nStart Date = " + empDate + ", \nNote = " + this.note; 
    }
}