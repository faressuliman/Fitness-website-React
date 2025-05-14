import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useCustomQuery from "../Hook/CustomQuery";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ExerciseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-out'
    });
  }, []);

  // Fetch exercise details only if id exists
  const { data: exerciseDetail, isLoading, error } = useCustomQuery({
    queryKey: ["exerciseDetail", id || ""],
    url: id ? `/exercises/exercise/${id}` : "",
  });

  // Handle navigation only on mount or when id changes
  useEffect(() => {
    if (!id) {
      console.log("No ID provided, redirecting to exercises page");
      navigate('/exercises');
      return;
    }
  }, [id, navigate]);

  // Handle loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#121212] text-white pt-20">
        <div className="animate-pulse max-w-6xl mx-auto px-7">
          <div className="h-96 bg-gray-700 rounded-lg mb-8"></div>
          <div className="h-8 bg-gray-700 w-1/3 rounded mb-4"></div>
          <div className="h-4 bg-gray-700 w-2/3 rounded mb-2"></div>
          <div className="h-4 bg-gray-700 w-1/2 rounded"></div>
        </div>
      </div>
    );
  }

  // Handle error state
  if (error || !exerciseDetail) {
    return (
      <div className="min-h-screen bg-[#121212] text-white pt-20">
        <div className="max-w-6xl mx-auto px-7 text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            {error ? "Error Loading Exercise" : "Exercise Not Found"}
          </h1>
          <p className="text-gray-400 mb-6">
            {error ? "There was an error loading the exercise details." : "The exercise you're looking for could not be found."}
          </p>
          <button
            onClick={() => navigate('/exercises')}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Back to Exercises
          </button>
        </div>
      </div>
    );
  }

  // Capitalize first letter of each word
  const capitalizeWords = (str: string) => {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white pt-20 pb-20">
      <div className="max-w-6xl mx-auto px-7">
        {/* Back button */}
        <button
          data-aos="fade-right"
          onClick={() => navigate('/exercises')}
          className="mb-8 flex items-center text-red-600 hover:text-red-700 transition-colors text-lg"
        >
          <span className="mr-2">←</span> Back to Exercises
        </button>

        {/* Exercise Header */}
        <div className="flex flex-col lg:flex-row gap-12 items-start mb-16">
          <div className="w-full lg:w-1/2" data-aos="fade-right" data-aos-delay="100">
            <div className="relative group">
              <img
                src={exerciseDetail.gifUrl}
                alt={exerciseDetail.name}
                className="w-full rounded-2xl shadow-2xl transform transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <div className="flex-1 space-y-8" data-aos="fade-left" data-aos-delay="200">
            <h1 className="text-5xl font-bold mb-6 text-red-600 leading-tight">
              {capitalizeWords(exerciseDetail.name)}
            </h1>
            
            <div className="grid gap-6 text-lg">
              <div 
                data-aos="fade-up" 
                data-aos-delay="300"
                className="p-6 bg-zinc-900 rounded-xl transform transition-transform hover:scale-[1.02]"
              >
                <h3 className="font-semibold text-red-600 mb-2">Body Part</h3>
                <p className="text-gray-200">{capitalizeWords(exerciseDetail.bodyPart)}</p>
              </div>
              
              <div 
                data-aos="fade-up" 
                data-aos-delay="400"
                className="p-6 bg-zinc-900 rounded-xl transform transition-transform hover:scale-[1.02]"
              >
                <h3 className="font-semibold text-red-600 mb-2">Equipment</h3>
                <p className="text-gray-200">{capitalizeWords(exerciseDetail.equipment)}</p>
              </div>
              
              <div 
                data-aos="fade-up" 
                data-aos-delay="500"
                className="p-6 bg-zinc-900 rounded-xl transform transition-transform hover:scale-[1.02]"
              >
                <h3 className="font-semibold text-red-600 mb-2">Target Muscle</h3>
                <p className="text-gray-200">{capitalizeWords(exerciseDetail.target)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mb-16" data-aos="fade-up" data-aos-delay="600">
          <h2 className="text-3xl font-bold mb-8 text-red-600">Instructions</h2>
          <div className="bg-zinc-900 rounded-2xl p-8">
            <ol className="list-decimal list-inside space-y-4">
              {exerciseDetail.instructions?.map((instruction: string, index: number) => (
                <li 
                  key={index} 
                  data-aos="fade-up"
                  data-aos-delay={700 + (index * 100)}
                  className="text-lg text-gray-200 leading-relaxed pl-4"
                >
                  {instruction.charAt(0).toUpperCase() + instruction.slice(1)}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetail; 