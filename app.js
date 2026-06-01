class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-400">Something went wrong. Please refresh.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  try {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      setTimeout(() => setLoading(false), 1500);
    }, []);

    if (loading) {
      return (
        <div className="section-surface min-h-screen flex items-center justify-center">
          <div className="text-center">
            <SiteLogo className="w-14 h-14 mx-auto mb-6" />
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4 mx-auto"></div>
            <p className="text-gray-400 animate-pulse">Loading Portfolio...</p>
          </div>
        </div>
      );
    }

    return (
      <div className="section-surface min-h-screen" data-name="app" data-file="app.js">
        <Header />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Certifications />
        <CodingProfiles />
        <Contact />
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('App error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);