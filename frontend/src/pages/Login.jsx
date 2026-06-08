function Login() {
  return (
    <main className="form-section">
      <div className="container">
        <div className="form-wrapper">
          <h1>Login page</h1>
          <form action="/">
            <div className="inputs login-page">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </div>
            <div className="buttons-wrapper">
              <button className="btn btn-primary">Login</button>
            </div>

            <p className="login-cta">
              Don't have an account? Click <a href="/register">here</a> to
              register
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;
