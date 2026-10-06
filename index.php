<?php
// If dist/index.html exists, serve the modern React build
if (file_exists(__DIR__ . '/dist/index.html')) {
    $content = file_get_contents(__DIR__ . '/dist/index.html');
    // Adjust relative asset paths for subdirectory hosting if needed
    $content = str_replace('href="/assets/', 'href="dist/assets/', $content);
    $content = str_replace('src="/assets/', 'src="dist/assets/', $content);
    echo $content;
    exit;
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="refresh" content="0; url=http://localhost:5173/" />
    <title>Redirecting to Vite React App...</title>
</head>
<body>
    <p>Opening TPR Mike O React App at <a href="http://localhost:5173/">http://localhost:5173/</a>...</p>
</body>
</html>
