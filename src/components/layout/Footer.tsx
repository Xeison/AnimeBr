const Footer = () => {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              About AnimeStream
            </h3>
            <p className="text-zinc-400">
              A modern anime streaming platform built with React and TypeScript.
              Featuring a custom video player and progress tracking system.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Technologies</h3>
            <ul className="text-zinc-400 space-y-2">
              <li>React + TypeScript</li>
              <li>Tailwind CSS</li>
              <li>ShadcnUI Components</li>
              <li>Custom Video Player</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Project Info</h3>
            <p className="text-zinc-400">
              This project demonstrates modern web development practices with a
              focus on user experience and performance.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-zinc-800 text-center text-zinc-500">
          © {new Date().getFullYear()} AnimeStream. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
