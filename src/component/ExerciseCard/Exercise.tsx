import "./Exercise.css";

interface Iprops {
  ExerciseTitle: string;
  Icon: React.ReactNode;
}
const ExerciseCard = ({ ExerciseTitle, Icon }: Iprops) => {
  return (
    <div className="card-exercise cursor-pointer">
      <div className="z-[3] flex flex-col items-center space-y-3">
        {/* Icon */}
        <div className="text-6xl text-[#FF0000]">{Icon}</div>

        {/* Title */}
        <div className="text-black font-bold text-2xl">{ExerciseTitle}</div>
      </div>

      <div className="bg-exercise"></div>
      <div className="blob-exercise"></div>
    </div>
  );
};

export default ExerciseCard;
