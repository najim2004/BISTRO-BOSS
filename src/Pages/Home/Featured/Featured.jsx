import SectionTitle from "../../../Components/SectionTitle";
import fImg from "../../../assets/home/featured.jpg";
const Featured = () => {
  return (
    <div
      className="my-16 h-screen bg-fixed
       bg-cover bg-no-repeat bg-center  text-white"
      style={{ backgroundImage: `url(${fImg})` }}
    >
      <div className="bg-[rgba(21,21,21,0.70)] inset-0 w-full h-full flex flex-col items-center justify-center">
        <SectionTitle subtitle="---Check it out---" title="FROM OUR MENU" />
        <div className="flex gap-16 justify-center items-center mt-12 max-w-[1320px] mx-auto">
          <div className="">
            <img className="max-w-[448px] h-[230px]" src={fImg} alt="" />
          </div>
          <div className="max-w-[604px]">
            <p>March 20, 2023</p>
            <p>WHERE CAN I GET SOME?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn bg-transparent border-t-[0px] border-r-[0px] border-l-[0px] border-[3px] border-b-white rounded-lg text-white mt-6">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
