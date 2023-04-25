import useAuth from "./useAuth";
import axios from "axios";

function useRefreshToken() {
  const { setUser } = useAuth();

  const refresh = async () => {
    try {
      const res = await axios.post("api/auth/refresh");

      setUser((prev: any) => ({ ...prev, token: res.data.token }));
    } catch (err) {
      console.log(err);
    }
  };

  return refresh;
}

export default useRefreshToken;
