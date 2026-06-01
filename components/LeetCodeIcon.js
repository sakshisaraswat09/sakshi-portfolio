function LeetCodeIcon({ className = 'w-6 h-6' }) {
  return (
    <img
      src="assets/icons/leetcode.png"
      alt="LeetCode"
      className={`${className} object-contain`}
      width="24"
      height="24"
      loading="lazy"
    />
  );
}
