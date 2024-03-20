import banner from "../assets/images/banner.jpg";
import banner1 from "../assets/images/banner1.png";
import googleplay from "../assets/images/gogleplay.png";
import qr from "../assets/images/qr.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Banner() {
  return (
    <div className=" bg-white px-4 mt-6 mx-auto py-24 mb-6 w-screen md:w-full">
      <div className="flex flex-col sm:flex-row items-center justify-start lg:ml-28">
        {/* Responsive Text and Image Section */}
        <div className="my-2 relative w-full px-4">
          <div className="flex items-center">
            <img
              src={banner1}
              alt="Banner"
              className="self-start max-w-full h-auto align-middle"
            />
            <div className="grow shrink basis-auto mt-0 ml-4">
              <h4 className="mb-0 leading-tight mt-0 text-black sm:text-2xl text-sm font-semibold">
                Simply English AI
              </h4>
              <p className="mt-0 mb-4 text-black text-sm">
                Your Gateway to Success!
              </p>
            </div>
          </div>
          <h4 className="leading-[55px] mt-6 text-black sm:text-2xl text-sm font-bold md:text-2xl ml-0 mb-2 md:mb-6">
            Unlock 1 Billion Dreams <br />
            With Our AI Driven English Learning APP
          </h4>
          <ul className="text-black sm:pl-10 pl-0 sm:w-96 w-full  sm:my-6 text-sm list-disc">
            <li className=" text-start">
              Elevate Your Language Skills for Interviews and Exams
            </li>
            <li className="w-fit text-start">Powered by Advanced AI Technology</li>
            <li className="w-fit text-start">
              Future of Education, Right at Your Fingertips
            </li>
          </ul>

          {/* Responsive Download and Social Icons Section */}
          <div className="flex flex-col justify-between w-full mt-8">
            <div className="flex items-center w-full md:w-1/2 justify-start">
              <img
                src={googleplay}
                alt="Google Play"
                className="w-1/4 h-auto align-middle cursor-pointer"
              />
              <img
                src={qr}
                alt="QR Code"
                className=" w-1/6 h-auto align-middle ml-4"
              />
            </div>
            <div className="flex justify-start mt-4 md:mt-10 w-full md:w-1/2">
              <a
                href="#"
                className="mr-2 myHover border border-black rounded-[50%] w-8 h-8 hover:bg-gray-200"
              >
                <FontAwesomeIcon icon={faFacebookF} className="p-2" />
              </a>
              <a
                href="#"
                className="mr-2 myHover border border-black rounded-[50%] w-8 h-8 hover:bg-gray-200"
              >
                <FontAwesomeIcon icon={faInstagram} className="p-2" />
              </a>
              <a
                href="#"
                className="mr-2 myHover border border-black rounded-[50%] w-8 h-8 hover:bg-gray-200"
              >
                <FontAwesomeIcon icon={faTwitter} className="p-2" />
              </a>
            </div>
          </div>
        </div>
      <div className="mb-2 relative w-full px-4">
        <img
          src={banner}
          alt="Banner"
          className="w-4/5 pt-16 max-w-full h-auto align-middle"
          />
      </div>
    </div>
          </div>
  );
}

export default Banner;
