
// import React from "react";
// import { HiSparkles } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { IoMdInfinite } from "react-icons/io";
import { motion } from "motion/react";

const Auth = () => {
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
        <h1 className="text-xl md:text-2xl font-semibold text-center leading-relaxed mb-10 text-white ">
          Continue With{" "}
          <span className=" px-3 py-1 rounded-full inline-flex items-center gap-2">
            {/* <HiSparkles /> */}
            Your Personal AI Career Coach
          </span>
        </h1>

        {/* Description */}
        <p className="text-muted text-center text-sm md:text-base leading-7 mb-8">
          Sign in to start AI-powered mock interviews, pattern-wise DSA,
          track your progress, and unlock detailed performance insights.
        </p>

        {/* Google Login */}
        <motion.button
          type="button"
          // whileHover={{ opacity: 0.9, scale: 1.03 }}
          // whileTap={{ scale: 0.96 }}
          className="w-full flex items-center justify-center gap-3 py-4.5 bg-black text-white rounded-full shadow-md font-semibold cursor-pointer"
        >
          <FcGoogle size={25} />
          Continue with Google
        </motion.button>

        {/* Footer */}
        <p className="text-xs text-[#666666] text-center mt-7 leading-relaxed">
          By continuing, you agree to our{" "}
          <span className="text-brand cursor-pointer">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="text-brand cursor-pointer">
            Privacy Policy
          </span>.
        </p>
      </motion.div>
    </div>
  );
};

export default Auth;
