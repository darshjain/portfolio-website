import React from 'react';
import iconMapping from './IconMapping';

function Content({ data }) {
  return (
    <main className="p-6 lg:p-12">
      {/* Experience Section */}
      <section className="mt-8">
        <h3 className="text-gray-900 mb-6">Experience</h3>
        <ul className="space-y-8">
          {data.experience.map((exp, index) => (
            <li
              key={index}
              className="bg-white p-8 shadow-lg rounded-lg border-l-8 border-blue-500 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-2xl  text-gray-800">{exp.role}</h4>
                <span className="text-sm text-gray-500">{exp.duration}</span>
              </div>
              <h5 className="text-lg text-gray-600 mt-2">{exp.company}</h5>
              <p className="text-gray-600 mt-4 leading-relaxed">{exp.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Projects Section */}
      <section className="mt-16">
        <h3 className=" text-gray-900 mb-6">Projects</h3>
        <ul className="space-y-8">
          {data.projects.map((project, index) => (
            <li key={index} className="bg-white p-6 shadow-md rounded-lg border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl text-gray-900">{project.name}</h4>
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

      <section className="mt-16">
        <h3 className="text-gray-900 mb-6">Education</h3>
        <ul className="space-y-8">
          {data.education.map((edu, index) => (
            <li

              key={index}
              className="bg-white p-8 shadow-lg rounded-lg border-l-8 border-yellow-500 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-2xl  text-gray-800">{edu.degree}</h4>
                <span className="text-sm text-gray-500">{edu.duration}</span>
              </div>
              <h5 className="text-lg text-gray-600 mt-2">{edu.school}</h5>
              <p className="text-gray-600 mt-4 leading-relaxed">{edu.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Skills Section */}
      <section className="mt-16">
        <h3 className="text-gray-900 mb-6 text-center sm:text-left">Skills</h3>
        <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {data.skills.map((skill, index) => (
            <li
              key={index}
              className="bg-gray-100 p-4 shadow-md rounded-md text-center flex flex-col items-center justify-center h-24 group hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center justify-center">
                {/* Render Icon from Icons8 */}
                {iconMapping(skill) ? (
                  <>
                    <img
                      src={iconMapping(skill)}
                      alt={skill}
                      className="w-10 h-10 group-hover:animate-spin transition-transform duration-300"
                    />
                    <h4 className="text-sm font-semibold text-gray-700 mt-2">{skill}</h4>
                  </>
                ) : (
                  <h4 className="text-sm font-semibold text-gray-700">{skill}</h4>
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
