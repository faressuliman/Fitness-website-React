import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ExerciseCard from "../component/ExerciseCard/Exercise";
import HeaderExercise from "../component/HeaderExercise";
import useCustomQuery from "../Hook/CustomQuery";
import { FaDumbbell } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../App.css";

import BodyPartSkeleton from "../component/BodyPartSkeleton";
import SkeletonCard from "../component/SkeletonCard";

interface Exercise {
  id: string;
  name: string;
  gifUrl: string;
  bodyPart: string;
  equipment: string;
  target: string;
}

const Exercise = () => {
  const navigate = useNavigate();
  const [selectedBodyPart, setSelectedBodyPart] = useState<string>("");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Check if API key is configured
  useEffect(() => {
    if (!import.meta.env.VITE_RAPIDAPI_KEY) {
      console.error('RapidAPI key is not configured in .env file');
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const {
    data: exercises,
    isLoading: isLoadingExercises,
    error: exercisesError,
  } = useCustomQuery<Exercise[]>("exercises", "/exercises");

  const {
    data: bodyParts,
    isLoading: isLoadingBodyParts,
    error: bodyPartsError,
  } = useCustomQuery<string[]>("bodyParts", "/exercises/bodyPartList");

  // Debug logs
  useEffect(() => {
    if (bodyPartsError) {
      console.error("Body parts error:", bodyPartsError);
    }
    if (exercisesError) {
      console.error("Exercises error:", exercisesError);
    }
    if (bodyParts) {
      console.log("Body parts loaded:", bodyParts);
    }
    if (exercises) {
      console.log("Exercises loaded:", exercises);
    }
  }, [bodyParts, exercises, bodyPartsError, exercisesError]);

  const handleCardClick = (bodyPart: string) => {
    console.log("Selected body part:", bodyPart);
    setSelectedBodyPart(bodyPart);
  };

  const handleExerciseClick = (exercise: Exercise) => {
    console.log("Navigating to exercise:", exercise);
    navigate(`/exercise/${exercise.id}`, { state: { exercise } });
  };

  const handleRetry = () => {
    // Implement retry logic
  };

  // Show error state if API calls fail
  if (bodyPartsError) {
    return (
      <div className="bg-[#121212] w-full min-h-screen text-white pt-24 px-7">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Error loading exercises
          </h2>
          <p className="text-gray-400 mb-4">
            Failed to load body parts. Please check your API key and try again.
          </p>
          <div className="space-y-2">
            <p className="text-sm text-gray-500">
              Make sure you have:
            </p>
            <ul className="text-sm text-gray-500 list-disc list-inside mb-4">
              <li>Added your RapidAPI key to the .env file</li>
              <li>Properly formatted the key as VITE_RAPIDAPI_KEY=your_key</li>
              <li>Restarted the development server after adding the key</li>
            </ul>
          </div>
          <button
            onClick={handleRetry}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#121212] w-full min-h-screen text-white">
      {/* Header */}
      <div>
        <HeaderExercise />
      </div>

      {/* Body Parts */}
      <div className="px-4 sm:px-7 pb-16">
        <div className="relative py-10 flex justify-center items-center">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 z-20 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-2 sm:p-4 rounded-full shadow-lg transition-all duration-300"
          >
            <FaChevronLeft size={16} className="sm:w-5 sm:h-5" />
          </button>
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-scroll space-x-4 sm:space-x-6 scroll-smooth snap-x snap-mandatory w-[80%] mx-auto hide-scrollbar"
          >
            {isLoadingBodyParts ? (
              <BodyPartSkeleton />
            ) : (
              bodyParts?.map((bodyPart: string, id: number) => (
                <div
                  key={id}
                  onClick={() => handleCardClick(bodyPart)}
                  className={`snap-start flex-shrink-0 min-w-[140px] sm:min-w-[160px] ${
                    selectedBodyPart === bodyPart ? "scale-105" : ""
                  }`}
                >
                  <ExerciseCard Icon={<FaDumbbell />} ExerciseTitle={capitalizeWords(bodyPart)} />
                </div>
              ))
            )}
          </div>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 z-20 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-2 sm:p-4 rounded-full shadow-lg transition-all duration-300"
          >
            <FaChevronRight size={16} className="sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Exercises */}
        <div className="mt-8 sm:mt-10">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-red-600">
            {selectedBodyPart
              ? `${capitalizeWords(selectedBodyPart)} Exercises`
              : "Select a body part to see exercises"}
          </h2>
          {isLoadingExercises ? (
            <SkeletonCard />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {exercises?.map((exercise: Exercise) => (
                <div
                  key={exercise.id}
                  onClick={() => handleExerciseClick(exercise)}
                  className="cursor-pointer group"
                >
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={exercise.gifUrl}
                      alt={exercise.name}
                      className="w-full h-auto rounded-lg transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 font-medium">
                        {capitalizeWords(exercise.name)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Helper function to capitalize words
const capitalizeWords = (str: string) => {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
};

export default Exercise;