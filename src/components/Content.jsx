import React from "react";
import iconMapping from "./IconMapping";

function Content({ data }) {
  return (
    <main className="p-6 lg:p-12">
      {/* Education Section */}
      <section>
        <h3 className="text-gray-900 mb-6">Education</h3>
        <ul className="space-y-6">
          {data.education.map((edu, index) => (
            <li key={index} className="flex flex-col mb-6 p-4 border-b border-gray-200 last:border-none">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-2xl text-gray-800">{edu.degree}</h4>
                  <h5 className="text-lg font-medium text-gray-600 mt-1">{edu.school}</h5>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-sm text-gray-500">{edu.duration}</span>
                  <span className="text-sm text-gray-500">GPA: {edu.gpa}</span>
                </div>
              </div>
              <p className="text-gray-600 mt-2">{edu.description}</p>
            </li>
          ))}
        </ul>
      </section>


      {/* Experience Section */}
      <section className="mt-12">
        <h3 className="text-gray-900 mb-6">Experience</h3>
        <ul className="space-y-6">
          {data.experience.map((exp, index) => (
            <li key={index} className="flex flex-col mb-6 p-4 border-b border-gray-200 last:border-none">
              <div className="flex justify-between">
                <h4 className="text-2xl text-gray-800">{exp.role}</h4>
                <span className="text-sm text-gray-500">{exp.duration}</span>
              </div>
              <h5 className="text-lg font-medium text-gray-600 mt-1">{exp.company}</h5>
              {/* Tech Stack */}
              <div className="flex flex-wrap mt-2">
                {exp.tech_stack.split(',').map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded-full mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 mt-2">{exp.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Projects Section */}
      <section className="mt-12">
  <h3 className="text-gray-900 mb-6">Projects</h3>
  <ul className="space-y-6">
    {data.projects.map((project, index) => (
      <li key={index} className="flex flex-col mb-6 p-4 border-b border-gray-200 last:border-none">
        <div className="flex justify-between items-center">
          <h4 className="text-2xl text-gray-800">{project.name}</h4>
          <span className="text-sm text-gray-500">{project.duration}</span>
        </div>
        <p className="text-gray-600 mt-2">{project.description}</p>

        {/* Icons for links (Patent, Paper, GitHub) */}
        <div className="mt-2 flex space-x-4">
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
                className="w-6 h-6"
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
                className="w-6 h-6"
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
                className="w-6 h-6"
              />
            </a>
          )}
        </div>
      </li>
    ))}
  </ul>
</section>





      {/* Skills Section */}
      <section className="mt-12">
        <h3 className="text-gray-900 mb-6 text-center sm:text-left">
          Skills
        </h3>
        <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
          {data.skills.map((skill, index) => (
            <li
              key={index}
              className="bg-gray-100 p-6 shadow-md rounded-lg text-center flex flex-col items-center justify-center h-24 group hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center justify-center">
                {iconMapping(skill) ? (
                  <>
                    <img
                      src={iconMapping(skill)}
                      alt={skill}
                      className="w-15 h-12 mb-2 group-hover:animate-spin"
                    />
                    <h4 className="text-sm  text-gray-700">
                      {skill}
                    </h4>
                  </>
                ) : (
                  <h4 className="text-sm  text-gray-700">
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
