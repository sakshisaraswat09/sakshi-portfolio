function Header() {
  try {
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 50);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass backdrop-blur-xl' : ''
        }`}
        data-name="header"
        data-file="components/Header.js"
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollTo('hero')}
              className="flex items-center gap-2.5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 transition-opacity hover:opacity-90"
              aria-label="Back to top"
            >
              <SiteLogo className="w-9 h-9" />
            </button>
            
            <div className="hidden md:flex items-center gap-8">
              {['About', 'Education', 'Experience', 'Projects', 'Skills', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            <a
              href={SITE.mailto}
              className="btn-lift px-4 py-2 glass rounded-lg text-sm hover-glow"
            >
              Get in Touch
            </a>
          </div>
        </nav>
      </header>
    );
  } catch (error) {
    console.error('Header error:', error);
    return null;
  }
}
