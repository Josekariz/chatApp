import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "lib/firebase";
import { useState } from "react";
import { DASHBOARD, LOGIN } from "lib/routes";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function useAuth() {
  const [authUser, isLoading, error] = useAuthState(auth);
  const [user, setUser] = useState(null);

  return { auth: authUser, isLoading, error };
}

export function useLogin() {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  async function login({ email, password, redirectTo = DASHBOARD }) {
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: "Login Success",
        status: "success",
        isClosable: true,
        position: "top",
        duration: 5000,
      });
      navigate(redirectTo);
    } catch (error) {
      toast({
        title: "Login failed",
        description: error.message,
        status: "error",
        position: "top",
        duration: 5000,
      });
      return false;
    } finally {
      setLoading(false);
    }

    return true;
  }

  return { login, isLoading };
}
