import "./HomeProfitional.css";
interface Iprops {
  imageurl: string;
  Name: string;
}
const HomeProfitional = ({ imageurl, Name }: Iprops) => {
  return (
    <div
      className="card-profissional border-4 border-[#ff0000] bg-cover bg-center"
      style={{ backgroundImage: `url(${imageurl})` }}
    >
      <b></b>
      <div className="content-profissional font-bold text-3xl">{Name}</div>
    </div>
  );
};

export default HomeProfitional;
