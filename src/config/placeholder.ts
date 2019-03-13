export const placeholder = (html, preloadedState, version) => `<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Drmzn • TodoMVC</title>
		<link rel="stylesheet" href="css/base.css">
		<link rel="stylesheet" href="css/index.css">
		<link rel="stylesheet" href="css/app.css">
	</head>
	<body>
		<div id="root">${html}</div>

		<footer class="info">
			<p>Double-click to edit a todo</p>
			<p>Created by <a href="http://todomvc.com">Alex Tzvetanov</a></p>
			<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
		</footer>

		<script>
      window.__PRELOADED_STATE__ = '${preloadedState}';
    </script>

		<script src="js/base.js"></script>
    <script type="text/javascript" src="js/main.${version}.min.js"></script>
  </body>
</html>`;
