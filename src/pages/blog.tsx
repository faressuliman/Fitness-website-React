import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const Blog = () => {

    useEffect(() => {
  AOS.init({
    duration: 1000, // animation duration in ms
    once: true,     // whether animation should happen only once
  });
}, []);

  return (
    <div className="bg-[#11111A] w-full min-h-screen py-16 px-4 flex flex-col items-center">
  <h1 data-aos="fade-up" className="text-white text-6xl mt-10 font-bold mb-12 text-center">
    Fitness <span className="text-[rgb(255_0_0_/_var(--tw-text-opacity))]">Blog</span>
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl w-full items-stretch">
    {/* CARD 1 */}
    <div data-aos="fade-up-left" className="flex flex-col h-full bg-white dark:bg-transparent rounded-2xl shadow-sm border-2 border-transparent overflow-hidden">
      <a href="#">
        <img className="w-full h-72 object-cover" src="/src/assets/blog/exercise-beginner.png" alt="Blog preview" />
      </a>
      <div className="flex flex-col justify-between flex-grow p-5 bg-[#201f1f]">
        <div>
          <p className="text-white pb-5">March 15, 2024</p>
          <a href="#">
            <h5 className="pb-4 mb-2 text-2xl font-bold tracking-tight text-white hover:text-red-500 transition-colors duration-200">
              10 Essential Exercises for Beginners
            </h5>
          </a>
          <p className="mb-3 pb-1 font-normal text-gray-400">
            Start your fitness journey with these fundamental exercises that will help you build strength and confidence.
          </p>
        </div>
        <a href="#" className="inline-flex items-center w-fit px-4 py-3 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-800 transition-colors duration-200">
          Read more
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" fill="none" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>

    {/* CARD 2 */}
    <div data-aos="fade-up-left" className="flex flex-col h-full bg-white dark:bg-transparent rounded-2xl shadow-sm border-2 border-transparent overflow-hidden">
      <a href="#">
        <img className="w-full h-72 object-cover" src="/src/assets/blog/nutrition.jpeg" alt="Blog preview" />
      </a>
      <div className="flex flex-col justify-between flex-grow p-5 bg-[#201f1f]">
        <div>
          <p className="text-white pb-5">March 12, 2024</p>
          <a href="#">
            <h5 className="pb-4 mb-2 text-2xl font-bold tracking-tight text-white hover:text-red-500 transition-colors duration-200">
              Nutrition Guide for Muscle Building
            </h5>
          </a>
          <p className="mb-3 pb-1 font-normal text-gray-400">
            Learn about the best foods and supplements to support your muscle growth and recovery.
          </p>
        </div>
        <a href="#" className="inline-flex items-center w-fit px-4 py-3 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-800 transition-colors duration-200">
          Read more
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" fill="none" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>

    {/* CARD 3 */}
    <div data-aos="fade-up-right" className="flex flex-col h-full bg-white dark:bg-transparent rounded-2xl shadow-sm border-2 border-transparent overflow-hidden">
      <a href="#">
        <img className="w-full h-72 object-cover" src="/src/assets/blog/rest-day.jpg" alt="Blog preview" />
      </a>
      <div className="flex flex-col justify-between flex-grow p-5 bg-[#201f1f]">
        <div>
          <p className="text-white pb-5">March 10, 2024</p>
          <a href="#">
            <h5 className="pb-4 mb-2 text-2xl font-bold tracking-tight text-white hover:text-red-500 transition-colors duration-200">
              The Importance of Rest Days
            </h5>
          </a>
          <p className="mb-3 pb-1 font-normal text-gray-400">
            Understanding why rest days are crucial for your fitness progress and overall health.
          </p>
        </div>
        <a href="#" className="inline-flex items-center w-fit px-4 py-3 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-800 transition-colors duration-200">
          Read more
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" fill="none" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>

    {/* CARD 4 */}
    <div data-aos="fade-up-right" className="flex flex-col h-full bg-white dark:bg-transparent rounded-2xl shadow-sm border-2 border-transparent overflow-hidden">
      <a href="#">
        <img className="w-full h-72 object-cover" src="/src/assets/blog/motivation.jpeg" alt="Blog preview" />
      </a>
      <div className="flex flex-col justify-between flex-grow p-5 bg-[#201f1f]">
        <div>
          <p className="text-white pb-5">March 8, 2024</p>
          <a href="#">
            <h5 className="pb-4 mb-2 text-2xl font-bold tracking-tight text-white hover:text-red-500 transition-colors duration-200">
              How to Stay Motivated
            </h5>
          </a>
          <p className="mb-3 pb-1 font-normal text-gray-400">
            Practical tips and strategies to maintain your motivation throughout your fitness journey.
          </p>
        </div>
        <a href="#" className="inline-flex items-center w-fit px-4 py-3 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-800 transition-colors duration-200">
          Read more
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" fill="none" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>
  </div>

  <div data-aos-easing="ease-in-out" data-aos="fade-up" className="mt-20 text-white text-center max-w-2xl mx-auto">
  <h2 className="text-3xl font-bold mb-2">Sign up for our newsletter</h2>
  <p className="text-gray-400 mb-6">
    Get the latest fitness tips and updates delivered to your inbox.
  </p>
  <form data-aos="fade-up" className="flex flex-col sm:flex-row justify-center items-center gap-4 text-left">
    <input
      type="email"
      placeholder="Enter your email"
      className=" bg-gray-800 h-12  px-4 text-sm rounded-lg text-white w-full leading-none placeholder:text-gray-400"
      required
    />
    <button
      type="submit"
      className="bg-red-600 hover:bg-red-800 text-white px-6 py-2 rounded-lg transition-colors duration-200"
    >
      Subscribe
    </button>
  </form>
</div>

</div>


  );
};

export default Blog;