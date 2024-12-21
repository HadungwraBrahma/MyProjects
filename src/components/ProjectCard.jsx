const ProjectCard = ({ title, onClick }) => (
  <div
    onClick={onClick}
    className="p-6 m-4 bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 border border-gray-200"
  >
    <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
    <p className="text-gray-600">Click to explore</p>
  </div>
);

export default ProjectCard;
