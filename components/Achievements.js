function Achievements() {
  try {
    const achievements = [
      { icon: 'code', value: 700, suffix: '+', label: 'Coding Problems', color: 'text-orange-400' },
      { icon: 'trophy', value: 78, suffix: '', label: 'GFG Job-a-thon Rank', color: 'text-yellow-400' },
      { icon: 'medal', prefix: '#', value: 2, suffix: '', label: 'Department Rank Overall', color: 'text-blue-400', isRank: true },
    ];

    return (
      <section id="achievements" className="section-surface py-20 relative" data-name="achievements" data-file="components/Achievements.js">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                <span className="gradient-text">Achievements</span>
              </h2>
            </FadeIn>
            
            <div className="grid sm:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              {achievements.map((item, index) => (
                <SlideIn key={index} direction="up" delay={index * 90}>
                  <div className="glass rounded-2xl p-6 text-center hover-glow transition-all h-full">
                    <div className={`icon-${item.icon} text-4xl ${item.color} mb-4 skill-category-icon inline-block`}></div>
                    <div className="text-3xl font-bold mb-2">
                      {item.isRank ? (
                        <span>
                          {item.prefix}
                          <CountUp end={item.value} duration={1500} />
                        </span>
                      ) : (
                        <CountUp end={item.value} suffix={item.suffix} prefix={item.prefix || ''} duration={2000} />
                      )}
                    </div>
                    <div className="text-sm text-gray-400">{item.label}</div>
                  </div>
                </SlideIn>
              ))}
            </div>

            <FadeIn delay={200}>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6">Highlights</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'CGPA 9.65 / 10.0',
                    'Graduated 2nd in IT Department',
                    'Smart India Hackathon 2023 Finalist',
                    'Google Girl Hackathon 2024 Participant',
                    'Airbus Aerothon 2024 Participant',
                    'Active RTC & HerKey Member',
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="icon-circle-check text-green-400 mt-1 flex-shrink-0"></div>
                      <span className="text-gray-300">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Achievements error:', error);
    return null;
  }
}
