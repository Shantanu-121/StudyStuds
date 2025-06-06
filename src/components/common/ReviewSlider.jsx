import React, { useEffect, useState } from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules";

// React Icons & Stars
import { FaStar } from "react-icons/fa";
import ReactStars from "react-stars";

// API Services
import { apiConnector } from "../../services/apiconnector";
import { ratingsEndpoints } from "../../services/apis";

// Component
function ReviewSlider() {
  const [reviews, setReviews] = useState([]);
  const truncateWords = 15;

  const getReviewDetails = async () => {
    const { data } = await apiConnector(
      "GET",
      ratingsEndpoints.REVIEWS_DETAILS_API
    );
    if (data?.success) {
      setReviews(data?.data);
    }
  };

  useEffect(() => {
    getReviewDetails();
  }, []);

  return (
    <div className="text-white">
      <div className="my-[50px] h-[184px] max-w-maxContentTab lg:max-w-maxContent">
        {/* Reviews.length wala conditon taaki before reviews update swiper render
        na ho jaye kyoki if ho gya then toh autoplay won't work */}
        {reviews.length >= 3 && (
          <Swiper
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {reviews.length === 0 ? (
              <div className="text-center">No Reviews submitted till now.</div>
            ) : (
              reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col min-h-[150px] gap-3 bg-richblack-800 p-3 text-[14px] text-richblack-25 rounded-md">
                    <div className="flex items-center gap-4">
                      <img
                        src={
                          review?.user?.image
                            ? review?.user?.image
                            : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                        }
                        alt=""
                        className="h-9 w-9 rounded-full object-cover"
                      />
                      <div className="flex flex-col">
                        <h1 className="font-semibold text-richblack-5">
                          {`${review?.user?.firstName} ${review?.user?.lastName}`}
                        </h1>
                        <h2 className="text-[12px] font-medium text-richblack-200">
                          {review?.course?.courseName}
                        </h2>
                      </div>
                    </div>
                    <p className="font-medium text-richblack-25">
                      {review?.review.split(" ").length > truncateWords
                        ? `${review?.review
                            .split(" ")
                            .slice(0, truncateWords)
                            .join(" ")} ...`
                        : `${review?.review}`}
                    </p>
                    <div className="flex items-center gap-2 ">
                      <h3 className="font-semibold text-yellow-100">
                        {review.rating.toFixed(1)}
                      </h3>
                      <ReactStars
                        count={5}
                        value={review.rating}
                        size={20}
                        edit={false}
                        activeColor="#ffd700"
                        emptyIcon={<FaStar />}
                        fullIcon={<FaStar />}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))
            )}
          </Swiper>
        )}
      </div>
    </div>
  );
}

export default ReviewSlider;
