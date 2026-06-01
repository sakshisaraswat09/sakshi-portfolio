function About() {
  try {
    const exploring = [
      'Generative AI',
      'AI Agents',
      'Machine Learning',
      'System Design',
    ];

    return (
      <section 
        id="about"
        className="section-surface py-20 relative"
        data-name="about"
        data-file="components/About.js"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                About <span className="gradient-text">Me</span>
              </h2>
            </FadeIn>
            
            <FadeIn delay={100}>
              <div className="glass rounded-2xl p-8 md:p-12 mb-8">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Software Engineer at Accenture with a strong foundation in Full-Stack Development, 
                  Machine Learning, and problem solving. I enjoy building scalable applications, 
                  exploring AI-powered solutions, and turning ideas into products that create real-world impact.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={200}>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <div className="icon-compass text-blue-400"></div>
                  Currently Exploring
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {exploring.map((item, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About error:', error);
    return null;
  }
}
