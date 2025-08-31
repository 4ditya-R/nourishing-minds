import { useMemo } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  // Split heading into words
  const heading = useMemo(
    () => "Your Journey to Healing Starts Here".split(" "),
    []
  );

  // Container + word animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const word = {
    hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-100 via-amber-200 to-amber-400 dark:from-gray-900 dark:via-amber-900/20 dark:to-black">
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-amber-600/40 blur-3xl"
        animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-amber-700/20 blur-3xl"
        animate={{ y: [0, -60, 0], x: [0, -40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[30%] right-[20%] w-[25vw] h-[25vw] rounded-full bg-amber-400/20 blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
        {/* Animated Heading */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-snug tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 drop-shadow-lg"
        >
          {heading.map((wordText, i) => (
            <motion.span
              key={i}
              variants={word}
              className="inline-block mr-2 text-light-deep-charcoal dark:text-dark-mode-soft-white"
              style={{ willChange: "transform, opacity, filter" }}
            >
              {wordText}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-lg sm:text-xl md:text-2xl font-medium text-gray-700 dark:text-amber-100 max-w-2xl mx-auto"
        >
          Compassionate, personalized psychiatric care designed to help you
          navigate life’s challenges and rediscover balance.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-6"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-amber-600 text-white font-semibold shadow-lg hover:shadow-amber-600/40 transition"
          >
            Begin Healing
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full border border-amber-600 text-amber-700 dark:text-amber-200 font-semibold hover:bg-amber-100/30 transition"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 2,
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-amber-600 dark:text-amber-300"
      ></motion.div>
    </section>
  );
}
