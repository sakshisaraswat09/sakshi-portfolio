function Certifications() {
  try {
    const certs = [
      { name: 'Meta Full Stack Developer', subtitle: 'The Full Stack — Coursera', score: 87.95, icon: 'graduation-cap', href: SITE.metaCert },
      { name: 'DevOps', icon: 'git-branch', href: SITE.certs.devops },
      { name: 'Generative AI', icon: 'sparkles', href: SITE.certs.genAi },
      { name: 'Python', icon: 'code', href: SITE.certs.python },
      { name: 'SQL', icon: 'database', href: SITE.certs.sql },
      { name: 'Web Development', icon: 'globe', href: SITE.certs.webDev },
    ];

    return (
      <section id="certifications" className="section-surface py-20 relative" data-name="certifications" data-file="components/Certifications.js">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                <span className="gradient-text">Certifications</span>
              </h2>
            </FadeIn>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certs.map((cert, index) => (
                <SlideIn key={index} direction={index % 3 === 1 ? 'right' : 'left'} delay={index * 70}>
                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass rounded-2xl p-6 hover-glow transition-all h-full block group"
                  >
                    <div className={`icon-${cert.icon} text-3xl text-blue-400 mb-4 skill-category-icon group-hover:scale-110 transition-transform`}></div>
                    <h3 className="font-semibold mb-1 group-hover:text-blue-400 transition-colors">{cert.name}</h3>
                    {cert.subtitle && (
                      <p className="text-xs text-gray-500 mb-2">{cert.subtitle}</p>
                    )}
                    {cert.score != null && (
                      <span className="text-sm text-green-400">
                        <CountUp end={cert.score} decimals={2} suffix="%" duration={1800} />
                      </span>
                    )}
                    <p className="text-xs text-gray-500 mt-3 flex items-center gap-1">
                      View certificate
                      <span className="icon-external-link text-xs"></span>
                    </p>
                  </a>
                </SlideIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Certifications error:', error);
    return null;
  }
}
