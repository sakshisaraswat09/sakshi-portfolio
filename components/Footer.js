function Footer() {
  try {
    const socials = [
      { href: SITE.linkedin, icon: 'linkedin', hover: 'hover:text-blue-400', external: true },
      { href: SITE.github, icon: 'github', hover: 'hover:text-purple-400', external: true },
      { href: SITE.mailto, icon: 'mail', hover: 'hover:text-green-400', external: false },
    ];

    return (
      <footer 
        className="section-surface py-12 border-t border-gray-800"
        data-name="footer"
        data-file="components/Footer.js"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm">
              © 2026 Designed & Built by <span className="text-blue-400">Sakshi Saraswat</span>
            </div>
            
            <div className="flex items-center gap-6">
              {socials.map((s) => (
                <a 
                  key={s.icon}
                  href={s.href}
                  target={s.external ? '_blank' : undefined}
                  rel={s.external ? 'noopener noreferrer' : undefined}
                  className={`text-gray-400 ${s.hover} transition-colors`}
                  aria-label={s.icon}
                >
                  <div className={`icon-${s.icon} text-xl icon-hover-spin`}></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer error:', error);
    return null;
  }
}
