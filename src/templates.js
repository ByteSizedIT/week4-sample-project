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

function homeTemplate() {
  const title = "FAC Reviews";
  const content = /*html*/ `
        <h1>Reviewed by FaC</h1>
      `;
  return layout(title, content);
}

module.exports = { homeTemplate };
