import React from 'react';
import iconMapping from './IconMapping';

function Content({ data }) {
  // Map skills to Icons8 icon URLs
  return (
    <main className="p-6 lg:p-12">
      {/* Experience Section */}
      <section className="mt-8">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Experience</h3>
        <ul className="space-y-8">
          {data.experience.map((exp, index) => (
            <li key={index} className="bg-white p-6 shadow-md rounded-lg border-l-4 border-blue-500">
              <h4 className="text-xl font-semibold text-gray-900">{exp.role}</h4>
              <h5 className="text-md font-medium text-gray-700">{exp.company}</h5>
              <p className="text-gray-600 mt-2">{exp.description}</p>
              <span className="block mt-4 text-sm text-gray-500">{exp.duration}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Projects Section */}
      <section className="mt-16">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Projects</h3>
        <ul className="space-y-8">
          {data.projects.map((project, index) => (
            <li key={index} className="bg-white p-6 shadow-md rounded-lg border-l-4 border-green-500">
              <h4 className="text-xl font-semibold text-gray-900">{project.name}</h4>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-blue-500 hover:underline"
              >
                View Project
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Skills Section */}
      <section className="mt-16">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Skills</h3>
        <ul className="grid grid-cols-6 sm:grid-cols-3 lg:grid-cols-8 gap-3">
          {data.skills.map((skill, index) => (
            <li
              key={index}
              className="bg-gray-100 p-2 shadow-md rounded-sm text-center flex items-center justify-center h-20 group"
            >
              <div className="flex flex-col items-center justify-center">
                {/* Render Icon from Icons8 */}
                {iconMapping(skill) ? (
                  <>
                  <img
                    src={iconMapping(skill)}
                    alt={skill}
                    className="w-12 h-12 group-hover:animate-spin"
                  />
                  <h4 className="text-xs font-semibold text-gray-700">{skill}</h4>
                  </>
                ) : (
                  <h4 className="text-xs font-semibold text-gray-700">{skill}</h4>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Content;
