
var registerForm = document.getElementById('registerForm');

if(registerForm){
    registerForm.addEventListener('submit',function(e){
    e.preventDefault();

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var cpassword = document.getElementById('cpassword');

    if(password.value !== cpassword.value){
        alert("Passwords do not match");
        return
    }

    const newUser = {
        name:name.value,
        email:email.value,
        password:password.value,
        createdAt : Date.now(),
        profileImg : '',
        quiz_attempted : []
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    users.push(newUser)
    
    localStorage.setItem('users',JSON.stringify(users)) 

    window.location.href = 'login.html'
})
}


var loginForm = document.getElementById('loginForm');
if(loginForm){
    loginForm.addEventListener('submit',function(e){
      e.preventDefault();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value;

    var users = JSON.parse(localStorage.getItem('users'));

    var emailExist = users.find((user)=>user.email === email);
    
    if(!emailExist){
        alert("Email doesn't Exist!");
        return
    }

    var user = users.find((user)=>user.email === email && user.password === password);
    if(!user){
alert("Wrong password!");
        return
    }

    localStorage.setItem('loggedInUser',JSON.stringify(user));

    window.location.href = 'quizzes.html'
})
}