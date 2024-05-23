import { useContext } from "react";
import { AuthData } from "../Context/AuthProvider";

const useAuth = () => {
  return useContext(AuthData);
};

export default useAuth;
