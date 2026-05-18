import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

function LogoutPage() {
  const navigate = useNavigate();
  const { Logout, loading } = useAuthStore();
  const handleLogout = async () => {
    try {
      await Logout();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="logout-page">
      <div className="logout-card">
        <button
          className="logout-btn"
          onClick={handleLogout}
          disabled={loading}
        >
          {loading ? "Logging out..." : "Logout"}
        </button>
      </div>
    </div>
  );
}

export default LogoutPage;
