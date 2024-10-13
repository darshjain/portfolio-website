import React from 'react';
import { 
  FiGithub, 
  FiLinkedin, 
  FiMail, 
  FiFile, 
  FiPhone, 
  FiGlobe, 
  FiMapPin 
} from 'react-icons/fi'; 

function Sidebar({ data }) {
  return (
    <aside className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg max-w-xs mx-auto">
      {/* Profile Image */}
      <img
        className="rounded-full w-28 h-28 mb-4 border-4 border-gray-200 shadow-md"
        src={data.header.profileImage}
        alt={data.header.name}
      />
      
      {/* Name */}
      <h2 className="text-xl text-gray-900 font-semibold mb-2">{data.header.name}</h2>

      {/* Location */}
      <div className="flex items-center text-gray-500 mb-4">
        <FiMapPin className="mr-2" size={20} />
        <span>{data.about.location}</span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 text-center mb-6">{data.about.description}</p>

      {/* Social Links Grid */}
      <ul className="grid grid-cols-3 gap-4 w-full">
        {data.links.map((link, index) => {
          // Determine the appropriate icon based on the link label
          let IconComponent;
          switch (link.label.toLowerCase()) {
            case 'github':
              IconComponent = FiGithub;
              break;
            case 'linkedin':
              IconComponent = FiLinkedin;
              break;
            case 'email':
              IconComponent = FiMail;
              break;
            case 'resume':
              IconComponent = FiFile;
              break;
            case 'phone':
              IconComponent = FiPhone;
              break;
            default:
              IconComponent = FiGlobe;
          }

          return (
            <li key={index} className="flex justify-center">
              <a
                href={link.label.toLowerCase() === 'resume' ? '/ResumeDarshJain.pdf' : link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 transition-colors duration-200 ease-in-out"
                download={link.label.toLowerCase() === 'resume' ? 'ResumeDarshJain.pdf' : undefined}
                aria-label={link.label}
              >
                <IconComponent size={28} />
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
