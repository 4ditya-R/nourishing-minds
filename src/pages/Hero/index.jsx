import { useRef, useMemo } from "react";
import hero from "../../assets/images/spotlight-portrait-golden-hour.jpg";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const shouldReduceMotion = useReducedMotion();

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    shouldReduceMotion ? [1, 1, 1] : [1, 0.6, 0.8]
  );

  const heading = useMemo(
    () => "Your Journey to Healing Starts Here".split(" "),
    []
  );

  const container = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
    }),
    []
  );

  const word = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.6, ease: "easeOut" },
      },
    }),
    []
  );

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen bg-fixed bg-right bg-cover overflow-x-hidden"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-8">
        {/* Text Block */}
        <div className="md:w-1/2 w-full z-10 space-y-6 text-center md:text-left py-10 max-w-lg mx-auto md:mx-0">
          <motion.h1
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug bg-clip-text text-transparent bg-gradient-to-r from-amber-100 to-amber-600 dark:from-amber-300 dark:to-amber-500"
          >
            {heading.map((wordText, i) => (
              <motion.span
                key={i}
                variants={word}
                className="inline-block mr-2 py-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600 dark:from-amber-300 dark:to-amber-500"
                style={{ willChange: "transform, opacity" }}
              >
                {wordText}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-base sm:text-lg md:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600 dark:from-amber-300 dark:to-amber-500"
          >
            Compassionate, personalized psychiatric care designed to help you
            navigate life’s challenges and rediscover balance.
          </motion.p>

          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
            aria-label="Begin Healing"
            className="w-full sm:w-auto px-6 py-3 bg-amber-500 rounded-lg text-white font-bold"
          >
            Begin Healing
          </motion.button>
        </div>

        {/* Image Block */}
        <div className="md:w-1/2 w-full h-full group dark:opacity-95 opacity-95 dark:brightness-75 brightness-75">
          <motion.img
            src={hero}
            alt="Portrait representing hope and healing"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center grayscale group-hover:filter-none transition duration-300"
            style={{ opacity, willChange: "opacity" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
}
