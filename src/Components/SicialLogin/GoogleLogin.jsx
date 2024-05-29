import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
const GoogleLogin = ({ from }) => {
  const { LoginByGoogle } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleLogin = () => {
    LoginByGoogle()
      .then((res) => {
        const userInfo = {
          email: res.user?.email,
          name: res.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).catch((err) => {
          console.log(err);
        });
        Swal.fire({
          title: "Logged in successfully",
          showClass: {
            popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `,
          },
          hideClass: {
            popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
          },
        });
        navigate(from);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex w-full justify-center">
      <button
        onClick={handleLogin}
        className="btn btn-sm text-lg h-10 min-w-[300px]"
      >
        Login with <FaGoogle />
      </button>
    </div>
  );
};

GoogleLogin.propTypes = {
  from: PropTypes.string.isRequired,
};

export default GoogleLogin;
