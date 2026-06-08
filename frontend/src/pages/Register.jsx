import { useState } from "react";

function Register() {
  const [step, setStep] = useState(1);
  const [fileName, setFileName] = useState("");

  function handleNext(e) {
    const form = e.target.closest("form");

    if (form.checkValidity()) {
      setStep(2);
    } else {
      form.reportValidity();
    }
  }

  return (
    <main className="form-section">
      <div className="container">
        <div className="form-wrapper">
          <h1>Sign Up</h1>

          <form action="">
            <div className={`form-step step-1 ${step === 1 ? "active" : ""}`}>
              <div className="inputs">
                <input type="text" placeholder="Full Name" required />
                <input type="text" placeholder="Role" required />
                <input type="text" placeholder="Phone" required />
                <input type="email" placeholder="Email Address" required />
                <input type="password" placeholder="Password" required />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  required
                />
              </div>

              <div className="buttons-wrapper">
                <button
                  type="button"
                  onClick={handleNext}
                  className="btn btn-primary"
                >
                  Next
                </button>
              </div>
            </div>

            <div className={`form-step step-2 ${step === 2 ? "active" : ""}`}>
              <div className="image-upload-wrapper">
                <label htmlFor="profile_image">Upload profile image</label>

                <input
                  type="file"
                  id="profile_image"
                  onChange={(e) => setFileName(e.target.files[0]?.name || "")}
                />

                {fileName && <p className="file-name">{fileName}</p>}
              </div>

              <div className="buttons-wrapper">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="btn btn-back"
                >
                  Back
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
            <p className="login-cta">
              Already have an account? Click <a href="/login">here</a> to login
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Register;
