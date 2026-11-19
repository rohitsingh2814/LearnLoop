
import { IoMdInfinite } from "react-icons/io";
import { motion } from "motion/react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Auth = () => {

  // Handle successful Google authentication
  const handleGoogleSuccess = async (response) => {
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/google`,
        {
          credential: response.credential
        },
        {
          withCredentials: true
        }
      );

      console.log("Login successful:", result.data);

      // Redirect after successful authentication
      window.location.href = "/";

    } catch (error) {
      console.error(
        "Google authentication failed:",
        error.response?.data || error.message
      );

      alert(
        error.response?.data?.message ||
        "Google authentication failed. Please try again."
      );
    }
  };

  // Handle Google login failure
  const handleGoogleError = () => {
    console.error("Google login failed");
  };

  return (
    <div className="w-full min-h-screen bg-dark flex items-center justify-center px-10 py-15">

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.05 }}
        className="w-full max-w-md p-9 rounded-3xl bg-card shadow-2xl border border-[#292929]"
      >

        {/* Logo */}
        <div className="flex items-center justify-center gap-5 mb-10">

          <div className="bg-brand text-white p-2 rounded-lg">
            <IoMdInfinite size={30} />
          </div>

          <h2 className="font-semibold text-lg text-white">
            LearnLoop
          </h2>

        </div>

        {/* Heading */}
        <h1 className="text-xl md:text-2xl font-semibold text-center leading-relaxed mb-10 text-white">

          Continue With{" "}

          <span className="px-3 py-1 rounded-full inline-flex items-center gap-2">
            Your Personal AI Career Coach
          </span>

        </h1>

        {/* Description */}
        <p className="text-muted text-center text-sm md:text-base leading-7 mb-8">

          Sign in to start AI-powered mock interviews, pattern-wise DSA,
          track your progress, and unlock detailed performance insights.

        </p>

        {/* Google Authentication */}
        <div className="flex justify-center w-full">

          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
            theme="filled_black"
            shape="pill"
            text="continue_with"
            size="large"
            width="300"
          />

        </div>

        {/* Footer */}
        <p className="text-xs text-[#666666] text-center mt-7 leading-relaxed">

          By continuing, you agree to our{" "}

          <span className="text-brand cursor-pointer">
            Terms of Service
          </span>

          {" "}and{" "}

          <span className="text-brand cursor-pointer">
            Privacy Policy
          </span>.

        </p>

      </motion.div>

    </div>
  );
};

export default Auth;
