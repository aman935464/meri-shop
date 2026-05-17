import React, { useState } from "react";
import { useForm } from "../Hooks/useForm";
import { useAuthStore } from "../store/authStore";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { EyeOff, Eye, User, Mail } from "lucide-react";
import "./lkjh.css";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const from = location.state?.from?.pathname || "/profile";
  const [message, setMessage] = useState({
    type: "",
    text: "",
  });
  const { formData, handleChanges, resetForm } = useForm({
    name: "",
    email: "",
    password: "",
  });
  const { Register, loading } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await Register(formData);
      setMessage({
        text: res.message,
        type: res.success,
      });
      console.log("regi", res.message);
      resetForm();
      console.log("before navigate");
      navigate(from, {
        replace: true,
      });
      console.log("after navigate");
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

        <div className="info-text" style={{ left: 0 }}>
          <div className="animation" style={{ "--i": 17 }}>
            <h2>
              HELLO, <br />
              WELCOME!
            </h2>
            <p>
              Create your account and start managing your platform with powerful
              admin tools and secure access.
            </p>
          </div>
        </div>

        <div className="form-box" style={{ right: 0 }}>
          <div className="animation" style={{ "--i": 17 }}>
            <h2>Sign Up</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-box animation" style={{ "--i": 18 }}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChanges}
                required
              />
              <label>Username</label>
              <User className="icon" size={20} />
            </div>

            {/* Email */}
            <div className="input-box animation" style={{ "--i": 19 }}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChanges}
                required
              />
              <label>Email</label>
              <Mail className="icon" size={20} />
            </div>

            {/* Password */}
            <div className="input-box animation" style={{ "--i": 20 }}>
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
              style={{ "--i": 21 }}
              disabled={loading}
            >
              {loading ? "Loading..." : "Sign Up"}
            </button>
          </form>

          <div className="logreg-link animation" style={{ "--i": 22 }}>
            <p>
              Already have an account?{" "}
              <Link to="/login" className="switch-link">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
