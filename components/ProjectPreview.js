function ProjectPreview({ image, title, accent }) {
  const [failed, setFailed] = React.useState(false);

  if (!image || failed) {
    return (
      <div className={`project-preview-fallback bg-gradient-to-br ${accent} rounded-xl mb-4 aspect-video flex flex-col items-center justify-center border border-white/10 overflow-hidden`}>
        <div className="w-full px-4 pt-3 pb-2 flex items-center gap-1.5 border-b border-white/5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/80"></span>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <div className="icon-monitor text-4xl text-white/30 mb-3"></div>
          <p className="text-white/60 text-sm font-medium">{title}</p>
          <p className="text-white/35 text-xs mt-1">Add screenshot to assets/projects/</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl mb-4 overflow-hidden border border-white/10 aspect-video bg-gray-900">
      <img
        src={image}
        alt={`${title} preview`}
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
