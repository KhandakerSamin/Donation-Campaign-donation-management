
import backgroundImage from '../../Img/bg.png';
import AllDonations from '../Donations/AllDonations';
import { useEffect, useState } from 'react';
const Banner = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setData(data))
  }, []);

  const handleSearch = (e) => {
    setData(data)
    e.preventDefault();
    const inputValue = e.target.search.value;
    const searchData = data.filter(item => item.category.toLowerCase() === inputValue.toLowerCase());
    if (searchData.length > 0) {
      setData(searchData)
    } else {
      setData(data);
    }
  }

  return (
    <section>
      <div className="relative">
        <div
          className="bg-cover bg-center h-[60vh]"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="bg-opacity-90 bg-white h-full w-full absolute top-0 left-0"></div>
          <h1 className="text-2xl lg:text-5xl font-bold text-center text-black absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            I Grow By Helping People In Need
          </h1>
          <form onSubmit={handleSearch} action="">
            <div className="absolute bottom-16 md:bottom-32 lg:bottom-52 left-1/2 transform -translate-x-1/2 flex items-center">
              <input
                type="text"
                name='search'
                placeholder="Search..."
                className="px-4 py-2 border rounded-l-lg"
              />
              <button type='submit' className="bg-[#FF444A] text-white px-4 py-2 rounded-r-lg">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <AllDonations data={data}></AllDonations>
    </section>
  );
};

export default Banner;




