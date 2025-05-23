import DiamondNavbar from "../../components/DiamondNavbar";

export default function Projects() {
  const projects = [
    {
      title: "Magiya",
      description:
        "Magiya is a mobile application developed using React Native for the company Magiya to enhance and simplify public transportation for its users. The app allows users to easily book seats on Magiya transport vehicles, view detailed route and schedule information, and stay updated with real-time transport status. Designed with a user-friendly interface, Magiya makes commuting more convenient and efficient by bringing smart transport booking to users' fingertips.",
    },
    {
      title: "Ares",
      description:
        "This desktop application is a lightweight and efficient virus scanner built using Electron.js for the user interface and Rust for the core scanning engine. It allows users to scan downloaded files and manually select folders or individual files for malware detection. Designed to run smoothly across platforms, the app provides fast and secure file scanning, making it an essential tool for maintaining local system safety during downloads and manual file management.",
      link: "https://github.com/MChamuka/ares",
    },
    {
      title: "Dualnet",
      description:
        "This desktop application, developed using Electron.js for the interface, C++ for low-level network handling, and FastAPI for backend communication, enables users to utilize two Wi-Fi connections simultaneously by assigning different applications to separate networks. It optimizes bandwidth usage and enhances performance by intelligently distributing network traffic, making it ideal for multitasking scenarios like streaming and downloading concurrently without interference.",
      link: "https://github.com/MChamuka/dualnet",
    },
    {
      title: "clothing and electronic store",
      description:
        "This is a desktop-based clothing shop management system developed in Java, featuring a user-friendly interface built with Swing. The system allows customers to browse and purchase products, while also handling essential operations like inventory updates and transaction tracking. Designed to streamline the shopping experience, it serves as a complete solution for small to medium-sized clothing retailers.",
      link: "https://github.com/MChamuka/2ndYearOOPCoursework/tree/master",
    },
    {
      title: "Expense Share",
      description:
        "This mobile application, built with React Native for the frontend and Go (Golang) for the backend, allows users to easily share and manage expenses with friends—similar to Splitwise. It supports creating groups, adding expenses, and automatically calculating who owes whom. Using SQLite for local data storage, the app ensures smooth performance and offline access, making it a reliable tool for tracking shared expenses in everyday situations like trips, events, or group outings.",
    },
    {
      title: "JetViaLens",
      description:
        "This web application, developed using React for the frontend, Express.js for the backend, and MongoDB for data storage, allows users to discover filming locations of their favorite movies. By visiting these real-world locations, users can unlock achievements and document their experiences. The platform also includes personalized user profiles and a built-in journal feature, enabling users to log their journeys and track visited locations, blending entertainment with exploration and travel.",
      link: "https://github.com/MChamuka/SDGP_project",
    },
  ];

  return (
    <div className="p-10 space-y-10 bg-[#252425] text-[#FFC0C0] min-h-screen">
      <DiamondNavbar />

      <h1 className="text-3xl font-bold mt-20">Projects</h1>
      {projects.map((project, idx) => (
        <div key={idx} className="bg-[#171617] p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
          <p className="mb-2">{project.description}</p>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              View on GitHub
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
