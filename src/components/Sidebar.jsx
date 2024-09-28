import React from 'react'

function Sidebar({ data }) {
  return (
    <aside className="flex flex-col items-center">
      <img
        className="rounded-full w-28 h-28 mb-4 border-4 border-white shadow-lg"
        src="https://media.licdn.com/dms/image/v2/D4D03AQEpxfduhcg6zg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1683449928396?e=1732752000&v=beta&t=ZVbQ1s3wLcorLJKmRK-cpZWtH80GKLAog1dBNLe7TK4"
        alt="Darsh Jain"
      />
      <h2 className="text-xl font-bold mb-2">{ data.header.name }</h2>
      <p className="text-sm text-gray-300 text-center mb-6">{ data.about.description }</p>
      <ul className="space-y-4">
        { data.links.map((link, index) => (
          <li key={ index }>
            <a
              href={ link.url }
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              { link.label }
            </a>
          </li>
        )) }
      </ul>
    </aside>
  )
}

export default Sidebar
