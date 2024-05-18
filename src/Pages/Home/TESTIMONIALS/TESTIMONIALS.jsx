import SectionTitle from "../../../Components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
const TESTIMONIALS = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios.get("/reviews.json").then((res) => {
      setReviews(res.data);
    });
  }, []);
  return (
    <div className="my-16 max-w-[1320px] mx-auto">
      <SectionTitle
        subtitle="---What Our Clients Say---"
        title="TESTIMONIALS"
      />
      <div className="h-[400px] flex items-center">
        <Swiper
          navigation={true}
          loop={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {reviews?.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col text-center space-y-4 items-center justify-center">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <p className="max-w-[1000px]">{review.details}</p>
                <h3 className="text-2xl text-orange-400">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TESTIMONIALS;
