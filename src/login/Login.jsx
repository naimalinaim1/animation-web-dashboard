import { useContext, useState } from "react";
import { AuthContext } from "../systems/provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate("");

  const handleLoginForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const pattern =
      /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!pattern.test(password)) {
      setError("Email or password not match!!!");
      return;
    } else {
      setError("");
    }

    loginUser(email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        setError("Email or password not match!!");
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Login Now! is an innovative online platform designed for seamless
            and secure user access. Our website provides a user-friendly
            interface for effortless logins, prioritizing user experience and
            privacy.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLoginForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <p className="text-red-500">{error}</p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
