function Contact() {
  try {
    const links = [
      { href: SITE.linkedin, icon: 'linkedin', color: 'text-blue-400', label: 'LinkedIn', sub: 'Connect', external: true },
      { href: SITE.github, icon: 'github', color: 'text-purple-400', label: 'GitHub', sub: 'View Code', external: true },
      { href: SITE.mailto, icon: 'mail', color: 'text-green-400', label: 'Email', sub: 'Send Message', external: false },
    ];

    return (
      <section 
        id="contact"
        className="section-surface py-20 relative"
        data-name="contact"
        data-file="components/Contact.js"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Let's Build Something <span className="gradient-text">Meaningful Together</span>
              </h2>
            </FadeIn>
            
            <FadeIn delay={100}>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                I'm always interested in discussing software engineering, AI, product development, 
                and exciting opportunities.
              </p>
            </FadeIn>
            
            <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {links.map((link, index) => (
                <FadeIn key={link.label} delay={150 + index * 80}>
                  <a 
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="glass rounded-xl p-6 hover-glow transition-all group block h-full"
                  >
                    <div className={`icon-${link.icon} text-3xl ${link.color} mb-3 icon-hover-bounce`}></div>
                    <div className="font-medium">{link.label}</div>
                    <div className="text-sm text-gray-500">{link.sub}</div>
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact error:', error);
    return null;
  }
}
