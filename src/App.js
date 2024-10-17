import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import portfolioData from './data/portfolioData.json';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(portfolioData);
    // Update the document title
    document.title = "Darsh Jain - Portfolio | MSCS Student at UVA";
    // Add meta tags for SEO and social sharing
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = "Darsh Jain's portfolio showcasing projects, skills, experience, and education as a Computer Science student at the University of Virginia.";
    document.head.appendChild(metaDescription);

    const metaImage = document.createElement('meta');
    metaImage.property = 'og:image';
    metaImage.content = 'https://avatars.githubusercontent.com/u/65119169?v=4'; // Replace with your image URL
    document.head.appendChild(metaImage);

    const metaUrl = document.createElement('meta');
    metaUrl.property = 'og:url';
    metaUrl.content = window.location.href; // Current URL
    document.head.appendChild(metaUrl);

    const metaTitle = document.createElement('meta');
    metaTitle.property = 'og:title';
    metaTitle.content = "Darsh Jain - Portfolio";
    document.head.appendChild(metaTitle);

    const metaType = document.createElement('meta');
    metaType.property = 'og:type';
    metaType.content = 'website';
    document.head.appendChild(metaType);

    const metaFavicon = document.createElement('link');
    metaFavicon.rel = 'icon';
    metaFavicon.href = '/path/to/favicon.ico'; // Replace with your favicon URL
    document.head.appendChild(metaFavicon);

  }, []);

  if (!data) return <div className="text-center text-gray-500 mt-10">Loading...</div>;

  return (
    <div className="h-screen flex flex-col bg-gray-50 m-0 p-0">
      <div className="flex flex-col lg:flex-row flex-grow max-w-7xl w-full mx-auto bg-white h-full">
        <div className="lg:w-1/4 w-full p-6 bg-gray-800 text-white shadow-md lg:sticky lg:top-0 lg:h-screen">
          <Sidebar data={data} />
        </div>
        <div className="lg:ml-1/4 lg:w-3/4 w-full p-6 overflow-auto">
          <Content data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
