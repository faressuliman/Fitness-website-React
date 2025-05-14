import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import { SignupValidation } from "../validation";
import { axiosInstance } from "../config/axios.config";
import { motion } from "framer-motion";

const SignUp = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = SignupValidation(data);
    setErrors(validationErrors);

    const hasErrors = Object.values(validationErrors).some(
      (error) => error !== ""
    );
    if (hasErrors) return;

    setIsLoading(true);
    try {
      const { status } = await axiosInstance.post("auth/local/register", data);
      if (status === 200) {
        toast.success(
          "You will navigate to the login page after 1 seconds to login",
          {
            position: "bottom-center",
            duration: 1500,
            style: {
              backgroundColor: "black",
              color: "white",
              width: "fit-content",
            },
          }
        );
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }
    } catch {
      console.log("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[url('src/assets/authentication/signup.jpg')] bg-cover bg-center w-full h-screen flex justify-center items-center"
    >
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-[400px] h-[500px] rounded-xl p-8 text-gray-100 bg-white/30"
      >
        <motion.p 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-3xl font-bold"
        >
          Sign Up
        </motion.p>
        <form className="mt-3" onSubmit={submitHandler}>
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-1 text-sm leading-5"
          >
            <label htmlFor="username" className="block text-gray-400 mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
              className="bg-white/30 w-full rounded-md border border-gray-700 outline-none px-4 py-3 text-gray-100 placeholder-white"
              value={data.username}
              onChange={onchangeHandler}
            />
            {errors.username && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 text-xs mt-1"
              >
                {errors.username}
              </motion.p>
            )}
          </motion.div>

          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-3 text-sm leading-5"
          >
            <label htmlFor="email" className="block text-gray-400 mb-1">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="bg-white/30 w-full rounded-md border border-gray-700 outline-none px-4 py-3 text-gray-100 placeholder-white"
              value={data.email}
              onChange={onchangeHandler}
            />
            {errors.email && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 text-xs mt-1"
              >
                {errors.email}
              </motion.p>
            )}
          </motion.div>

          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-3 text-sm leading-5"
          >
            <label htmlFor="password" className="block text-gray-400 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="bg-white/30 w-full rounded-md border border-gray-700 outline-none px-4 py-3 text-gray-100 placeholder-white"
              value={data.password}
              onChange={onchangeHandler}
            />
            {errors.password && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 text-xs mt-1"
              >
                {errors.password}
              </motion.p>
            )}
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mx-auto flex justify-center mt-5"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 text-white w-[150px] h-[40px] rounded-full font-semibold flex items-center justify-center"
            >
              {isLoading ? "loading..." : "Sign Up"}
            </motion.button>
          </motion.div>
        </form>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex items-center pt-4"
        >
          <div className="flex-1 h-px bg-gray-700" />
          <p className="px-3 text-sm text-gray-400">
            Sign up with social accounts
          </p>
          <div className="flex-1 h-px bg-gray-700" />
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="flex justify-center mt-2"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Sign up with Google"
            className="rounded-sm p-3 bg-transparent ml-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-white"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z" />
            </svg>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Sign up with Twitter"
            className="rounded-sm p-3 bg-transparent ml-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-white"
            >
              <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z" />
            </svg>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Sign up with GitHub"
            className="rounded-sm p-3 bg-transparent ml-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-white"
            >
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
            </svg>
          </motion.button>
        </motion.div>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="text-center text-xs text-gray-400 mt-2"
        >
          Have an account?
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/login"
            className="text-[#F01111] font-semibold ml-1 hover:underline hover:text-purple-300"
          >
            Log In
          </motion.a>
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default SignUp;
