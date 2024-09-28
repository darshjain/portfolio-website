import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Footer from './components/Footer';
import portfolioData from './data/portfolioData.json';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(portfolioData);
  }, []);

  if (!data) return <div className="text-center text-gray-500 mt-10">Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex flex-col lg:flex-row flex-grow max-w-7xl mx-auto shadow-lg border border-gray-200 bg-white">
        {/* Sidebar */}
        <div className="lg:w-1/4 w-full p-6 bg-gray-800 text-white shadow-md">
          <Sidebar data={data} />
        </div>
        
        {/* Content */}
        <div className="lg:w-3/4 w-full p-8">
          <Content data={data} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
