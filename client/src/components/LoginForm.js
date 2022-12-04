function LoginForm() {
  const loggedIn = true;
  return (
    <dialog id="login-modal" open={loggedIn ? true : false}>
      <form id="login-form">
        <section className="login-container">
          <div className="form-title">Login</div>
          <div className="input-section">
            <label htmlFor="textEmail" id="label-input">
              Email
            </label>
            <input type="text" id="textEmail" className="inputBox" />
          </div>
          <div className="input-section">
            <label htmlFor="textPassword" id="label-input">
              Password
            </label>
            <input type="text" id="textPassword" className="inputBox" />
          </div>
          <div className="button-section">
            <button className="btn" type="submit">
              Submit
            </button>
          </div>

          <div className="sign-up-section">
            Don't have an account yet,
            <a href="/" className="sign-up-link">
              {" "}
              Sign Up
            </a>
          </div>
        </section>
      </form>
    </dialog>
  );
}

export default LoginForm;
