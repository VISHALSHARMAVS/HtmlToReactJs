import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import ReviewData from "./ReviewData";

import { Keyboard, Pagination, Navigation, Autoplay } from 'swiper/modules';

function Review() {
  return (
    <div className="p-8 bg-[#fff] block w-screen md:w-full ">
      <div className="w-full mt-12 px-4 mx-auto">
        <h1 className="mt-6 text-[2.5rem] sm:ml-24 mb-12 font-medium block underline" style={{ textDecorationThickness: 'initial', textDecorationStyle: 'initial', textDecorationColor: 'rgb(232, 72, 57)', textUnderlineOffset:'20px'}}>What our clients say</h1>
        <div className="p-6 flex flex-wrap justify-center items-center">
          <div className="max-w-4xl px-4 mx-auto">
            <div className="opacity-100 block  ">
              <Swiper
                // Responsive settings
                breakpoints={{
                  // Up to 768px (mobile)
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  // 768px to 1024px (tablet)
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  // 1024px and above (desktop)
                  1024: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                }}
                loop={true}
                keyboard={{ enabled: true }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Keyboard, Autoplay, Pagination, Navigation]}
                className="mx-auto"
              >
                {ReviewData.map((data, index) => (
                  <SwiperSlide key={index}>
                    <div className="px-4 sm:w-full  sm:float-left  relative sm:h-[25rem] "> {/* Don't modify existing classes */}
                      <div className="flex justify-center items-center w-full sm:px-4  ">
                        <div className="review align-center  h-auto pb-12 my-12 relative bg-[#f4f4f4] text-center mb-0 rounded-sm shadow-xl">
                          <img src={data.src} className="relative align-middle overflow-clip w-[90px] h-[90px] mx-auto border-none rounded-[50%]" alt="" />
                          <h5 className="sm:text-[1.25rem] mb-2 leading-tight font-medium mt-6">{data.heading}</h5>
                          <p className="text-[#6f6f6f] sm:leading-7 md:w-full w-96 mt-6 px-5 sm:text-base mb-4">{data.p}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
