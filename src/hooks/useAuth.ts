import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  const authContext = useContext(AuthContext);

  return { user: authContext?.user, setUser: authContext?.setUser };
};

export default useAuth;
