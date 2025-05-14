import "./HomeCard.css";
import Image from "../../UI/Image";
import Button from "../../UI/Button";

interface Iprops {
  imageurl: string;
  title: string;
  description: string;
  className?: string;
}

const HomeCard = ({ imageurl, title, description, className }: Iprops) => {
  return (
    <div className="card-Home">
      <div className="remove-when-use-Home">
        <Image Imageurl={imageurl} alt={title} className={className} />
      </div>
      <div className="details-Home pb-5">
        <label className="font-bold">{title}</label>
        <p>{description}</p>
        <Button className="bg-[#ff0000] text-white w-full text-center rounded-lg mt-3 mb-5 ">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default HomeCard;
