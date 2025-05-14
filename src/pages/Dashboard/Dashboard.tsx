import { Card, CardContent } from "../../component/ui/cards/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { ChevronDown } from "lucide-react";
import { FaDumbbell } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const dataBar = [
  { name: "Jan", calories: 3200 },
  { name: "Feb", calories: 2800 },
  { name: "Mar", calories: 3400 },
  { name: "Apr", calories: 4000 },
  { name: "May", calories: 3700 },
  { name: "Jun", calories: 3900 },
];

const dataPie = [
  { name: "Workout", value: 40 },
  { name: "Nutrition", value: 30 },
  { name: "Sleep", value: 30 },
];

const COLORS = ["#ef4444", "#22c55e", "#3b82f6"];

interface Task {
  id: number;
  name: string;
  completed: boolean;
  timeFrame: 'today' | 'week';
}

const PREDEFINED_EXERCISES = [
  { name: "Push-ups", category: "Strength" },
  { name: "Pull-ups", category: "Strength" },
  { name: "Squats", category: "Strength" },
  { name: "Lunges", category: "Strength" },
  { name: "Plank", category: "Core" },
  { name: "Mountain Climbers", category: "Cardio" },
  { name: "Burpees", category: "Full Body" },
  { name: "Jumping Jacks", category: "Cardio" },
  { name: "Russian Twists", category: "Core" },
  { name: "Bicycle Crunches", category: "Core" },
  { name: "Dumbbell Rows", category: "Strength" },
  { name: "Shoulder Press", category: "Strength" },
  { name: "Deadlifts", category: "Strength" },
  { name: "Leg Raises", category: "Core" },
  { name: "High Knees", category: "Cardio" },
  { name: "Butt Kicks", category: "Cardio" },
  { name: "Jump Rope", category: "Cardio" },
  { name: "Box Jumps", category: "Plyometric" },
  { name: "Dips", category: "Strength" },
  { name: "Wall Balls", category: "Full Body" }
];

const FitnessDashboard = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({ name: "" });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showExercises, setShowExercises] = useState(false);
  const [timeFrame, setTimeFrame] = useState<'today' | 'week'>('today');
  const [showTimeFrameMenu, setShowTimeFrameMenu] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Calculate progress for current timeFrame
  useEffect(() => {
    const currentTasks = tasks.filter(task => task.timeFrame === timeFrame);
    if (currentTasks.length > 0) {
      const completedTasks = currentTasks.filter(task => task.completed).length;
      const progressPercentage = (completedTasks / currentTasks.length) * 100;
      setProgress(progressPercentage);
      
      // Show success message when all tasks are completed
      if (completedTasks === currentTasks.length && currentTasks.length > 0) {
        setShowSuccessMessage(true);
        // Hide the message after 3 seconds
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      }
    } else {
      setProgress(0);
    }
  }, [tasks, timeFrame]);

  // Check authentication and load tasks
  useEffect(() => {
    const userData = localStorage.getItem('loggedInUser');
    setIsAuthenticated(!!userData);
    
    if (userData) {
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
      }
    }
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks, isAuthenticated]);

  const handleAddTask = () => {
    if (newTask.name && isAuthenticated) {
      const task: Task = {
        id: Date.now(),
        name: newTask.name,
        completed: false,
        timeFrame: timeFrame
      };
      setTasks([...tasks, task]);
      setNewTask({ name: "" });
      setIsModalOpen(false);
    }
  };

  const handleQuickAddExercise = (exerciseName: string) => {
    if (isAuthenticated) {
      const task: Task = {
        id: Date.now(),
        name: exerciseName,
        completed: false,
        timeFrame: timeFrame
      };
      setTasks([...tasks, task]);
      setIsModalOpen(false);
    }
  };

  const toggleTaskCompletion = (taskId: number) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  // Get current timeFrame tasks
  const currentTasks = tasks.filter(task => task.timeFrame === timeFrame);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-[#000000] to-[#121212] text-white">
      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#1E1E1E] border-2 border-[#FF0000] px-4 md:px-8 py-3 md:py-4 rounded-xl shadow-[0_0_20px_rgba(255,0,0,0.3)] z-50 flex items-center gap-2 md:gap-3 animate-slide-up">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#FF0000] flex items-center justify-center">
            <span className="text-lg md:text-xl">🎉</span>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold text-[#FF0000]">Great Job!</h3>
            <p className="text-white text-xs md:text-sm">You've completed all your tasks!</p>
          </div>
        </div>
      )}

      {/* Sidebar */}
      <aside className="hidden md:flex w-64 bg-[#1E1E1E] p-5 flex-col justify-between rounded-tr-3xl rounded-br-3xl border-r border-[#FF0000]/20">
        <div className="mt-16">
          {/* Progress Section */}
          <div className="mb-12 flex flex-col items-center" data-aos="fade-right" data-aos-delay="100">
            <div className="relative">
              <div 
                className="flex items-center gap-2 cursor-pointer mb-8"
                onClick={() => setShowTimeFrameMenu(!showTimeFrameMenu)}
              >
                <h2 className="text-4xl font-bold text-white tracking-wider">
                  <span className="text-[#FF0000]">{timeFrame === 'today' ? "Today's" : "Week's"}</span> Progress
                </h2>
                <ChevronDown 
                  className={`w-6 h-6 text-[#FF0000] transition-transform duration-300 ${showTimeFrameMenu ? 'rotate-180' : ''}`}
                />
              </div>
              
              {/* Time Frame Menu */}
              {showTimeFrameMenu && (
                <div className="absolute top-full left-0 w-full bg-[#2A2A2A] rounded-lg shadow-lg z-10">
                  <button
                    onClick={() => {
                      setTimeFrame('today');
                      setShowTimeFrameMenu(false);
                    }}
                    className={`w-full p-3 text-left hover:bg-[#FF0000] transition-colors ${
                      timeFrame === 'today' ? 'text-[#FF0000]' : 'text-white'
                    }`}
                  >
                    Today's Progress
                  </button>
                  <button
                    onClick={() => {
                      setTimeFrame('week');
                      setShowTimeFrameMenu(false);
                    }}
                    className={`w-full p-3 text-left hover:bg-[#FF0000] transition-colors ${
                      timeFrame === 'week' ? 'text-[#FF0000]' : 'text-white'
                    }`}
                  >
                    Week's Progress
                  </button>
                </div>
              )}
            </div>

            <div className="relative w-32 h-32 mb-3">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#2A2A2A"
                  strokeWidth="8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#FF0000"
                  strokeWidth="8"
                  strokeDasharray="283"
                  strokeDashoffset={283 - (283 * progress) / 100}
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">{Math.round(progress)}%</span>
              </div>
            </div>
            <span className="text-white text-lg">
              {timeFrame === 'today' ? "Today's Score" : "Week's Score"}
            </span>
          </div>

          {/* Tasks Section */}
          <div className="space-y-4" data-aos="fade-right" data-aos-delay="200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-white">
                {timeFrame === 'today' ? "Today's Tasks" : "Week's Tasks"}
              </h3>
              {isAuthenticated && (
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center hover:bg-[#FF0000]/80 transition-colors shadow-[0_0_15px_rgba(255,0,0,0.3)]"
                >
                  <span className="text-white text-xl">+</span>
                </button>
              )}
            </div>
            <div className="space-y-3">
              {currentTasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTaskCompletion(task.id)}
                      className="w-4 h-4 rounded border-2 border-[#FF0000] checked:bg-[#FF0000] focus:ring-[#FF0000]"
                    />
                    <span className={task.completed ? "line-through text-gray-500" : ""}>
                      {task.name}
                    </span>
                  </div>
                  <button
                    onClick={() => handleDeleteTask(task.id)}
                    className="text-gray-400 hover:text-[#FF0000] transition-colors"
                  >
                    ✕
                  </button>
                </div>
              ))}
              {!isAuthenticated && (
                <div className="text-gray-400 text-sm text-center">
                  Please login to manage tasks
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <FaDumbbell className="text-5xl text-[#FF0000]" />
            <h2 className="text-3xl font-bold text-white">FlowForma</h2>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="mt-16">
          <h1 className="text-4xl font-bold mb-12 text-[#FF0000] tracking-wider">Dashboard</h1>

          {/* Mobile Progress Section - Below Navbar */}
          <div className="md:hidden bg-[#1E1E1E] p-4 rounded-xl mb-6 border border-[#FF0000]/20">
            <div className="flex flex-col items-center">
              <div className="relative w-full">
                <div 
                  className="flex items-center gap-2 cursor-pointer mb-4"
                  onClick={() => setShowTimeFrameMenu(!showTimeFrameMenu)}
                >
                  <h2 className="text-2xl font-bold text-white tracking-wider">
                    <span className="text-[#FF0000]">{timeFrame === 'today' ? "Today's" : "Week's"}</span> Progress
                  </h2>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#FF0000] transition-transform duration-300 ${showTimeFrameMenu ? 'rotate-180' : ''}`}
                  />
                </div>
                
                {/* Time Frame Menu */}
                {showTimeFrameMenu && (
                  <div className="absolute top-full left-0 w-full bg-[#2A2A2A] rounded-lg shadow-lg z-10">
                    <button
                      onClick={() => {
                        setTimeFrame('today');
                        setShowTimeFrameMenu(false);
                      }}
                      className={`w-full p-2 text-left hover:bg-[#FF0000] transition-colors ${
                        timeFrame === 'today' ? 'text-[#FF0000]' : 'text-white'
                      }`}
                    >
                      Today's Progress
                    </button>
                    <button
                      onClick={() => {
                        setTimeFrame('week');
                        setShowTimeFrameMenu(false);
                      }}
                      className={`w-full p-2 text-left hover:bg-[#FF0000] transition-colors ${
                        timeFrame === 'week' ? 'text-[#FF0000]' : 'text-white'
                      }`}
                    >
                      Week's Progress
                    </button>
                  </div>
                )}
              </div>

              <div className="relative w-24 h-24 mb-2">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#2A2A2A"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#FF0000"
                    strokeWidth="8"
                    strokeDasharray="283"
                    strokeDashoffset={283 - (283 * progress) / 100}
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{Math.round(progress)}%</span>
                </div>
              </div>
              <span className="text-white text-base mb-6">
                {timeFrame === 'today' ? "Today's Score" : "Week's Score"}
              </span>

              {/* Tasks Section */}
              <div className="w-full border-t border-[#FF0000]/20 pt-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-semibold text-white">
                    {timeFrame === 'today' ? "Today's Tasks" : "Week's Tasks"}
                  </h3>
                  {isAuthenticated && (
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center hover:bg-[#FF0000]/80 transition-colors shadow-[0_0_15px_rgba(255,0,0,0.3)]"
                    >
                      <span className="text-white text-xl">+</span>
                    </button>
                  )}
                </div>
                <div className="space-y-2 max-h-[150px] overflow-y-auto">
                  {currentTasks.map((task) => (
                    <div key={task.id} className="flex items-center justify-between text-white">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={task.completed}
                          onChange={() => toggleTaskCompletion(task.id)}
                          className="w-4 h-4 rounded border-2 border-[#FF0000] checked:bg-[#FF0000] focus:ring-[#FF0000]"
                        />
                        <span className={`text-sm ${task.completed ? "line-through text-gray-500" : ""}`}>
                          {task.name}
                        </span>
                      </div>
                      <button
                        onClick={() => handleDeleteTask(task.id)}
                        className="text-gray-400 hover:text-[#FF0000] transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                  {!isAuthenticated && (
                    <div className="text-gray-400 text-xs text-center">
                      Please login to manage tasks
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
            <Card className="bg-[#1E1E1E] hover:shadow-[0_0_15px_rgba(255,0,0,0.3)] transition-all duration-300 transform hover:scale-105" data-aos="zoom-in" data-aos-delay="100">
              <CardContent className="p-4 md:p-5">
                <p className="text-sm md:text-base text-gray-400">Calories Burned</p>
                <h2 className="text-xl md:text-2xl font-bold text-[#FF0000]">12,500</h2>
                <p className="text-sm md:text-base text-green-400">+1.2% this week</p>
              </CardContent>
            </Card>
            <Card className="bg-[#1E1E1E] hover:shadow-[0_0_15px_rgba(255,0,0,0.3)] transition-all duration-300 transform hover:scale-105" data-aos="zoom-in" data-aos-delay="200">
              <CardContent className="p-4 md:p-5">
                <p className="text-sm md:text-base text-gray-400">Total Workouts</p>
                <h2 className="text-xl md:text-2xl font-bold text-[#FF0000]">34</h2>
                <p className="text-sm md:text-base text-green-400">+3 this week</p>
              </CardContent>
            </Card>
            <Card className="bg-[#1E1E1E] hover:shadow-[0_0_15px_rgba(255,0,0,0.3)] transition-all duration-300 transform hover:scale-105" data-aos="zoom-in" data-aos-delay="300">
              <CardContent className="p-4 md:p-5">
                <p className="text-sm md:text-base text-gray-400">Active Days</p>
                <h2 className="text-xl md:text-2xl font-bold text-[#FF0000]">21</h2>
                <p className="text-sm md:text-base text-red-400">-1 this week</p>
              </CardContent>
            </Card>
            <Card className="bg-[#1E1E1E] hover:shadow-[0_0_15px_rgba(255,0,0,0.3)] transition-all duration-300 transform hover:scale-105" data-aos="zoom-in" data-aos-delay="400">
              <CardContent className="p-4 md:p-5">
                <p className="text-sm md:text-base text-gray-400">Avg Sleep</p>
                <h2 className="text-xl md:text-2xl font-bold text-[#FF0000]">7.3 hrs</h2>
                <p className="text-sm md:text-base text-green-400">+0.5 hrs</p>
              </CardContent>
            </Card>
          </div>

          {/* Graphs Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            {/* Bar Chart */}
            <div className="bg-[#1E1E1E] rounded-xl md:rounded-2xl p-4 md:p-6 hover:shadow-[0_0_15px_rgba(255,0,0,0.3)] transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
              <h2 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-[#FF0000]">Calories Over Time</h2>
              <ResponsiveContainer width="100%" height={180} className="md:h-[200px]">
                <BarChart data={dataBar} barCategoryGap={20}>
                  <XAxis dataKey="name" stroke="#ccc" fontSize={12} />
                  <YAxis stroke="#ccc" fontSize={12} />
                  <Tooltip />
                  <Bar dataKey="calories" fill="#FF0000" radius={[5, 5, 0, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Recent Activity */}
            <div className="bg-[#1E1E1E] rounded-xl md:rounded-2xl p-4 md:p-6 xl:col-span-1 hover:shadow-[0_0_15px_rgba(255,0,0,0.3)] transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
              <h2 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-[#FF0000]">Recent Activity</h2>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex justify-between text-xs md:text-sm hover:text-[#FF0000] transition-colors duration-300 cursor-pointer">
                  <span>🏃‍♂️ Morning Run</span>
                  <span className="text-gray-400">30 mins</span>
                </li>
                <li className="flex justify-between text-xs md:text-sm hover:text-[#FF0000] transition-colors duration-300 cursor-pointer">
                  <span>💪 Chest Day</span>
                  <span className="text-gray-400">45 mins</span>
                </li>
                <li className="flex justify-between text-xs md:text-sm hover:text-[#FF0000] transition-colors duration-300 cursor-pointer">
                  <span>🥗 Healthy Meal</span>
                  <span className="text-gray-400">600 kcal</span>
                </li>
              </ul>
            </div>

            {/* Pie Chart */}
            <div className="bg-[#1E1E1E] rounded-xl md:rounded-2xl p-4 md:p-6 hover:shadow-[0_0_15px_rgba(255,0,0,0.3)] transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
              <h2 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-[#FF0000]">Activity Breakdown</h2>
              <ResponsiveContainer width="100%" height={200} className="md:h-[250px]">
                <PieChart>
                  <Pie data={dataPie} dataKey="value" outerRadius={60} className="md:outerRadius={80}" label>
                    {dataPie.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </main>

      {/* Add Task Modal */}
      {isModalOpen && isAuthenticated && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
           <div className="bg-[#1E1E1E] p-6 rounded-xl w-[600px] max-h-[80vh] overflow-y-auto">
            <h3 className="text-lg md:text-xl font-bold text-white mb-4">Add New Task</h3>
            
            {/* Custom Task Input */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-2">Custom Task</h4>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Task Name"
                  value={newTask.name}
                  onChange={(e) => setNewTask({ name: e.target.value })}
                  className="w-full p-2 rounded bg-[#2A2A2A] text-white border border-gray-700 focus:border-[#FF0000] outline-none"
                />
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 rounded bg-gray-700 text-white hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddTask}
                    className="px-4 py-2 rounded bg-[#FF0000] text-white hover:bg-[#FF0000]/80"
                  >
                    Add Task
                  </button>
                </div>
              </div>
            </div>

            {/* Predefined Exercises */}
            <div>
              <div 
                className="flex items-center gap-2 cursor-pointer mb-4"
                onClick={() => setShowExercises(!showExercises)}
              >
                <h4 className="text-lg font-semibold text-white">Quick Add Exercises</h4>
                <ChevronDown 
                  className={`w-5 h-5 text-[#FF0000] transition-transform duration-300 ${showExercises ? 'rotate-180' : ''}`}
                />
              </div>
              {showExercises && (
                <div className="grid grid-cols-2 gap-3">
                  {PREDEFINED_EXERCISES.map((exercise) => (
                    <button
                      key={exercise.name}
                      onClick={() => handleQuickAddExercise(exercise.name)}
                      className="p-3 rounded bg-[#2A2A2A] text-white hover:bg-[#FF0000] transition-colors text-left flex items-center justify-between"
                    >
                      <span>{exercise.name}</span>
                      <span className="text-sm text-gray-400">{exercise.category}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FitnessDashboard;