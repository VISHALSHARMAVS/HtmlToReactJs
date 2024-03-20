import  benefit1 from "../assets/images/benefit1.png"
 import benefit2 from "../assets/images/benefit2.png" 
 import  benefit3  from "../assets/images/benefit3.png";

function Benifit() {
  return (
    <div className="bg-[#53747e] py-12 my-20 md:w-full w-screen">
      <div className="lg:ml-24 w-full px-4 mx-auto">
        <h1
          className="p-8 text-[2.5rem] mb-2 leading-tight mt-0 underline font-medium text-white"
          style={{ textDecorationThickness: "initial", textDecorationStyle: "initial", textDecorationColor: "rgb(255, 255, 255)", textUnderlineOffset: "20px" }}
        >
          Key Benefits
        </h1>
        <div className="mt-12 flex items-center justify-evenly w-full ">
          {/* Responsive Benefit Cards */}
          <div className="flex flex-col items-center justify-center w-full md:w-1/3 text-center  px-4 mt-2">
            <img src={benefit1} alt="feature-img" width="180px" className="max-w-full h-auto align-middle rounded" />
            <h3 className="text-white mt-6 text-[1.75rem] leading-tight w-full text-center font-medium mb-2 pb-2">24X7 English Tutor</h3>
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-1/3 text-center px-4 mt-2">
            <img src={benefit2} alt="feature-img" width="180px" className="rounded max-w-full h-auto align-middle" />
            <h3 className="text-white w-full mt-6 text-[1.75rem] text-center font-medium mb-2 pb-2">Ask Questions Any Time</h3>
          </div>
          <div className="w-full flex flex-col justify-center items-center md:w-1/3 text-center px-4 mt-2">
            <img src={benefit3} alt="feature-img" width="180px" className="rounded max-w-full h-auto align-middle" />
            <h3 className="text-white mt-6 text-[1.75rem] ml-0 text-center font-medium mb-2 w-full pb-2">Progress Tracking</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benifit;
