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
        <div className="lg:w-1/4 w-full p-6 bg-gray-800 text-white shadow-md lg:sticky lg:top-0 lg:h-screen">
          <Sidebar data={data} />
        </div>
        <div className="lg:ml-1/4 lg:w-3/4 w-full p-8 overflow-auto">
          <Content data={data} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
