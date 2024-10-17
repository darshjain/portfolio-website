import React from "react";
import iconMapping from "./IconMapping";

function Content({ data }) {
  return (
    <main className="p-4 lg:p-4 overflow-y-auto h-full">

      {/* Education Section */}
      <section className="mt-8">
        <h3 className="text-gray-900 text-lg font-semibold mb-4">Education</h3>
        <ul className="space-y-4">
          {data.education.map((edu, index) => (
            <li key={index} className="border-b border-gray-200 pb-4">
              <div className="flex justify-between">
                <div>
                  <h4 className="text-xl font-medium text-gray-800">{edu.degree}</h4>
                  <h5 className="text-base text-gray-600">{edu.school}</h5>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-500 block">{edu.duration}</span>
                  <span className="text-sm text-gray-500">GPA: {edu.gpa}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Experience Section */}
      <section className="mt-8">
        <h3 className="text-gray-900 text-lg font-semibold mb-4">Experience</h3>
        <ul className="space-y-4">
          {data.experience.map((exp, index) => (
            <li key={index} className="border-b border-gray-200 pb-4">
              <div className="flex justify-between">
                <div>
                  <h4 className="text-xl font-medium text-gray-800">{exp.role}</h4>
                  <h5 className="text-base text-gray-600">{exp.company}</h5>
                </div>
                <span className="text-sm text-gray-500">{exp.duration}</span>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap mt-2 space-x-2">
                {exp.tech_stack.split(',').map((tech, index) => (
                  <span key={index} className="text-xs bg-gray-200 px-2 py-1 rounded-full text-gray-700">
                    {tech.trim()}
                  </span>
                ))}
              </div>

              {/* Description */}
              <ul className="list-disc ml-6 text-gray-700 text-sm mt-3">
                {exp.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      {/* Projects Section */}
      <section className="mt-8">
        <h3 className="text-gray-900 text-lg font-semibold mb-4">Projects</h3>
        <ul className="space-y-4">
          {data.projects.map((project, index) => (
            <li key={index} className="border-b border-gray-200 pb-4">
              <div className="flex justify-between">
                <h4 className="text-xl font-medium text-gray-800">{project.name}</h4>
                <span className="text-sm text-gray-500">{project.duration}</span>
              </div>
              <p className="text-gray-700 text-sm mt-2">{project.description}</p>

              {/* Links for Patent, Paper, GitHub */}
              <div className="flex space-x-4 mt-2">
                {project.patent && (
                  <a href={project.patent} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    <img src={iconMapping("Patent")} alt="Patent" className="inline w-5 h-5 mr-1" /> Patent
                  </a>
                )}
                {project.paper && (
                  <a href={project.paper} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    <img src={iconMapping("Paper")} alt="Paper" className="inline w-5 h-5 mr-1" /> Paper
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    <img src={iconMapping("Github")} alt="GitHub" className="inline w-5 h-5 mr-1" /> GitHub
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Skills Section */}
      <section className="mt-8">
        <h3 className="text-gray-900 text-lg font-semibold mb-4 text-center sm:text-left">Skills</h3>
        <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
          {data.skills.map((skill, index) => (
            <li key={index} className="bg-gray-100 p-4 shadow-sm rounded-lg text-center">
              <div className="flex flex-col items-center">
                {iconMapping(skill) ? (
                  <>
                    <img
                      src={iconMapping(skill)}
                      alt={skill}
                      className="w-10 h-8 mb-2 transition-transform duration-300 ease-in-out transform hover:rotate-180"
                    />
                    <h4 className="text-xs text-gray-800">{skill}</h4>
                  </>
                ) : (
                  <h4 className="text-xs text-gray-800">{skill}</h4>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>


      {/* Certifications Section */}
      <section className="mt-8">
        <h3 className="text-gray-900 text-lg font-semibold mb-4">Certifications</h3>
        <ul className="list-disc ml-6 text-gray-700 text-sm">
          {data.certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </section>

      {/* Publications Section */}
      <section className="mt-8">
        <h3 className="text-gray-900 text-lg font-semibold mb-4">Publications</h3>
        <ul className="space-y-4">
          {data.publications.map((pub, index) => (
            <li key={index} className="border-b border-gray-200 pb-4">
              <div className="flex justify-between">
                <h4 className="text-xl font-medium text-gray-800">{pub.title}</h4>
                <span className="text-sm text-gray-500">{pub.journal}</span>
              </div>
              <p className="text-gray-700 text-sm mt-1">Impact Factor: {pub.impact_factor}</p>
              <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm">
                View Publication
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Patents Section */}
      <section className="mt-8">
        <h3 className="text-gray-900 text-lg font-semibold mb-4">Patents</h3>
        <ul className="space-y-4">
          {data.patents.map((patent, index) => (
            <li key={index} className="border-b border-gray-200 pb-4">
              <div className="flex justify-between">
                <h4 className="text-xl font-medium text-gray-800">{patent.title}</h4>
                <span className="text-sm text-gray-500">{patent.date}</span>
              </div>
              <a href={patent.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm">
                View Patent
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Positions of Responsibility Section */}
      <section className="mt-8">
        <h3 className="text-gray-900 text-lg font-semibold mb-4">Positions of Responsibility</h3>
        <ul className="space-y-4">
          {data.positions_of_responsibility.map((position, index) => (
            <li key={index} className="border-b border-gray-200 pb-4">
              <div className="flex justify-between">
                <h4 className="text-xl font-medium text-gray-800">{position.title}</h4>
                <span className="text-sm text-gray-500">{position.organization}</span>
              </div>
              <span className="text-sm text-gray-500">{position.duration}</span>
              <p className="text-gray-700 text-sm mt-2">{position.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Content;
