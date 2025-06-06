const projects = [
  {
    title: "Tourism App – SL Portal (Tech-Triathlon 2024)",
    image: "SLPortal.png",
    tech: ["Flutter", "Firebase", "Figma"],
    description:
      "SL Portal, an all-in-one tourism app designed to enhance travel in Sri Lanka with features like itinerary planning, visa processing, and community travel blogs.",
    repo: "https://github.com/Iyadh27/CodexBots_SL-Portal",
  },
  {
    title: "Ecommerce Platform Database Project (Academic project)",
    image: "Eagle1.png",
    tech: ["MySQL", "Node.js", "React", "Express"],
    description:
      "A full-stack e-commerce platform supporting detailed product variants, inventory management, and a comprehensive reporting system for monitoring and analytics.",
    repo: "https://github.com/ThisaraWeerakoon/ECommerce_Platform_DataBase_Project",
  },
  {
    title: "Job Searching Application (Ongoing personal project)",
    image: "CV.jpg",
    tech: ["MongoDB", "React", "Node.js", "Express"],
    description:
      "A web-based application to streamline the job search process, facilitating seamless connections and interactions between candidates and employers.",
    repo: "https://github.com/DinithiLiyanage/CV-Management-System",
  },
  {
    title: "Web-based Order Management System (Individual project for BCS PGD)",
    image: "FoodBeforeMe1.png",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    description:
      'Food Before Me, a web-based order management system designed to centralize food orders, improve customer satisfaction, and optimize operations.',
    repo: "https://github.com/DinithiLiyanage/WebBasedOrderManagementSystem",
  },
];

export default function ProjectCards() {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 py-10">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-700 hover:shadow-xl transition-shadow"
        >
          <div className="relative h-48 w-full">
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold text-white">
          {project.title}
              </h3>
              {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#66FCF1] hover:underline ml-2"
          >
            🔗
          </a>
              )}
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tech.map((tech, i) => (
          <span
            key={i}
            className="text-xs bg-[#66FCF1]/10 text-[#66FCF1] px-2 py-1 rounded-full"
          >
            {tech}
          </span>
              ))}
            </div>
            <p className="text-gray-300 mt-3 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
