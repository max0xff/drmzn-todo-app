export const placeholder = (data) => {
  const { build, meta, content } = data;
  return `<!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${meta.og.title}</title>
      <link rel="stylesheet" href="/main.${build.version}.min.css">
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="description" content="${meta.og.description}">
      <meta name="robots" content="${meta.robots}" />
      <meta property="og:title" content="${meta.og.title}" />
      <meta property="og:image" content="${meta.og.image}" />
      <meta property="og:description" content="${meta.og.description}" />
      <meta property="og:site_name" content="${meta.og.site_name}" />
      <link rel="canonical" href="${meta.canonical}">
    </head>
    <body>
      <div id="root">${content.html}</div>
      <footer class="info">
        <p>Double-click to edit a todo</p>
        <p>Created by <a href="mailto:alex.tzvetanov@gmail.com">Alex Tzvetanov</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
      <script>
        window.__PRELOADED_STATE__ = '${content.preloadedState}';
      </script>
      <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
      <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
      <script type="text/javascript" src="/main.${build.version}.min.js"></script>
    </body>
  </html>`;
};
