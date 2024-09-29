import { useState } from 'react';

function Header() {
  const [selectedDay, setSelectedDay] = useState('');
  const [ghiValue, setGhiValue] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Day: ${selectedDay}, GHI Value: ${ghiValue}`);
    // You can process or store the data here
  };

  return (
    <header className="bg-gray-900 text-white p-6 shadow-md ">
      <div className="container lg:mx-auto px-6 flex justify-between items-center ml-6 flex-wrap space-y-4 lg:space-y-0">
        <div className='flex space-x-8'>
        <h1 className="text-2xl font-bold tracking-wide">SIH_1739</h1>
                    {/* Navigation Links */}
        <nav className="space-x-6 text-sm lg:text-base font-semibold mt-1">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#learn" className="hover:text-gray-300">Learn</a>
          <a href="#about" className="hover:text-gray-300">About</a>
        </nav>
        </div>
      
        

        <form onSubmit={handleSubmit} className="flex flex-wrap gap-6 items-center">
          {/* Day Selection (using calendar) */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="day" className="text-sm font-semibold tracking-wide">Select Day:</label>
            <input
              type="date"
              id="day"
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
              className="text-black rounded-md p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* GHI Value Input */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="ghi" className="text-sm font-semibold tracking-wide">GHI (kWh/m²):</label>
            <input
              type="number"
              id="ghi"
              value={ghiValue}
              onChange={(e) => setGhiValue(e.target.value)}
              className="text-black rounded-md p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter GHI value"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 sm:mt-7 rounded-md font-semibold shadow-md transform transition-transform hover:scale-105"
          >
            Calculate
          </button>
        </form>


      </div>
    </header>
  );
}

export default Header;
