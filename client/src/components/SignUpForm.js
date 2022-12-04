function SignUpForm() {
  const loggedIn = true;
  return (
    <dialog id="signup-modal" open={loggedIn ? true : false}>
      <form id="signup-form">
        <section className="signup-container">
          <div className="form-title">Sign Up</div>
          <div className="input-section">
            <label htmlFor="textUserName" className="label-input">
              User Name
            </label>
            <input type="text" id="textUserName" className="inputBox" />
          </div>
          <div className="input-section">
            <label htmlFor="textEmail" className="label-input">
              Email
            </label>
            <input type="text" id="textEmail" className="inputBox" />
          </div>
          <div className="input-section">
            <label htmlFor="textPassword" className="label-input">
              Password
            </label>
            <input type="text" id="textPassword" className="inputBox" />
          </div>
          <div className="button-section">
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
          <div className="login-section">
            Already have an account?{" "}
            <a href="/login" className="login-link">
              Login
            </a>
          </div>
        </section>
      </form>
    </dialog>
  );
}

export default SignUpForm;
