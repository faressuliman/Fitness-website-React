const ResetPass = () => {
    return (
      <div className="bg-[url('src/assets/authentication/signup.jpg')] bg-cover bg-center w-full h-screen flex justify-center items-center">
        <div className="w-[400px] h-[500px] rounded-xl p-8 text-gray-100 bg-[#D9D9D94D]">
          <p className="text-center text-3xl font-bold mb-6">Reset Password</p>
          <form className="mt-4">
            <div className="text-sm leading-5">
              <label htmlFor="new-password" className="block text-gray-400 mb-1">
                New Password
              </label>
              <input
                type="password"
                name="new-password"
                id="new-password"
                className="bg-white/30 w-full rounded-md border border-gray-700 outline-none px-4 py-3 text-gray-100 placeholder-white"
                placeholder="Enter new password"
              />
            </div>
            <div className="mt-4 text-sm leading-5">
              <label htmlFor="confirm-password" className="block text-gray-400 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                className="bg-white/30 w-full rounded-md border border-gray-700 outline-none px-4 py-3 text-gray-100 placeholder-white"
                placeholder="Confirm new password"
              />
            </div>
            <div className="mx-auto flex justify-center mt-8">
              <button className="bg-red-600 text-white w-[150px] h-[40px] rounded-full font-semibold flex items-center justify-center">
                Reset
              </button>
            </div>
          </form>
  
          <p className="text-center text-xs text-gray-400 mt-6">
            Remembered your password?{" "}
            <a
              rel="noopener noreferrer"
              href="/login"
              className="text-[#F01111] font-semibold hover:underline hover:underline-offset-2 hover:decoration-purple-300"
            >
              Log in
            </a>
          </p>
        </div>
      </div>
    );
  };
  
  export default ResetPass;
  