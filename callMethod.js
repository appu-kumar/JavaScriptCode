function User(email,password){
    this.email = email;
    this.password = password;
}

// call is like extends in class
function UserWithUsername(username,email,password){
      User.call(this,email,password);
      this.username = username;
}

let usernamewala = new UserWithUsername('ak@123','ak@gmail.com','1234');
console.log(usernamewala)
// usernamewala.print();




