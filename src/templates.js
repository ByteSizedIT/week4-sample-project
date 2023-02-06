function layout(title, content) {
  return /*html*/ `
      <!doctype html>
        <html>
          <head>
            <title>${title}</title>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="./style.css">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Roboto&display=swap" rel="stylesheet">
            <script src="https://kit.fontawesome.com/b75e7b8d5b.js" crossorigin="anonymous"></script>
          </head>
          <body>
            <main>
              ${content}
            </main>
            <footer></footer>
            <script src="./script.js"></script>
          </body>
        </html>
      `;
}

function homeTemplate(user, GITHUB_LOGIN_URL) {
  const title = "FAC Reviews";
  const content = /*html*/ `
        ${calcNav(user)}
        <h2>Food & Community Vibes</h2>
        <h3>...featuring local places to eat, drink and socialise</h3>
        
        <p>
          ${
            user
              ? `Welcome back ${user}, check out the latest reviews by Founders and Coders alumni, or add one or two of your own!`
              : `Check out the latest reviews below or sign in to leave your own!`
          }
        </p>
  
        <!-- Sign-up Modal -->
        <div id="signUpModal" class="modal">
          <!-- Modal content -->
          <div class="modal-content">
            <span id="closeSignUp" class="close">&times;</span>
            <h2>Sign up to F&CVibes</h2>
            <form id="signUpForm">
              <label for="name">Name<sup aria-hidden="true">*</sup></label>
              <input id="name" required/>
              <label for="cohort">Cohort</label><input id="cohort"/>
              <label for="signEmail">Email<sup aria-hidden="true">*</sup></label>
              <input id="signEmail" type="email" required/>
              <label for="signPassword">Password<sup aria-hidden="true">*</sup></label>
              <input id="signPassword" type="password" aria-describedby="signPasswordHelp" required/>
              <span id="signPasswordHelp">Password must be atleast 10 chars long</span>
              
            </form>
            <button form="signUpForm" class="btn modal-btn blue-btn">Sign up with email</button>
            <a href="${GITHUB_LOGIN_URL}" class="btn modal-btn orange-btn"><i class="fa fa-github"></i>  Sign up with GitHub</a>
          </div>
        </div>
  
        <!-- Log-in Modal -->
        <div id="logInModal" class="modal">
          <!-- Modal content -->
          <div class="modal-content">
            <span id="closeLogIn" class="close">&times;</span>
            <h2>Log in to F&CVibes</h2>
            <form id="logInForm">
              <label for="logEmail">Email<sup aria-hidden="true">*</sup></label>
              <input id="logEmail" type="email" required/>
              <label for="logPassword">Password<sup aria-hidden="true">*</sup></label>
              <input id="logPassword" type="password" required/>   
            </form>
            <button form="logInForm" class="btn modal-btn blue-btn">Log in with email</button> 
            <a href="${GITHUB_LOGIN_URL}" class="btn modal-btn orange-btn"><i class="fa fa-github"></i>  Log in with GitHub</a>
          </div>
        </div>
      `;
  return layout(title, content);
}

function calcNav(user) {
  return /*html*/ `<nav>
      <h1>F&CVibes</h1>
      ${
        user
          ? `<form action="/log-out" method="post">
              <button class="btn blue-btn">Log out</button>
             </form>`
          : `<button class="btn blue-btn" id="openSignUp">Sign Up</button>
            <button class="btn orange-btn" id="openLogIn">Log In</button>`
      }
    </nav>`;
}

module.exports = { homeTemplate };
