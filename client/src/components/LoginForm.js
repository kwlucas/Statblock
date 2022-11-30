function LoginForm() {
  const loggedIn = true;
  return (
    <dialog id="login-modal" open={loggedIn ? true : false}>
      <form id="login-form">
        <section class="login-container">
          <div class="form-title">Login</div>
          <div class="input-section">
            <label for="textEmail" id="label-input">
              Email
            </label>
            <input type="text" id="textEmail" class="inputBox" />
          </div>
          <div class="input-section">
            <label for="textPassword" id="label-input">
              Password
            </label>
            <input type="text" id="textPassword" class="inputBox" />
          </div>
          <div class="button-section">
            <button class="btn" type="submit">
              Submit
            </button>
          </div>

          <div class="sign-up-section">
            Don't have an account yet,
            <a href="/" class="sign-up-link">
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
