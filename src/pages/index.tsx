import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import HomeProfitional from "../component/HomePrifissionalCard/HomeProfitional";
import HomeCard from "../component/HomeServiceCard/HomeCard";
import { profissionalData, serviceData } from "../data";
import Button from "../UI/Button";
import Image from "../UI/Image";
import Section from "../UI/Section";

const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      startEvent: 'DOMContentLoaded',
      disable: 'mobile',
      offset: 50,
      delay: 0,
      easing: 'ease-out'
    });
  }, []);

  return (
    <div>
      <div className="pt-16 px-6 md:px-12 lg:px-24 lg:pt-28 bg-[linear-gradient(to_right,_rgba(0,0,0,1)_4%,_rgba(0,0,0,0.07)_100%)] w-full min-h-screen flex flex-col lg:flex-row justify-center items-center space-y-10 lg:space-y-0 lg:space-x-10 mx-auto max-w-full overflow-x-hidden">
        {/* First div description */}
        <div
          data-aos="fade-right"
          data-aos-delay="100"
          className="flex-1 flex flex-col space-y-6 text-center lg:text-left lg:ml-12 sm:mt-10"
        >
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-white"
          >
            LOS ANGELES' PREMIER{" "}
            <span className="text-[#FF0000]">
              MOBILE FITNESS AND HEALTH PROFESSIONALS
            </span>
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-white text-sm sm:text-base md:text-lg"
          >
            Level up your fitness and health journey with FlowForma's onsite
            personalized training, fitness technology, and dietitian services.
          </p>
          <a
            data-aos="fade-up"
            data-aos-delay="400"
            href="/exercises"
            className="px-5 py-3 font-semibold w-fit mx-auto lg:mx-0 rounded-lg border-2 border-[#FF0000] text-white hover:bg-[#FF0000] duration-300 transform hover:scale-105 transition-all"
          >
            GET STARTED
          </a>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="flex justify-center lg:justify-start items-center space-x-4 flex-wrap gap-y-4"
          >
            <div className="flex flex-col items-center justify-center px-4 border-r-2 border-white hover:transform hover:scale-110 transition-all duration-200">
              <span className="text-[#FF0000] text-xl sm:text-2xl font-semibold">
                05+
              </span>
              <p className="text-white text-xs sm:text-sm">Years of Experience</p>
            </div>
            <div className="flex flex-col items-center justify-center px-4 border-r-2 border-white hover:transform hover:scale-110 transition-all duration-200">
              <span className="text-[#FF0000] text-xl sm:text-2xl font-semibold">
                1000+
              </span>
              <p className="text-white text-xs sm:text-sm">Members Join</p>
            </div>
            <div className="flex flex-col items-center justify-center px-4 hover:transform hover:scale-110 transition-all duration-200">
              <span className="text-[#FF0000] text-xl sm:text-2xl font-semibold">
                1000+
              </span>
              <p className="text-white text-xs sm:text-sm">Happy Members</p>
            </div>
          </div>
        </div>

        {/* Second div image */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="flex-1 flex justify-center overflow-hidden"
        >
          <div className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] h-auto transform scale-110 transition-all duration-300 origin-center">
            <img
              className="w-full h-full object-contain"
              src="src/assets/home/home-bg.png"
              alt="Fitness Professional"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#121212]">
        <Section className="text-white py-14 px-6 md:px-12 lg:px-24">
          <h1
            data-aos="fade-down"
            data-aos-duration="800"
            className="text-center text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            Why <span className="text-[#FF0000]">Choose Us</span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            className="text-center mt-4 sm:mt-6 text-sm sm:text-base"
          >
            Gym workouts offer a versatile and customisable experience, allowing
            everyone to set specific fitness goals.
          </p>

          <div className="mt-10 space-y-10 lg:space-y-0">
            {/* First row */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 justify-center items-stretch mb-10">
              <div
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="150"
                className="border-2 border-[#FF0000] space-y-3 rounded-md p-4 flex-1 transform hover:scale-105 transition-all duration-200 hover:shadow-[0_0_15px_rgba(255,0,0,0.3)]"
              >
                <span className="text-lg font-bold text-[#FF0000]">01</span>
                <h2 className="text-[#FF0000] text-xl font-semibold">
                  Mobile Team
                </h2>
                <p>
                  We bring our trainers, workout technology and equipment to you,
                  making every workout private, customized and convenient.
                </p>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="250"
                className="border-2 border-[#FF0000] space-y-3 rounded-md p-4 flex-1 transform hover:scale-105 transition-all duration-200 hover:shadow-[0_0_15px_rgba(255,0,0,0.3)]"
              >
                <span className="text-lg font-bold text-[#FF0000]">02</span>
                <h2 className="text-[#FF0000] text-xl font-semibold">
                  Bespoke Experience
                </h2>
                <p>
                  We make every workout fun, goal-oriented and customized for your
                  age, fitness level, health condition, or group size.
                </p>
              </div>
            </div>

            {/* Second row */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 justify-center items-stretch">
              <div
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="350"
                className="border-2 border-[#FF0000] space-y-3 rounded-md p-4 flex-1 transform hover:scale-105 transition-all duration-200 hover:shadow-[0_0_15px_rgba(255,0,0,0.3)]"
              >
                <span className="text-lg font-bold text-[#FF0000]">03</span>
                <h2 className="text-[#FF0000] text-xl font-semibold">
                  Advanced Technology
                </h2>
                <p>
                  We enable you to experience fitness and health results that go
                  beyond the scale and mirror with our 3D body visualization
                  technology.
                </p>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="450"
                className="border-2 border-[#FF0000] space-y-3 rounded-md p-4 flex-1 transform hover:scale-105 transition-all duration-200 hover:shadow-[0_0_15px_rgba(255,0,0,0.3)]"
              >
                <span className="text-lg font-bold text-[#FF0000]">04</span>
                <h2 className="text-[#FF0000] text-xl font-semibold">
                  Satisfaction Guaranteed
                </h2>
                <p>
                  Our gyms offer personalized training sessions with certified
                  personal trainers who create customized workout plans based on
                  individual goals.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section className="text-white py-14 px-6">
          <h1
            data-aos="zoom-in"
            className="text-center text-5xl font-bold uppercase mb-12"
          >
            Mobile App
            <br />
            <span className="text-[#FF0000]">For Workout</span>
          </h1>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-48">
            {/*Mobile pictures*/}
            <div
              data-aos="fade-right"
              data-aos-delay="300"
              className="flex flex-row relative w-fit"
            >
              <Image
                Imageurl="/src/assets/home/photo_2025-05-03_15-56-18-removebg-preview.png"
                alt="fitness app"
                className="w-40 md:w-56 lg:w-48 rounded-xl shadow-xl z-10 transform hover:scale-105 transition-all duration-300"
              />
              <Image
                Imageurl="/src/assets/home/photo_2025-05-03_15-56-52-removebg-preview.png"
                alt="fitness app"
                className="w-40 md:w-56 lg:w-48 rounded-xl shadow-xl mt-12 -ml-3 transform hover:scale-105 transition-all duration-300"
              />
            </div>

            {/*App features*/}
            <div
              data-aos="fade-left"
              data-aos-delay="400"
              className="max-w-md space-y-6"
            >
              <ul className="space-y-3 text-lg">
                {[
                  "24X7 Support from our trainers",
                  "Professional Approach",
                  "Scientifically Proven Workout Plans",
                  "Personalised Workout Plans",
                  "iOS, Android App and Web Portal",
                  "Exercise Video Add-ons",
                ].map((feature, i) => (
                  <li
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={500 + (i * 100)}
                    className="flex items-start gap-2 transform hover:translate-x-2 transition-all duration-300"
                  >
                    <span className="text-[#FF0000] mt-1">●</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                data-aos="fade-up"
                data-aos-delay="1200"
                className="mt-6 px-6 py-3 text-[#FF0000] border-2 border-[#FF0000] rounded hover:bg-[#FF0000] hover:text-white transition-all duration-500 font-semibold uppercase tracking-wider transform hover:scale-105"
              >
                Try Now
              </Button>
            </div>
          </div>
        </Section>

        <Section className="container mx-auto text-white py-28 px-4 sm:px-6 md:px-10 lg:px-24">
          <h1
            data-aos="zoom-in"
            className="text-center text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            Our <span className="text-[#FF0000]">Services</span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-center mt-4 sm:mt-6 text-sm sm:text-base"
          >
            Delivered By Highly Trained Fitness and Health Professionals
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 justify-items-center sm:justify-items-stretch">
            {serviceData.map((data, indx) => (
              <div
                key={indx}
                data-aos="fade-up"
                data-aos-delay={300 + (indx * 100)}
                className="w-full max-w-xs h-full transform hover:scale-105 transition-all duration-300"
              >
                <HomeCard
                  imageurl={data.image}
                  description={data.description}
                  title={data.title}
                  className="w-full h-full bg-cover"
                />
              </div>
            ))}
          </div>
        </Section>


        <Section className="container mx-auto text-white py-28 px-6">
          <h1
            data-aos="zoom-in"
            className="text-center text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            Our professional <span className="text-[#FF0000]">trainers</span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-center mt-6 text-sm sm:text-base"
          >
            Delivered By Highly Trained Fitness and Health Professionals
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mt-10 justify-items-center sm:justify-items-stretch">
            {profissionalData.map((data, indx) => (
              <div
                key={indx}
                data-aos="fade-up"
                data-aos-delay={300 + indx * 100}
                className="flex justify-center transform hover:scale-105 transition-all duration-300"
              >
                <HomeProfitional Name={data.Name} imageurl={data.imageurl} />
              </div>
            ))}
          </div>
        </Section>

      </div>
    </div>
  );
};

export default Home;
