export default function middleware(request) {
  const url = new URL(request.url);

  // Check for auth cookie
  const cookie = request.headers.get('cookie') || '';
  if (cookie.includes('find_auth=authorized')) {
    return undefined; // Allow through
  }

  // Check if password is being submitted
  if (url.searchParams.get('password') === 'Dogs') {
    return new Response(null, {
      status: 302,
      headers: {
        'Location': url.pathname,
        'Set-Cookie': 'find_auth=authorized; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400',
      },
    });
  }

  // Show password form
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FiND by Fi — Access</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif;
      background: #1A1A2E;
      color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
    }
    .auth-container {
      text-align: center;
      padding: 40px;
      background: #2D2D44;
      border-radius: 20px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.3);
      max-width: 360px;
      width: 90%;
    }
    .auth-logo {
      font-size: 28px;
      font-weight: 700;
      color: #FFD54F;
      margin-bottom: 8px;
    }
    .auth-subtitle {
      font-size: 14px;
      color: #9E9E9E;
      margin-bottom: 24px;
    }
    .auth-input {
      width: 100%;
      padding: 14px 16px;
      border: 2px solid #3D3D54;
      border-radius: 12px;
      background: #1A1A2E;
      color: #FFFFFF;
      font-size: 16px;
      outline: none;
      margin-bottom: 16px;
      transition: border-color 0.2s;
    }
    .auth-input:focus { border-color: #FFD54F; }
    .auth-input::placeholder { color: #757575; }
    .auth-button {
      width: 100%;
      padding: 14px;
      background: #FFD54F;
      color: #1A1A2E;
      border: none;
      border-radius: 12px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: opacity 0.2s;
    }
    .auth-button:hover { opacity: 0.9; }
    .auth-error {
      color: #E91E63;
      font-size: 13px;
      margin-top: 12px;
      display: none;
    }
  </style>
</head>
<body>
  <div class="auth-container">
    <div class="auth-logo">FiND by Fi</div>
    <div class="auth-subtitle">Enter password to continue</div>
    <form method="GET">
      <input class="auth-input" type="password" name="password" placeholder="Password" autofocus required />
      <button class="auth-button" type="submit">Enter</button>
    </form>
    ${url.searchParams.has('password') ? '<div class="auth-error" style="display:block">Incorrect password</div>' : ''}
  </div>
</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: { 'Content-Type': 'text/html' },
  });
}

export const config = {
  matcher: '/((?!_next|favicon.ico).*)',
};
