const projects = [
    {
        title: "A Chaos Engineering Framework for Kubernetes (Final Year Project)",
        image: "Kubernetes.png",
        tech: ["Kubernetes", "Go", "Python"],
        description:
            "A chaos engineering framework to analyze resiliency within Kubernetes control plane (e.g., scheduler, controller manager, API server). We are planning to develop a framework for automated fault injection with an experiment orchestrator to evaluate system behavior under controlled disruptions.",
        repo: "",
    },
    {
        title: "E-voting System – WeVote (Academic Project) ",
        image: "WeVote2.png",
        tech: ["FastAPI", "MySQL", "Next.js"],
        description:
            "A comprehensive secure e-voting system featuring advanced cryptographic protocols, multi-platform support, and enterprise-grade security for educational institutions and organizations.",
        repo: "https://github.com/DinithiLiyanage/WeVote",
    },
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
            "Food Before Me, a web-based order management system designed to centralize food orders, improve customer satisfaction, and optimize operations.",
        repo: "https://github.com/DinithiLiyanage/WebBasedOrderManagementSystem",
    },
];

export default function ProjectCards() {
    return (
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 py-10">
            {projects.map((project, idx) => (
                <div
                    key={idx}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl hover:shadow-cyan-200/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                    style={{
                        animation: "fadeInUp 0.8s ease-out forwards",
                        animationDelay: `${idx * 0.15}s`,
                        opacity: 0,
                    }}
                >
                    <div className="relative h-48 w-full">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="h-48 w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/30 to-transparent" />
                    </div>
                    <div className="p-4">
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl font-semibold text-gray-900">
                                {project.title}
                            </h3>
                            {project.repo && (
                                <a
                                    href={project.repo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-600 hover:text-cyan-700 ml-2 transition-transform duration-300 hover:scale-125 hover:rotate-12"
                                >
                                    🔗
                                </a>
                            )}
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {project.tech.map((tech, i) => (
                                <span
                                    key={i}
                                    className="text-xs bg-cyan-50 text-cyan-700 px-2 py-1 rounded-full font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                            {project.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
