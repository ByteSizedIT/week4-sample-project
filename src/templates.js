function layout(title, content) {
  return /*html*/ `
    <!doctype html>
      <html>
        <head>
          <title>${title}</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link rel="stylesheet" href="./style.css">
        </head>
        <body>
          ${content}
        </body>
      </html>
    `;
}

function homeTemplate(user, LOGIN_URL) {
  const title = "FAC Reviews";
  const content = user
    ? /*html*/ `
      <h1>Welcome back ${user}</h1>
      <h2>Reviewed by FaC</h2>
      <form action="/log-out" method="post"><button>Log out</button></form>
    `
    : /*html*/ `
      <nav>
        <a href="${LOGIN_URL}">Log in with GitHub</a>
      </nav>
      <h1>Welcome</h1>
    `;
  return layout(title, content);
}

module.exports = { homeTemplate };
