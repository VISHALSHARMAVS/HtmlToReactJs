import Case from "./case";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper/modules";

function CaseStudy() {
  return (
    <div className="py-8 block bg-[#ebebeb] w-screen md:w-full">
      <div className="w-full mx-0  px-4 lg:mx-auto">
        <h1
          className="mt-6 text-4xl ml-0 lg:ml-32 font-medium pb-8 block underline"
          style={{ textDecorationThickness: "initial", textDecorationStyle: "initial", textDecorationColor: "rgb(232, 72, 57)", textUnderlineOffset: "20px" }}
        >
          Case Study
        </h1>
        <div className="mt-12 mb-4 pt-4">
          <div className="mx-auto max-w-4xl">
            <Swiper

breakpoints={{
  // Up to 768px (mobile)
  320: {
    slidesPerView: 1,
    spaceBetween: 10,
    
  },
  // 768px to 1024px (tablet)
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  // 1024px and above (desktop)
  1024: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
}}

              slidesPerView={3} // Responsive Viewport Adjustment
              spaceBetween={30}
              loop={true}
              keyboard={{
                enabled: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Keyboard, Autoplay, Pagination, Navigation]}
              className="mx-auto pb-5"
            >
              {Case.map((c, index) => (
                <SwiperSlide key={index}>
                  <div className="px-4 flex flex-col justify-center items-center">
                    <div className="flex items-center justify-center">
                      <img src={c.src} alt="" className="align-middle border-none shadow-xl" />
                    </div>
                    <div className="p-5 text-center">
                      <h5 className="mb-0 md:w-full w-80 text-lg font-medium mt-0">{c.heading}</h5>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;
