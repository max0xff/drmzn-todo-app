export const placeholder = (data) => {
  const { build, meta, content } = data;
  return `<!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${meta.og.title}</title>
      <link rel="preload" href="/main.${build.version}.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
      <noscript><link rel="stylesheet" href="/main.${build.version}.min.css"></noscript>
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
      <link rel="manifest" href="/manifest.json">
      <style>@charset "UTF-8";*,::after,::before{-webkit-user-drag:none;-webkit-app-region:no-drag}body,html{margin:0;padding:0}body{font:14px 'Helvetica Neue',Helvetica,Arial,sans-serif;line-height:1.4em;background:#f5f5f5;color:#4d4d4d;min-width:230px;max-width:550px;margin:0 auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:300}:focus{outline:0}.todoapp{background:#fff;margin:130px 0 40px 0;position:relative;box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.todoapp input::-webkit-input-placeholder{font-style:italic;font-weight:300;color:#e6e6e6}.todoapp input::-moz-placeholder{font-style:italic;font-weight:300;color:#e6e6e6}.todoapp h1{position:absolute;top:-155px;width:100%;font-size:100px;font-weight:100;text-align:center;color:rgba(175,47,47,.15);-webkit-text-rendering:optimizeLegibility;-moz-text-rendering:optimizeLegibility;text-rendering:optimizeLegibility}.new-todo{position:relative;margin:0;width:100%;font-size:24px;font-family:inherit;font-weight:inherit;line-height:1.4em;border:0;color:inherit;padding:6px;border:1px solid #999;box-shadow:inset 0 -1px 5px 0 rgba(0,0,0,.2);box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.new-todo{padding:16px 16px 16px 60px;border:none;background:rgba(0,0,0,.003);box-shadow:inset 0 -2px 1px rgba(0,0,0,.03)}.info{margin:65px auto 0;color:#bfbfbf;font-size:10px;text-shadow:0 1px 0 rgba(255,255,255,.5);text-align:center}.info p{line-height:1}.info a{color:inherit;text-decoration:none;font-weight:400}</style>
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
      <script defer crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
      <script defer crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
      <script defer type="text/javascript" src="/main.${build.version}.min.js"></script>
    </body>
  </html>`;
};
