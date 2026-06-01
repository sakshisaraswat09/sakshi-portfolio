function SiteLogo({ className = 'w-9 h-9', showText = false }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${showText ? '' : ''}`}>
      <img
        src="assets/icons/logo.svg"
        alt="Sakshi Saraswat"
        className={`${className} object-contain shrink-0`}
        width="36"
        height="36"
      />
      {showText && (
        <span className="text-lg font-bold gradient-text hidden sm:inline">
          Sakshi
        </span>
      )}
    </span>
  );
}
