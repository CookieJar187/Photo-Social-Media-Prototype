import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getCurrentUser } from "../../api/authApi.js";

function ProtectedRoute() {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    async function checkAuth() {
      try {
        await getCurrentUser();
        setStatus("authenticated");
      } catch {
        setStatus("unauthenticated");
      }
    }

    checkAuth();
  }, []);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;