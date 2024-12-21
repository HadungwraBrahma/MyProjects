import { useNavigate } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Project Showcase
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            title="Live Projects"
            onClick={() => navigate("/live")}
          />
          <ProjectCard title="Project Code" onClick={() => navigate("/code")} />
        </div>
      </div>
    </div>
  );
};

export default Home;
