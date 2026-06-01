function Skills() {
  try {
    const skills = {
      'Frontend': { icon: 'layout', items: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS'] },
      'Backend': { icon: 'server', items: ['Node.js', 'Express.js', 'MongoDB', 'MySQL'] },
      'AI / ML': { icon: 'brain', items: ['Python', 'Machine Learning', 'Generative AI'] },
      'Cloud & Tools': { icon: 'cloud', items: ['AWS', 'Git', 'GitHub', 'Jenkins', 'Linux'] },
    };

    return (
      <section id="skills" className="section-surface py-20 relative" data-name="skills" data-file="components/Skills.js">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                Technical <span className="gradient-text">Skills</span>
              </h2>
            </FadeIn>
            
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, { icon, items }], catIndex) => (
                <SlideIn key={category} direction={catIndex % 2 === 0 ? 'left' : 'right'} delay={catIndex * 80}>
                  <div className="glass rounded-2xl p-8 h-full">
                    <h3 className="text-xl font-semibold mb-4 text-blue-400 flex items-center gap-3">
                      <span className="skill-icon-wrap inline-flex p-2 rounded-lg bg-blue-500/10">
                        <span className={`icon-${icon} text-2xl text-blue-400 skill-category-icon`}></span>
                      </span>
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, index) => (
                        <span 
                          key={index}
                          className="skill-pill px-4 py-2 bg-gray-800 rounded-lg text-sm text-gray-300 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
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
    console.error('Skills error:', error);
    return null;
  }
}
