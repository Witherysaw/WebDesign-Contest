
window.addEventListener("load", checkLoginStatus);

  function toggleSideMenu() {
      var sideMenu = document.querySelector('.side-menu');
      sideMenu.classList.toggle('open');
  }
  function toggleSideMenu2() {
      var sideMenu2 = document.querySelector('.side-menu2');
      sideMenu2.classList.toggle('open2');
  }

function setMenuLink(html) {
  var signupLink = document.getElementById("Signuplink");
  signupLink.innerHTML = html;
}

function setSideMenu(html) {
  var sidemenu = document.getElementById("sidemenu");
  sidemenu.innerHTML = html;
}
  

// Function to handle the login event
function handleLogin() {
  // Perform login logic here
  
  // Change the menu link to "Account Settings" and set the corresponding href
  // setMenuLink("<a href='accountinfo.html' id='Signuplink'>Account</a>");

  //Change the side menu
  // setSideMenu("<button class='side-menu-button' onclick='toggleSideMenu()'><i class='fas fa-user'></i></button> \
  //     <div class='side-menu'> \
  //     <div class='profile-section'> \
  //     <div class='account-info'> \
  //       <h3 class='account-name'>John Doe</h3> \
  //       <p class='gmail'>johndoe@gmail.com</p> \
  //     </div> \
  //   </div> \
  //   <a href='accountinfo' ><button class='close-menu-button' id=''>Account Settings</button></a> \
  //   <a href='' ><button class='close-menu-button' id='logoutButton' onclick='handleLogout()'>Logout</button></a> \
  //   <button class='close-menu-button' onclick='toggleSideMenu()'>Close Menu</button> \
  // </div>");

  
  // Store the login status in localStorage
  localStorage.setItem("loggedInn", "true");
}


// Function to handle the logout event
function handleLogout() {
  // Perform logout logic here
  
  // Change the menu link back to "SIGN UP" and set the corresponding href
  setMenuLink("<a class='menuitem2' href='login.html' id='Signuplink'>Login</a>");

 setSideMenu("<button class='side-menu-button' onclick='toggleSideMenu2()'><i class='fas fa-sign-in'></i></button> \
    <div class='side-menu2'> \
    <a href='login.html' ><button class='close-menu-button' >Login</button></a> \
    <button class='close-menu-button' onclick='toggleSideMenu2()'>Close Menu</button> \
  </div>");


  // Remove the login status from localStorage
  localStorage.setItem("loggedInn", "false");
}

// Function to check and load the persisted login status
function checkLoginStatus() {
  var loggedIn = localStorage.getItem("loggedInn");
  
  if (loggedIn === "true") {
    // User is logged in, set the menu link to "Account Settings" with the appropriate href
    setMenuLink("<a href='accountinfo.html' >Account</a>");
    setSideMenu("<button class='side-menu-button' onclick='toggleSideMenu()'><i class='fas fa-user'></i></button> \
      <div class='side-menu'> \
      <div class='profile-section'> \
      <div class='account-info'> \
        <h3 class='account-name'>John Doe</h3> \
        <p class='gmail'>johndoe@gmail.com</p> \
      </div> \
    </div> \
    <a href='accountinfo.html' ><button class='close-menu-button' id=''>Account Settings</button></a> \
    <a href='' ><button class='close-menu-button' id='logoutButton' onclick='handleLogout()'>Logout</button></a> \
    <button class='close-menu-button' onclick='toggleSideMenu()'>Close Menu</button> \
    </div>");
    showCommentSection();
  } 
  else {
    // User is not logged in, set the menu link to "SIGN UP" with the appropriate href
    setMenuLink("<a class='menuitem2' href='login.html' id='Signuplink'>Login</a>");
    setSideMenu("<button class='side-menu-button' onclick='toggleSideMenu2()'><i class='fas fa-sign-in'></i></button> \
    <div class='side-menu2'> \
    <a href='login.html' ><button class='close-menu-button' >Login</button></a> \
    <button class='close-menu-button' onclick='toggleSideMenu2()'>Close Menu</button> \
  </div>");
    hideCommentSection();
  }
}



// // Event listener for the login button click
// document.getElementById("loginButton").addEventListener("click", handleLogin);

// // Event listener for the logout button click
// document.getElementById("logoutButton").addEventListener("click", handleLogout);

// Check and load the login status on page load
checkLoginStatus();


function getQueryParam(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  return null;
}

function goBack(step) {
            window.history.go(-step);
        }



