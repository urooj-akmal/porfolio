import React from 'react';
import meImage from './images/me.png';
import { Brain, Code, Zap, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Software Development",
      description: "Strong foundation in programming languages and software engineering principles"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Experience in both frontend and backend development with modern frameworks"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Analytical thinking and systematic approach to complex technical challenges"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Committed to staying updated with latest technologies and best practices"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm an Artificial Intelligence graduate from Ghulam Ishaq Khan Institute of Engineering Sciences 
              and Technology(GIKI) with a strong foundation in software development and intelligent systems.
               My journey combines academic excellence and building scalable applications with real-world impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src={meImage}  
                alt="AI Developer at work"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                From Theory to Practice
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With a Bachelor's degree in Artificial Intelligence from GIKI University an
                extensive internship experience, I specialize in creating AI-powered solutions 
                that solve real-world problems and deliver measurable impact.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                My expertise spans machine learning, computer vision, NLP, and full-stack development. 
                I've explored broader domains through electives in Data Science, Data Warehousing and Data Mining. 
                I'm passionate about leveraging technology to solve complex problems and create 
                meaningful impact through code.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Python', 'JavaScript', 'React', 'Machine Learning', 'Data Analysis', 'SQL', 'Git'].map((tech) => (
                  <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="text-blue-600 mb-4">
                  {highlight.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;