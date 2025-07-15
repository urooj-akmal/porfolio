import React from 'react';
import { ExternalLink, Github, Zap, Brain, Eye, MessageSquare, Code, Cpu } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "GAN-Based Baldify Model",
      description: "Engineered a deep learning pipeline using GANs to perform realistic hair removal and facial reconstruction across genders. Achieved 92% realism accuracy, enabling applications in cosmetic technology, digital avatars, and entertainment filters.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Machine Learning",
      icon: <Brain className="w-5 h-5" />,
      technologies: ["Python", "TensorFlow", "GANs", "Computer Vision", "Deep Learning"],
      features: [
        "92% realism accuracy achieved",
        "Cross-gender hair removal capability",
        "Facial reconstruction of occluded regions",
        "Real-time processing pipeline"
      ],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "STEMxVR - VR Chemistry Lab",
      description: "Led design and development of a VR-based chemistry lab aimed at revolutionizing science education through immersive learning. Won 1st place at GIKI Industrial Open House 2025.",
      image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Ed-Tech",
      icon: <Zap className="w-5 h-5" />,
      technologies: ["VR", "Unity", "3D Modeling", "Blender", "C#"],
      features: [
        "Immersive VR chemistry experiments",
        "3D molecular visualization",
        "Interactive lab equipment simulation",
        "Award-winning educational solution"
      ],
      demoUrl: "#",
      githubUrl: "https://github.com/HaseebIshaq/STEMxVR"
    },
    {
      title: "AI Onboarding Chatbot",
      description: "Built a Llama3-based chatbot using Retrieval-Augmented Generation (RAG) to assist with onboarding logistics at Lucky Core Industries. Reduced manual HR workload by 30% through automated query handling.",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "NLP",
      icon: <MessageSquare className="w-5 h-5" />,
      technologies: ["Python", "Llama3", "RAG", "Langchain", "NLP"],
      features: [
        "30% reduction in HR workload",
        "Real-time assistance for new employees",
        "RAG-based knowledge retrieval",
        "Automated query handling system"
      ],
      demoUrl: "#",
      githubUrl: "https://github.com/urooj-akmal/Onboarding-Chatbot"
    },
    {
      title: "YOLO-Based Automated Attendance System",
      description: "Developed a real-time classroom attendance system using YOLO for facial detection and Python backend automation. Enabled contactless student tracking with seamless accuracy and speed.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Computer Vision",
      icon: <Eye className="w-5 h-5" />,
      technologies: ["Python", "YOLO", "OpenCV", "Computer Vision", "Web Development"],
      features: [
        "Real-time facial recognition",
        "Contactless attendance marking",
        "High accuracy detection",
        "Automated administrative efficiency"
      ],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "GIKI Transport System Automation",
      description: "Designed and implemented a Python-Oracle-based ticket reservation system with automated seat assignment. Reduced manual overhead by 25% and improved user experience with streamlined interface.",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Web Development",
      icon: <Code className="w-5 h-5" />,
      technologies: ["Python", "Oracle", "Web Development", "Database Design", "Automation"],
      features: [
        "Automated seat booking system",
        "25% reduction in processing time",
        "Oracle database integration",
        "Streamlined user interface"
      ],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI Solutions Development",
      description: "Delivered comprehensive AI solutions during internship at Musketeers Tech Inc., including machine learning models, NLP applications, computer vision systems, and conversational AI with ChatGPT API integration.",
      image: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "AI/ML",
      icon: <Cpu className="w-5 h-5" />,
      technologies: ["Python", "TensorFlow", "ChatGPT API", "Machine Learning", "NLP"],
      features: [
        "10% improvement in speech recognition",
        "Reduced chatbot response time",
        "Multiple AI model implementations",
        "ChatGPT API integration"
      ],
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Web Development": "bg-blue-100 text-blue-800",
      "Data Science": "bg-green-100 text-green-800",
      "Machine Learning": "bg-blue-100 text-blue-800",
      "Frontend Development": "bg-purple-100 text-purple-800",
      "Computer Vision": "bg-blue-100 text-blue-800",
      "NLP": "bg-green-100 text-green-800",
      "Ed-Tech": "bg-purple-100 text-purple-800",
      "AI/ML": "bg-blue-100 text-blue-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world AI solutions and innovative projects showcasing expertise in machine learning, computer vision, NLP, and software development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className={`absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(project.category)}`}>
                    {project.icon}
                    <span className="ml-2">{project.category}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.demoUrl}
                      className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="inline-flex items-center border border-gray-300 hover:border-gray-400 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;