import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle";
const Category = () => {
  return (
    <div className="max-w-[1320px] mt-20 mx-auto">
      <SectionTitle
        subtitle={"---From 11:00am to 10:00pm---"}
        title={"ORDER ONLINE"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper h-[482px]"
      >
        <SwiperSlide>
          <div className="">
            <img className="rounded-md" src={img1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img className="rounded-md" src={img2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img className="rounded-md" src={img3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img className="rounded-md" src={img4} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img className="rounded-md" src={img5} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
