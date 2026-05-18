import React from "react";
import { useNavigate } from "react-router-dom";
import LogoutPage from "../../Pages/Logout";
import { Mail, User, ShieldCheck, LogOut } from "lucide-react";
import "./profile.css";
import { useAuthStore } from "../../store/authStore";

function Profile() {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-top">
          <div className="profile-avatar">
            {user?.name?.charAt(0)?.toUpperCase()}
          </div>

          <h1>{user?.name}</h1>

          <p>Welcome to your profile dashboard</p>
        </div>
        <div className="profile-details">
          <div className="profile-item">
            <div>
              <User className="profile-icon" />
              <span>Full Name</span>
            </div>
            <h3>{user?.name}</h3>
          </div>

          <div className="profile-item">

            <div>
            <Mail className="profile-icon" />
              <span>Email Address</span>
            </div>
              <h4>{user?.email}</h4>
          </div>

          <div className="profile-item">

            <div>
            <ShieldCheck className="profile-icon" />
              <span>Account Status</span>
            </div>
              <h3>{user?.role}</h3>
          </div>

          <div className="profile-item">

            <div>
            <ShieldCheck className="profile-icon" />
              <span>User ID</span>
            </div>
              <h3>{user?.id || user?._id}</h3>
          </div>
        </div>
        <LogoutPage />
      </div>
    </div>
  );
}

export default Profile;
