
import HIWData,{Howitsworks,Watchvideo} from "./HIWData";

function HowItWorks() {
  return (
    <div className="w-full px-4 block lg:ml-32 mr-0">
      <h1 className="text-4xl mb-2 font-medium mt-0 underline" style={{ textDecorationThickness: 'initial', textDecorationStyle: 'initial', textDecorationColor: 'rgb(232, 72, 57)', textUnderlineOffset: '20px' }}>How it Works</h1>

      <div className="mt-5 flex flex-wrap justify-evenly mx-auto w-full">
        {/* Responsive Grid Layout */}
        <div className="w-full lg:w-1/2 flex flex-col flex-wrap">
          <ul className="pl-0 mt-0 mb-4 justify-between block list-disc ">
            {/* Responsive List Items */}
            {
              HIWData.map((data,index)=>(
                <li key={index} className="list-none mt-4 mb-0 mx-0 items-center flex flex-wrap  ">
              <img src={data.src} alt="" className="h-auto max-w-full align-middle border-none mr-3 review" width="69px" />
            {data.text}
            </li>
              ))
            }
            
           
            
            
          </ul>
          <div className="items-center mt-6 block">
            <img src={Watchvideo} alt="" className="max-w-full h-auto align-middle border-none text-center" width="" />
          </div>
        </div>

        {/* Responsive Image Section */}
        <div className="w-1/2 lg:w-1/2 block mt-8 lg:mt-0 review">
          <img src={Howitsworks} alt="feature-img" width="" className=" max-w-full h-auto align-middle border-none text-center rounded" />
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
