import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FooterCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto mt-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-primary text-xl font-mono font-extrabold text-amber-500 hover:text-light-deep-charcoal hover:dark:text-dark-mode-soft-white py-3 rounded-full hover:bg-accent transition-all duration-300 hover:scale-110"
      >
        📅 {isOpen ? "Close" : "Book a Session"}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.form
            key="form"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden mt-4 space-y-2"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-primary focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-primary focus:outline-none"
            />
            <input
              type="datetime-local"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-primary focus:outline-none"
            />
            <textarea
              placeholder="Additional Notes (optional)"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-primary focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-primary text-light-deep-charcoal dark:text-dark-mode-soft-white py-3 hover:text-amber-500 rounded-full font-semibold hover:bg-accent transition-colors duration-300"
            >
              Book Appointment
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FooterCard;
