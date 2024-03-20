import { contactus, qr, gogleplay } from "./images";

function KeepInTouch() {
  return (
    <div className="bg-[#d9d9d9] py-16">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="my-2 px-4">
          <img src={contactus} alt="Contact Us" className="h-auto md:w-4/5 w-3/4 align-middle mb-4 border-none" />
        </div>
        <div className="my-2 px-4 ">
          <div className="flex w-full text-center flex-col ">
          <h3 className="text-3xl mb-4 font-medium mt-0">Keep In Touch</h3>
          <p className="mb-6 text-blue-900 font-semibold">
            <b>Email Address</b><br />
            <a href="mailto:info@simplyenglish.ai">info@simplyenglish.ai</a>
          </p>
          <p className="mb-6 text-blue-900 font-semibold">
            <b>Phone Number</b><br />
            India: <a href="tel:+919599060043">9599060043</a>
          </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center mb-4 md:mb-0">
            <a href="https://play.google.com/store/games?hl=en_IN&gl=US&pli=1" target="_blank" className=" text-blue-500  mr-4 md:mr-8">
              <img src={gogleplay} alt="Google Play" width="100" className="h-auto  align-middle border-none mb-4 rounded cursor-pointer" />
            </a>
            <img src={qr} alt="QR Code" width="100" className="h-auto align-middle border-none rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeepInTouch;
