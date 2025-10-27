export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-12 py-8 text-center rounded-t-2xl bg-white dark:bg-black">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Matthew Tedunjaiye. Built with{" "}
        <span className="text-primary-600 dark:text-primary-400 font-medium">
          React + TypeScript
        </span>
        .
      </p>
    </footer>
  );
};