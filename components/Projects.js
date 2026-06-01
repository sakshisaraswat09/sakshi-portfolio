function Projects() {
  try {
    const projects = [
      {
        title: 'Spendora',
        subtitle: 'AI-Powered Personal Finance Manager',
        description: 'A modern finance management platform combining ML and AI-powered insights for expense tracking and financial analytics.',
        tech: ['Next.js', 'Tailwind CSS', 'Prisma', 'Gemini AI', 'CatBoost'],
        github: 'https://github.com/sakshisaraswat09/Spendora',
        image: 'assets/projects/spendora.png',
        accent: 'from-blue-600/30 via-indigo-900/40 to-purple-900/50',
      },
      {
        title: 'JourneyOfWords',
        subtitle: 'Blogging Platform',
        description: 'Full-stack blogging platform enabling users to create, manage, and share content through a secure interface.',
        tech: ['React', 'Node.js', 'MongoDB', 'JWT'],
        github: 'https://github.com/sakshisaraswat09/JourneyofWords',
        image: 'assets/projects/journeyofwords.png',
        accent: 'from-emerald-600/25 via-teal-900/40 to-blue-900/50',
      },
      {
        title: 'Spark',
        subtitle: 'Educational Platform',
        description: 'Educational platform supporting children with special needs through accessible learning experiences.',
        tech: ['React', 'HTML', 'CSS'],
        github: 'https://github.com/sakshisaraswat09/SPARK',
        image: 'assets/projects/spark.png',
        accent: 'from-orange-500/25 via-rose-900/40 to-purple-900/50',
      },
    ];

    return (
      <section id="projects" className="section-surface py-20 relative" data-name="projects" data-file="components/Projects.js">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                Featured <span className="gradient-text">Projects</span>
              </h2>
            </FadeIn>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <SlideIn
                  key={index}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                  delay={index * 100}
                  className="h-full"
                >
                  <div className="glass rounded-2xl p-6 hover-glow transition-all group h-full flex flex-col overflow-hidden">
                    <ProjectPreview
                      image={project.image}
                      title={project.title}
                      accent={project.accent}
                    />
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-blue-400 mb-4">{project.subtitle}</p>
                    <p className="text-gray-400 mb-4 text-sm flex-grow">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3 mt-auto">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-lift flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-sm hover:bg-gray-700"
                      >
                        <div className="icon-github text-base"></div>
                        Code
                      </a>
                    </div>
                  </div>
                </SlideIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Projects error:', error);
    return null;
  }
}
