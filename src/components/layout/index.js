import { LOGIN } from "lib/routes";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "hooks/auth";

export default function Layout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();
  useEffect(() => {
    if (pathname.startsWith("/protected") && !user) {
      navigate(LOGIN);
      alert("here")
    }
  }, [pathname, user, isLoading]);
  if (isLoading) return "Please wait... its loading";
  return (
    <>
      This is the child: <Outlet />
    </>
  );
}
