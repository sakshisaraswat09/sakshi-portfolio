function Hero() {
  try {
    const socialLinks = [
      { href: SITE.github, icon: 'github', label: 'GitHub', color: 'hover:text-white hover:border-purple-400/50' },
      { href: SITE.linkedin, icon: 'linkedin', label: 'LinkedIn', color: 'hover:text-white hover:border-blue-400/50' },
      { href: SITE.leetcode, label: 'LeetCode', color: 'hover:border-orange-400/50', isLeetCode: true },
    ];

    return (
      <section 
        id="hero"
        className="section-surface min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        data-name="hero"
        data-file="components/Hero.js"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none"></div>
        <ParticleBackground />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="px-4 py-2 glass rounded-full text-sm text-blue-400">
                Associate Software Engineer at Accenture
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight relative">
              Hi, I'm <span className="gradient-text">Sakshi Saraswat</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-4">
              Software Engineer Building Full-Stack & AI-Powered Applications
            </p>
            
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
              I build scalable web applications, intelligent systems, and AI-driven solutions that solve real-world problems.
            </p>

            <div className="flex items-center justify-center gap-4 mb-10">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={`glass w-12 h-12 rounded-xl flex items-center justify-center text-gray-400 border border-transparent transition-all ${link.color}`}
                >
                  {link.isLeetCode ? (
                    <LeetCodeIcon className="w-6 h-6" />
                  ) : (
                    <div className={`icon-${link.icon} text-xl`}></div>
                  )}
                </a>
              ))}
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
              <a href="#projects" className="btn-lift px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium hover-glow">
                View Projects
              </a>
              <a href="#contact" className="btn-lift px-8 py-3 glass rounded-lg font-medium hover-glow">
                Let's Connect
              </a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto text-sm">
              <div className="glass rounded-xl px-4 py-5">
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  <CountUp end={9.65} decimals={2} duration={1800} />
                </div>
                <div className="text-gray-500">CGPA / 10</div>
              </div>
              <div className="glass rounded-xl px-4 py-5">
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  <CountUp end={700} suffix="+" duration={2000} />
                </div>
                <div className="text-gray-500">Problems Solved</div>
              </div>
              <div className="glass rounded-xl px-4 py-5">
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  #<CountUp end={2} duration={1200} />
                </div>
                <div className="text-gray-500">IT Department</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero error:', error);
    return null;
  }
}
