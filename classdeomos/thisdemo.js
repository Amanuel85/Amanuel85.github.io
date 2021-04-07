let user = {
    firstname: "John",
    lastname: "Smith",
    getFullName: function() {
        return this.firstname + " " + this.lastname;
    }
};

const fullname = user.getFullName();
console.log(fullname); //John Smith