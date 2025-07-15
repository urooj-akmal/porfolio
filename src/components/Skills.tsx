import React from 'react';
import { 
  Brain, 
  Eye, 
  MessageSquare, 
  BarChart3, 
  Database, 
  Gamepad,
  PenTool,
  Code, 
  Cpu 
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Brain className="w-8 h-8" />,
      color: "blue",
      skills: [
        { name: "Python", level: 90 },
        { name: "C++", level: 85 },
        { name: "Java", level: 80 },
        { name: "JavaScript", level: 75 }
      ]
    },
    {
      title: "Web Development",
      icon: <Eye className="w-8 h-8" />,
      color: "purple",
      skills: [
        { name: "React", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "REST APIs", level: 85 }
      ]
    },
    {
      title: "Data & AI",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "green",
      skills: [
        { name: "Machine Learning", level: 80 },
        { name: "Data Analysis", level: 85 },
        { name: "SQL", level: 80 },
        { name: "Statistics", level: 75 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "orange",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "Blender", level: 70 },
        { name: "Unity", level: 65 },
        { name: "MongoDB", level: 75 }
      ]
    }
  ];

  const tools = [
    { name: "React", icon: <Code className="w-6 h-6" />, color: "blue" },
    { name: "Blender", icon: <PenTool className="w-6 h-6" />, color: "green" },
    { name: "Python", icon: <Code className="w-6 h-6" />, color: "blue" },
    { name: "Git", icon: <Database className="w-6 h-6" />, color: "orange" },
    { name: "Unity", icon: <Gamepad className="w-6 h-6" />, color: "blue"  },
    { name: "MongoDB", icon: <Database className="w-6 h-6" />, color: "green" }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-800 border-blue-200",
      purple: "bg-purple-100 text-purple-800 border-purple-200",
      green: "bg-green-100 text-green-800 border-green-200",
      orange: "bg-orange-100 text-orange-800 border-orange-200",
      red: "bg-red-100 text-red-800 border-red-200",
      yellow: "bg-yellow-100 text-yellow-800 border-yellow-200"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive toolkit for building intelligent systems and solving complex problems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg mb-6 ${getColorClasses(category.color)}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${
                            category.color === 'blue' ? 'from-blue-500 to-blue-600' :
                            category.color === 'purple' ? 'from-purple-500 to-purple-600' :
                            category.color === 'green' ? 'from-green-500 to-green-600' :
                            'from-orange-500 to-orange-600'
                          }`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <div key={index} className={`inline-flex items-center px-6 py-3 rounded-full border-2 ${getColorClasses(tool.color)} hover:scale-105 transition-transform duration-300`}>
                  {tool.icon}
                  <span className="ml-2 font-medium">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;