import React from 'react';
import iconMapping from './IconMapping';

function Content({ data }) {
  return (
    <main className="p-6 lg:p-12">
      
      {/* Experience Section */}
      <section className="mt-12">
        <h3 className="text-3xl text-gray-900 mb-8">Experience</h3>
        <ul className="space-y-10">
          {data.experience.map((exp, index) => (
            <li
              key={index}
              className="bg-white p-8 shadow-lg rounded-lg border-l-8 border-blue-500 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-2xl text-gray-800">{exp.role}</h4>
                <span className="text-sm text-gray-500">{exp.duration}</span>
              </div>
              <h5 className="text-lg font-medium text-gray-600 mt-2">{exp.company}</h5>
              <p className="text-gray-600 mt-4 leading-relaxed">{exp.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Projects Section */}
      <section className="mt-16">
        <h3 className="text-3xl text-gray-900 mb-8">Projects</h3>
        <ul className="space-y-10">
          {data.projects.map((project, index) => (
            <li
              key={index}
              className="bg-white p-8 shadow-lg rounded-lg border-l-8 border-green-500 hover:shadow-xl transition-shadow duration-300"
            >
              <h4 className="text-2xl  text-gray-800">{project.name}</h4>
              <p className="text-gray-600 mt-4 leading-relaxed">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-500 hover:underline"
              >
                View Project
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Education Section */}
      <section className="mt-16">
        <h3 className="text-3xl  text-gray-900 mb-8">Education</h3>
        <ul className="space-y-10">
          {data.education.map((edu, index) => (
            <li
              key={index}
              className="bg-white p-8 shadow-lg rounded-lg border-l-8 border-yellow-500 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-2xl  text-gray-800">{edu.degree}</h4>
                <span className="text-sm text-gray-500">{edu.duration}</span>
              </div>
              <h5 className="text-lg font-medium text-gray-600 mt-2">{edu.school}</h5>
              <p className="text-gray-600 mt-4 leading-relaxed">{edu.description}</p>
              <p className="text-gray-600 mt-2 font-medium">GPA: {edu.gpa}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Skills Section */}
      <section className="mt-16">
        <h3 className="text-3xl  text-gray-900 mb-8 text-center sm:text-left">Skills</h3>
        <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
          {data.skills.map((skill, index) => (
            <li
              key={index}
              className="bg-gray-100 p-6 shadow-md rounded-lg text-center flex flex-col items-center justify-center h-28 group hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center justify-center">
                {/* Render Icon from Icons8 */}
                {iconMapping(skill) ? (
                  <>
                    <img
                      src={iconMapping(skill)}
                      alt={skill}
                      className="w-12 h-12 mb-2 group-hover:animate-spin"
                    />
                    <h4 className="text-sm  text-gray-700">{skill}</h4>
                  </>
                ) : (
                  <h4 className="text-sm  text-gray-700">{skill}</h4>
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
