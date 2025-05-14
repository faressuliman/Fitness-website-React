import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Calories = () => {
    const [age, setAge] = useState(25);
    const [gender, setGender] = useState("male");
    const [height, setHeight] = useState(180);
    const [weight, setWeight] = useState(65);
    const [activity, setActivity] = useState(1.55);
    const [result, setResult] = useState<number | null>(null);

    const calculateCalories = () => {
        const bmr =
            gender === "male"
                ? 10 * weight + 6.25 * height - 5 * age + 5
                : 10 * weight + 6.25 * height - 5 * age - 161;

        const calories = bmr * activity;
        setResult(calories);
    };

    const clearFields = () => {
        setAge(25);
        setGender("male");
        setHeight(180);
        setWeight(65);
        setActivity(1.55);
        setResult(null);
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-[#121212] text-white flex justify-center items-center px-4"
        >
            <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-[#1e1e1e] p-8 rounded-lg shadow-lg max-w-md w-full border-2 border-red-700"
            >
                {/* Title + Description */}
                <motion.h1 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-2xl font-bold mb-2 text-center"
                >
                    Calorie Calculator
                </motion.h1>
                <motion.p 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-sm text-gray-300 mb-6 text-center"
                >
                    The Calorie Calculator can be used to estimate the number of calories a person needs to consume each day.
                </motion.p>

                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <label className="block mb-2">Age</label>
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(Number(e.target.value))}
                        className="w-full p-2 rounded bg-black text-white border border-gray-600 mb-4"
                    />
                </motion.div>

                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                >
                    <label className="block mb-2">Gender</label>
                    <div className="flex items-center gap-6 mb-4">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="male"
                                checked={gender === "male"}
                                onChange={() => setGender("male")}
                                className="accent-red-600"
                            />
                            Male
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="female"
                                checked={gender === "female"}
                                onChange={() => setGender("female")}
                                className="accent-red-600"
                            />
                            Female
                        </label>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <label className="block mb-2">Height (cm)</label>
                    <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(Number(e.target.value))}
                        className="w-full p-2 rounded bg-black text-white border border-gray-600 mb-4"
                    />
                </motion.div>

                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                >
                    <label className="block mb-2">Weight (kg)</label>
                    <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(Number(e.target.value))}
                        className="w-full p-2 rounded bg-black text-white border border-gray-600 mb-4"
                    />
                </motion.div>

                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    <label className="block mb-2">Activity Level</label>
                    <select
                        value={activity}
                        onChange={(e) => setActivity(Number(e.target.value))}
                        className="w-full p-2 pr-10 rounded bg-black text-white border border-gray-600 mb-6"
                    >
                        <option value={1.2}>Sedentary (little or no exercise)</option>
                        <option value={1.375}>Light (exercise 1–3 days/week)</option>
                        <option value={1.55}>Moderate (exercise 4–5 days/week)</option>
                        <option value={1.725}>Active (daily exercise or intense sessions)</option>
                        <option value={1.9}>Very Active (physical job or 2x/day training)</option>
                    </select>
                </motion.div>

                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    className="flex justify-between"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={calculateCalories}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
                    >
                        Calculate
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={clearFields}
                        className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition"
                    >
                        Clear
                    </motion.button>
                </motion.div>

                <AnimatePresence>
                    {result !== null && (
                        <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mt-6 text-center text-lg"
                        >
                            Estimated Daily Calories:{" "}
                            <span className="font-semibold text-green-400">{Math.round(result)} kcal</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
};

export default Calories;
