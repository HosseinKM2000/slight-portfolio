import { motion } from "framer-motion";

const Transition = () => {
  const goal_variants = {
    initial: { y: "100%", height: "100%" },
    animate: { y: "0%", height: "0%" },
    exit: {
      y: ["0%", "100%"],
      height: ["0%", "100%"],
    },
  };

  return (
    <>
      {" "}
      <motion.div
        variants={goal_variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.5, // Duration of the animation
          delay: 0, // Delay before animation starts
          ease: "easeInOut", // Easing for smooth transitions
        }}
        className="fixed right-0 bottom-full w-screen z-50 bg-violet-500"
      />
      <motion.div
        variants={goal_variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.5, // Duration of the animation
          delay: 0.1, // Delay before animation starts
          ease: "easeInOut", // Easing for smooth transitions
        }}
        className="fixed right-0 bottom-full w-screen z-40 bg-violet-700"
      />
      <motion.div
        variants={goal_variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.5, // Duration of the animation
          delay: 0.2, // Delay before animation starts
          ease: "easeInOut", // Easing for smooth transitions
        }}
        className="fixed right-0 bottom-full w-screen z-30 bg-violet-900"
      />
    </>
  );
};

export default Transition;
