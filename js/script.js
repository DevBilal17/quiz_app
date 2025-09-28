let menuBtn = document.querySelector('header .left button');

menuBtn.addEventListener('click',function(){
    var img = this.querySelector('img');
    
    if(img.getAttribute('src').includes('menus')){
        img.setAttribute('src','/assets/icons/close.png')
    }
    else if(img.getAttribute('src').includes('close')){
        img.setAttribute('src','/assets/icons/menus.png')
    }
     
})


var headerRight = document.querySelector('header .right');

var user = JSON.parse(localStorage.getItem('loggedInUser')) || null;

if(user === null){
    headerRight.innerHTML = `
     <!-- Navigation Bar -->
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Quizzes</a></li>
            <!-- <li><a href="#">Leaderboard</a></li>
            <li><a href="#">Profile</a></li> -->
          </ul>
        </nav>
        <!-- Notification Bell -->
        <div class="notification">
          <div class="bell">
            <img src="/assets/icons/bell.png" alt="brll-icon" />
          </div>
        </div>

       
    `


}
else{
    headerRight.innerHTML = `
     <!-- Navigation Bar -->
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Quizzes</a></li>
            <!-- <li><a href="#">Leaderboard</a></li>
            <li><a href="#">Profile</a></li> -->
          </ul>
        </nav>
        <!-- Notification Bell -->
        <div class="notification">
          <div class="bell">
            <img src="/assets/icons/bell.png" alt="brll-icon" />
          </div>
        </div>

        <!-- Profile -->
        <div class="profile">
          <div class="profile-img">
            <img src="/assets/images/profile-img.png" alt="" />
          </div>
        </div>
    `
}


var profileClick = document.querySelector('.profile');

profileClick.addEventListener('click',function(){
  window.location.href = 'profile.html'
})