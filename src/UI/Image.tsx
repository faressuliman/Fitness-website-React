interface Iprops {
  Imageurl: string;
  alt: string;
  className?: string;
}
const Image = ({ Imageurl, alt, className }: Iprops) => {
  return <img src={Imageurl} alt={alt} className={className} />;
};

export default Image;
