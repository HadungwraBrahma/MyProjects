import { Link } from "react-router-dom";

const ProjectLinks = ({ type }) => {
  const projects = {
    live: [
      { name: "Email Client", url: "https://email-client-gold.vercel.app/" },
      {
        name: "Interactive Data Visualization",
        url: "https://interactive-data-visualization-nine.vercel.app/",
      },
    ],
    code: [
      {
        name: "Email Client Code",
        url: "https://github.com/HadungwraBrahma/EmailClient",
      },
      {
        name: "Interactive Data Visualization Code",
        url: "https://github.com/HadungwraBrahma/InteractiveDataVisualization",
      },
    ],
  };

  const currentProjects = type === "live" ? projects.live : projects.code;
  const title = type === "live" ? "Live Projects" : "Project Code";

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">{title}</h1>
        <Link to="/" className="text-blue-600 hover:text-blue-800 mb-6 block">
          ← Back to Home
        </Link>
        <div className="space-y-4">
          {currentProjects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {project.name}
              </h3>
              <p className="text-blue-600 mt-2">Click to visit →</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectLinks;
