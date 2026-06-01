function Experience() {
  try {
    const roles = [
      {
        title: 'Associate Software Engineer',
        company: 'Accenture',
        period: 'Jan 2026 – Present',
        bullets: [
          'Working on enterprise-scale software solutions',
          'Contributing to AI/ML-driven applications',
          'Supporting backend workflows and production systems',
        ],
      },
      {
        title: 'Software Development Intern',
        company: 'uSthaan Integrated Solutions',
        period: 'Sep 2025 – Jan 2026',
        projects: [
          'Media Pipeline Optimization with AWS S3',
          'Product Customization Features',
          'CI/CD and Deployment Automation',
          'Expiry Dashboard Development',
        ],
      },
    ];

    return (
      <section 
        id="experience"
        className="section-surface py-20 relative"
        data-name="experience"
        data-file="components/Experience.js"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                <span className="gradient-text">Experience</span>
              </h2>
            </FadeIn>
            
            <div className="space-y-8">
              {roles.map((role, index) => (
                <SlideIn
                  key={index}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                  delay={index * 120}
                >
                  <div className="glass rounded-2xl p-8 hover-glow transition-all">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold mb-1">{role.title}</h3>
                        <p className="text-blue-400">{role.company}</p>
                      </div>
                      <span className="text-gray-500 mt-2 md:mt-0">{role.period}</span>
                    </div>
                    
                    {role.bullets && (
                      <ul className="space-y-2 text-gray-300">
                        {role.bullets.map((text, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="icon-circle-check text-green-400 mt-1 flex-shrink-0"></div>
                            <span>{text}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {role.projects && (
                      <div className="space-y-4 text-gray-300">
                        <div>
                          <h4 className="font-semibold text-white mb-2">Key Projects:</h4>
                          <ul className="space-y-2">
                            {role.projects.map((p, i) => (
                              <li key={i}>• {p}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </SlideIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Experience error:', error);
    return null;
  }
}
