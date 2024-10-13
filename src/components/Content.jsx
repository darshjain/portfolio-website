import React from "react";
import iconMapping from "./IconMapping";

function Content({ data }) {
  return (
    <main className="p-4 lg:p-4">
      {/* Education Section */}
      <section>
        <h3 className="text-gray-800 text-lg mb-4">Education</h3>
        <ul className="space-y-4">
          {data.education.map((edu, index) => (
            <li key={index} className="flex flex-col mb-4 p-3 border-b border-gray-200 last:border-none">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-xl text-gray-700 font-normal">{edu.degree}</h4>
                  <h5 className="text-base text-gray-500 mt-1 font-light">{edu.school}</h5>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-xs text-gray-400">{edu.duration}</span>
                  <span className="text-xs text-gray-400">GPA: {edu.gpa}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Experience Section */}
      <section className="mt-8">
        <h3 className="text-gray-800 text-lg mb-4">Experience</h3>
        <ul className="space-y-4">
          {data.experience.map((exp, index) => (
            <li key={index} className="flex flex-col mb-4 p-3 border-b border-gray-200 last:border-none">
              {/* Title and Duration */}
              <div className="flex justify-between">
                <div>
                  <h4 className="text-xl text-gray-700 font-normal">{exp.role}</h4>
                  <h5 className="text-base text-gray-500 font-light">{exp.company}</h5>
                </div>
                <span className="text-xs text-gray-400">{exp.duration}</span>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap mt-3">
                {exp.tech_stack.split(',').map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full mr-2 mb-2"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>

              {/* Description */}
              <ul className="list-disc ml-5 text-gray-600 text-sm mt-3 space-y-1">
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
        <h3 className="text-gray-800 text-lg mb-4">Projects</h3>
        <ul className="space-y-4">
          {data.projects.map((project, index) => (
            <li key={index} className="flex flex-col mb-4 p-3 border-b border-gray-200 last:border-none">
              <div className="flex justify-between items-center">
                <h4 className="text-xl text-gray-700 font-normal">{project.name}</h4>
                <span className="text-xs text-gray-400">{project.duration}</span>
              </div>
              <p className="text-gray-600 text-sm mt-2">{project.description}</p>

              {/* Icons for links (Patent, Paper, GitHub) */}
              <div className="mt-2 flex space-x-3">
                {project.patent && (
                  <a
                    href={project.patent}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Patent"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    <img
                      src={iconMapping("Patent")}
                      alt="Patent"
                      className="w-5 h-5"
                    />
                  </a>
                )}

                {project.paper && (
                  <a
                    href={project.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Paper"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    <img
                      src={iconMapping("Paper")}
                      alt="Paper"
                      className="w-5 h-5"
                    />
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    <img
                      src={iconMapping("Github")}
                      alt="GitHub"
                      className="w-5 h-5"
                    />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Skills Section */}
      <section className="mt-8">
        <h3 className="text-gray-800 text-lg mb-4 text-center sm:text-left">
          Skills
        </h3>
        <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
          {data.skills.map((skill, index) => (
            <li
              key={index}
              className="bg-gray-100 p-4 shadow-md rounded-lg text-center flex flex-col items-center justify-center h-20 group hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center justify-center">
                {iconMapping(skill) ? (
                  <>
                    <img
                      src={iconMapping(skill)}
                      alt={skill}
                      className="w-10 h-8 mb-2 group-hover:animate-spin"
                    />
                    <h4 className="text-xs text-gray-700 font-normal">
                      {skill}
                    </h4>
                  </>
                ) : (
                  <h4 className="text-xs text-gray-700 font-normal">
                    {skill}
                  </h4>
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
