const LoginForm = () => {
    return (
        <div>
            <h2>Log In</h2>
            <form className="form">
                <label className="form-label" htmlFor="email">
                    Email:
                </label>
                <input
                    className="form-control"
                    type="email"
                    name="email"
                ></input>
                <label className="form-label" htmlFor="password">
                    Password:
                </label>
                <input
                    className="form-control"
                    type="password"
                    name="password"
                ></input>
                <button className="mt-2 btn btn-primary">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
