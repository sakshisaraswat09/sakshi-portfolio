function Education() {
  try {
    const coursework = [
      "Data Structures & Algorithms",
      "Operating Systems",
      "DBMS",
      "Computer Networks",
      "Machine Learning",
      "Software Engineering",
    ];

    return (
      <section
        id="education"
        className="section-surface py-20 relative"
        data-name="education"
        data-file="components/Education.js"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                <span className="gradient-text">Education</span>
              </h2>
            </FadeIn>

            <SlideIn direction="left">
              <div className="glass rounded-2xl p-8 md:p-10 hover-glow transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      Bachelor of Technology (Information Technology)
                    </h3>
                    <p className="text-blue-400 text-lg">
                      Guru Gobind Singh Indraprastha University
                    </p>
                  </div>
                  <span className="text-gray-500 shrink-0">2021 – 2025</span>
                </div>

                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="px-4 py-2 bg-green-500/10 border border-green-500/25 rounded-lg text-green-400 font-semibold">
                    CGPA: 9.65 / 10.0
                  </span>
                  <span className="flex items-center gap-2 text-yellow-400 text-sm">
                    <span className="icon-trophy text-lg"></span>
                    Ranked 2nd in Information Technology Department
                  </span>
                </div>

                <div className="border-t border-gray-800 pt-6">
                  <h4 className="font-semibold text-white mb-4">
                    Relevant Coursework
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2 text-gray-300">
                    {coursework.map((course, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Education error:", error);
    return null;
  }
}
