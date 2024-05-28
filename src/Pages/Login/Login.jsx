import { useEffect, useRef, useState } from "react";
import loginBg from "../../assets/others/authentication.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import useAuth from "../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useHelmet from "../../Hooks/useHelmet";
import Swal from "sweetalert2";
import GoogleLogin from "../../Components/SicialLogin/GoogleLogin";

const Login = () => {
  const helmet = useHelmet("Login | BISTRO-BOSS");
  const { loginUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCaptcha = (e) => {
    const captchaValue = e.target.value;
    console.log(captchaValue);
    if (validateCaptcha(captchaValue)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      loginUser(email, password).then((result) => {
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
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div
      className="w-full bg-cover h-full"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      {helmet}
      <div className="hero max-w-[900px] mx-auto min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body !pb-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="w-full my-2">
                  <LoadCanvasTemplate />
                </label>
                <div className="flex gap-5 items-center">
                  <input
                    type="text"
                    onBlur={handleValidateCaptcha}
                    placeholder="Type the text above"
                    className=" input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <button
                  disabled={disabled}
                  className="btn bg-[rgba(209,160,84,0.70)]"
                >
                  Login
                </button>
              </div>
            </form>
            <GoogleLogin from={from} />
            <p className="text-[rgba(209,160,84,0.70)] text-center my-5">
              New Here?{" "}
              <Link
                className="font-semibold"
                to={"/signup"}
                state={{ from: from }}
              >
                Create an Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
