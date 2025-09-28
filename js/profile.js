var profileImg = document.getElementById("profileImg");
var profileImgLabel = document.getElementById("profileImgLabel");
profileImg.addEventListener("change", function () {
  const file = this.files[0];

  if (file) {
    let fileReader = new FileReader();

    fileReader.onload = function (e) {
      profileImgLabel.innerHTML = `
            <img  src="${e.target.result}"  alt='profile-img' id='preview-img'/>
            `;


         var user = JSON.parse(localStorage.getItem("loggedInUser"));
    var users = JSON.parse(localStorage.getItem("users"));
    user.profileImg = e.target.result;

    users.forEach((u) => {
      if (u.email === user.email && u.password === user.password) {
        u.profileImg = e.target.result;
      }
    });
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    localStorage.setItem("users", JSON.stringify(users));     
    };

    fileReader.readAsDataURL(file);
  
  }
});

var user = JSON.parse(localStorage.getItem("loggedInUser")) || null;

if (user === null) {
  window.location.href = "login.html";
}
else{
    var about = document.querySelector('.about');
    let year = new Date(user.createdAt).getFullYear()
    about.innerHTML = `
    <h3>${user.name}</h3>
            <p>Quiz Enthusiast</p>
            <p>Joined ${year}</p>
    `
    if(user.profileImg === ''){
        profileImgLabel.innerHTML = user.name[0]
    }
    else{
           profileImgLabel.innerHTML = `
            <img  src="${user.profileImg}"  alt='profile-img' id='preview-img'/>
            `;
    }
}


