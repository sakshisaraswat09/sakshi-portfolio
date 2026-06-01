function CodingProfiles() {
  try {
    const profiles = [
      { name: 'LeetCode', count: 500, suffix: '+', statLabel: 'Problems', href: SITE.leetcode, isLeetCode: true },
      { name: 'CodeChef', count: 1326, suffix: '', statLabel: 'Rating', colorClass: 'text-yellow-400', icon: 'award' },
      { name: 'GitHub', stat: 'Active Contributor', colorClass: 'text-purple-400', icon: 'github', href: SITE.github },
    ];

    return (
      <section id="coding" className="section-surface py-20 relative" data-name="coding" data-file="components/CodingProfiles.js">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                Coding <span className="gradient-text">Profiles</span>
              </h2>
            </FadeIn>
            
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {profiles.map((profile, index) => {
                const card = (
                  <>
                    {profile.isLeetCode ? (
                      <div className="mb-4 flex justify-center">
                        <LeetCodeIcon className="w-10 h-10" />
                      </div>
                    ) : (
                      <div className={`icon-${profile.icon} text-4xl ${profile.colorClass} mb-4 skill-category-icon`}></div>
                    )}
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-400 transition-colors">{profile.name}</h3>
                    <p className="text-sm text-gray-400">
                      {profile.count != null ? (
                        <>
                          <CountUp end={profile.count} suffix={profile.suffix} className="text-white font-medium" />
                          {' '}{profile.statLabel}
                        </>
                      ) : (
                        profile.stat
                      )}
                    </p>
                  </>
                );
                const className = 'glass rounded-2xl p-6 text-center hover-glow transition-all group h-full block';
                return (
                  <SlideIn key={index} direction="up" delay={index * 90}>
                    {profile.href ? (
                      <a href={profile.href} target="_blank" rel="noopener noreferrer" className={className}>
                        {card}
                      </a>
                    ) : (
                      <div className={className}>{card}</div>
                    )}
                  </SlideIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('CodingProfiles error:', error);
    return null;
  }
}
