import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getStatus } from "../../api/authApi.js";

function GuestRoute() {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    async function checkAuth() {
      try {
        const status = await getStatus();

        if (status.authenticated) {
          setStatus("authenticated");
        }
        else {
          setStatus("unauthenticated");
        }
      } catch {
        setStatus("unauthenticated");
      }
    }

    checkAuth();
  }, []);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "authenticated") {
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
}

export default GuestRoute;