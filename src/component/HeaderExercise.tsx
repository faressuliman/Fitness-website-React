import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import img1 from "/src/assets/exercise/5ad6fd0df4bbe9f545e6ce464b4dc61f.jpg";
import img2 from "/src/assets/exercise/7d0a7c14c8289b783389c9baa0ef5b02.jpg";
import img3 from "/src/assets/exercise/5955b8d60d579de614a6192ebce1f9fc.jpg";

import Image from "../UI/Image";

const HeaderExercise = () => {
  const images = [
    {
      src: img1,
      title: "Strength Starts Here",
      description:
        "Unlock your full potential with powerful workouts that build strength, endurance, and confidence.",
    },
    {
      src: img2,
      title: "Train Smarter, Live Better",
      description:
        "With modern fitness tools and personalized plans, your health journey becomes more effective and enjoyable.",
    },
    {
      src: img3,
      title: "Stronger Together",
      description:
        "Whether in the gym or at home, training with others builds motivation, accountability, and lasting results.",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full lg:h-[600px] md:h-[450px] h-[300px] overflow-hidden">
      {images.map((img, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImage ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-full h-full">
            <Image
              Imageurl={img.src}
              alt="slideshow"
              className="object-cover object-center w-full h-full"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
        </motion.div>
      ))}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 flex flex-col items-center justify-center gap-6 sm:gap-8 text-center px-4"
        >
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            {images[currentImage].title}
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg w-full md:w-2/3 lg:w-1/2 max-w-2xl">
            {images[currentImage].description}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeaderExercise;