import backgroundImage from '../../Img/bg.png';

const Banner = () => {
  return (
    <div className="relative">
      <div
        className="bg-cover bg-center h-[60vh]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="bg-opacity-90 bg-white h-full w-full absolute top-0 left-0"></div>
        <h1 className="text-5xl font-bold text-center text-black absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          I Grow By Helping People In Need
        </h1>
        <div className="absolute bottom-16 md:bottom-32 lg:bottom-52 left-1/2 transform -translate-x-1/2 flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded-l-lg"
          />
          <button className="bg-[#FF444A] text-white px-4 py-2 rounded-r-lg">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
