import axios from "axios";
import { createContext, useEffect, useState } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import Test from "../pages/Test";

interface User {
  token: string;
}

interface authType {
  user: User | undefined;
  setUser: any;
}

type Props = {
  children: any;
};

export const AuthContext = createContext<authType | null>(null);

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState<Boolean>(
    window.location.pathname !== "/login" ? true : false
  );

  useEffect(() => {
    if (user?.token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${user?.token}`;
    }

    const refresh = async () => {
      try {
        const res = await axios.post("api/auth/refresh");

        setUser((prev: any) => ({ ...prev, token: res.data.token }));

        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };

    window.location.pathname !== "/login" && !user && refresh();
  }, [user]);

  if (loading) {
    return <Test />; // Replace with your loading screen or spinner
  }

  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
