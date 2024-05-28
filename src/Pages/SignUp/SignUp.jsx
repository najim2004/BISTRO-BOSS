import { useForm } from "react-hook-form";
import useHelmet from "../../Hooks/useHelmet";
import useAuth from "../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import GoogleLogin from "../../Components/SicialLogin/GoogleLogin";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const helmet = useHelmet("SingUp | BISTRO-BOSS");
  const location = useLocation();
  const from = location.state.from;
  const { registerUser, updateUserProfile, use } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, password, photo } = data;
    try {
      const user = await registerUser(email, password);

      await updateUserProfile(name, photo);
      if (user.user) {
        const userInfo = { name: name, email: email };
        const { data } = await axiosPublic.post("/users", userInfo);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Account created successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
          navigate("from");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {helmet}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body !pb-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name?.type === "required" && (
                  <span className="text-red-400">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="photo url"
                  className="input input-bordered"
                  {...register("photo", { required: true })}
                />
                {errors.photo?.type === "required" && (
                  <span className="text-red-400">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />{" "}
                {errors.email?.type === "required" && (
                  <span className="text-red-400">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: true,
                    minLength: 5,
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
                  })}
                />
                {/* pattern error */}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-400">
                    Password must contain at least one uppercase
                    letter,lowercase letter,digit,special character (!@#$%^&*)!
                  </span>
                )}
                {errors.password?.type === "required" && (
                  <span className="text-red-400">This field is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-400">
                    Password must be 6 character!
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#d1a054]">SignUp</button>
              </div>
            </form>
            <GoogleLogin from={from} />
            <p className="text-[rgba(209,160,84,0.70)] text-center my-5">
              Already have an account?{" "}
              <Link className="font-semibold" to={"/login"}>
                Login here!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
