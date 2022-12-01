function SignUpForm() {
  const loggedIn = true;
  return (
    <dialog id="login-modal" open={loggedIn ? true : false}>
      <form id="signup-form">
        <section class="signup-container">
          <div class="form-title">Sign Up</div>
          <div class="input-section">
            <label htmlFor="textUserName" class="label-input">
              User Name
            </label>
            <input type="text" id="textUserName" class="inputBox" />
          </div>
          <div class="input-section">
            <label htmlFor="textEmail" class="label-input">
              Email
            </label>
            <input type="text" id="textEmail" class="inputBox" />
          </div>
          <div class="input-section">
            <label htmlFor="textPassword" class="label-input">
              Password
            </label>
            <input type="text" id="textPassword" class="inputBox" />
          </div>
          <div class="button-section">
            <button class="btn" type="submit">
              Submit
            </button>
          </div>
          <div class="login-section">
            Already have an account?{" "}
            <a href="/login" class="login-link">
              Login
            </a>
          </div>
        </section>
      </form>
    </dialog>
  );
}

export default SignUpForm;
