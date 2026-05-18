import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore.js";
import { useForm } from "../Hooks/useForm.js";
import { Eye, EyeOff, User } from "lucide-react";
import "./Form.css";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState({
    type: "",
    text: "",
  });
  const { Login, loading } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/profile";
  const { handleChanges, formData, resetForm } = useForm({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await Login(formData);
      setMessage({
        text: res.message,
        type: "success",
      });
      resetForm();
      navigate(from, {
        replace: true,
      });
    } catch (error) {
      setMessage({
        text: error.message,
        type: "error",
      });
    }
  };

  return (
    <div className="page-bg">
      <div className="main-container">
        <span className="bg-animate" />
        <div className="form-box" style={{ left: 0 }}>
          <div className="animation" style={{ "--i": 17 }}>
            <h2>Login</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-box animation" style={{ "--i": 18 }}>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChanges}
                required
              />
              <label>Email</label>
              <User className="icon" size={20} />
            </div>
            <div className="input-box animation" style={{ "--i": 19 }}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChanges}
                required
              />
              <label>Password</label>
              <button
                type="button"
                className="eye-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {message.text && (
              <p className={`form-message ${message.type}`}>{message.text}</p>
            )}

            <button
              type="submit"
              className="btn animation"
              style={{ "--i": 20 }}
              disabled={loading}
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </form>

          <div className="logreg-link animation" style={{ "--i": 21 }}>
            <p>
              Don't have an account?{" "}
              <Link to="/register" className="switch-link">
                Sign Up
              </Link>
            </p>
          </div>
        </div>

        <div className="info-text" style={{ right: 0 }}>
          <div className="animation" style={{ "--i": 17 }}>
            <h2>
              WELCOME
              <br />
              BACK!
            </h2>
            <p>
              {" "}
              Sign in to continue managing your products, orders, customers, and
              admin dashboard securely.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
