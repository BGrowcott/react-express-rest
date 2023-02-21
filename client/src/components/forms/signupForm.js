const SignupForm = () => {
    return (
        <div>
            <h2>Sign Up</h2>
            <form className="form">
                <label className="form-label" htmlFor="email">
                    Email
                </label>
                <input
                    className="form-control"
                    type="email"
                    name="email"
                ></input>
                <label className="form-label">Password</label>
                <input
                    className="form-control"
                    type="password"
                    name="confirmPassword"
                ></input>
                <label className="form-label">Confirm Password</label>
                <input
                    className="form-control"
                    type="password"
                    name="confirmPassword"
                ></input>
                <button className="mt-2 btn btn-primary">Signup</button>
            </form>
        </div>
    );
};
export default SignupForm;
