/* eslint-disable react/prop-types */
import { useState } from "react";
import  featurehead  from "../assets/images/featurehead.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "./data";

function Feature() {
  const [currentSlide, setCurrentSlide] = useState(0);

  

  
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    customPaging: (i) => (
      <div
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: i === currentSlide ? "rgba(0,0,0,0.5)" : "transparent",
          border: "1px solid",
          alignItems:"center"
        }}
      />
    ),
  };

  return (
    <div className="block md:w-full w-screen">
      <div className="py-8 block lg:ml-32 mt-6 bg-white px-4 mx-auto w-full">
        <img src={featurehead} alt="Feature Header" className="mb-4 max-w-full h-auto align-middle border-none" />
        <h2 className="mt-4 mb-6 pb-8 sm:text-4xl text-sm leading-tight font-medium">
          Simply English making your <br /> communication skills your greatest asset
        </h2>
        <h5 className="text-sm sm:text-xl mb-2 font-medium leading-tight">
          Your Language Coach: Elevate speaking, writing, and interview skills seamlessly.
        </h5>
        <h1 className="text-base sm:text-[2.5rem] mb-2 font-medium leading-tight mt-12 underline" style={{ textDecorationThickness: 'initial', textDecorationStyle: 'initial', textDecorationColor: 'rgb(232, 72, 57)', textUnderlineOffset: '20px' }}>
          App Features
        </h1>

        <div  className="mt-12 h-auto mb-4 pt-4 w-screen sm:w-full">
          <div className="mx-auto max-w-4xl w-full">
            <Slider {...settings} className="mx-auto">
              {data.map((value, index) => (
                <div className="px-0 overflow-hidden sm:px-4" key={index}>
                  <div className="flex sm:flex-row sm:w-full flex-col justify-evenly sm:items-center feature">
                    {/* Responsive Image Section */}
                    <div className="w-2/3  sm:w-1/3">
                      <img
                        src={value.src}
                        alt="app-img"
                        className="align-middle border-none rounded"
                      />
                    </div>

                    {/* Responsive Text Section */}
                    <div className="px-4 h-auto w-full sm:w-2/3 text-left">
                      <h2 className="text-[#637b89] text-base sm:text-4xl font-medium mt-0 mb-4">{value.heading}</h2>
                      <p className="sm:text-lg text-sm mb-4">{value.para}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>

  )}
  export default Feature