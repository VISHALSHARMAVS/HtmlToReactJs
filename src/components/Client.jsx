import UserData from "./ClientData";

function Client() {
  return (
    <div className="w-full overflow-hidden mb-16">
      <div className="marquee h-36 border border-gray-200 rounded-lg shadow-md p-4">
        {/* Responsive Image Scrolling */}
        <div className="flex w-full animate-scroll scroll whitespace-nowrap">
          {UserData.map((d, index) => (
            <img key={index} src={d.src} alt="" className="w-full h-auto mx-4" />
          ))}
          {UserData.map((d, index) => (
            <img key={index + UserData.length} src={d.src} alt="" className="w-full h-auto mx-4" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Client;
