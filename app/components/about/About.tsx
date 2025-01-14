const About = () => {
  return (
    <div className="bg-gray-900 text-gray-300 h-full flex items-center justify-center">
      <div className="p-8 md:p-16">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-purple-400">
          Hello!
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
          I'm <span className="text-blue-400">Navneet Nishchal</span>
        </h2>

        {/* Intro */}
        <p className="mt-6 text-lg leading-relaxed">
          Somewhere between curiosity and creativity, I found programming—the
          perfect mix of art and logic. Today, as a{" "}
          <span className="text-blue-400">Full-Stack Developer</span>, I bring
          ideas to life by building{" "}
          <span className="text-yellow-400">scalable</span> and{" "}
          <span className="text-yellow-400">efficient</span> applications that
          solve real-world problems.
        </p>

        {/* Interests */}
        <p className="mt-4 text-lg leading-relaxed">
          Beyond coding, you'll find me diving into{" "}
          <span className="text-red-400">music</span>, re-watching my favorite{" "}
          <span className="text-blue-400">movies</span>, flipping through{" "}
          <span className="text-green-400">books</span>, or just staring at{" "}
          <span className="text-purple-400">mountains</span> like they're about
          to reveal the secrets of the universe.
        </p>

        {/* Favorite Figures */}
        <p className="mt-6 text-lg leading-relaxed">
          I draw inspiration from people who excel in their own worlds:
          <ul className="mt-2 ml-6 list-disc">
            <li>
              <span className="text-green-400">Linus Torvalds</span>, for
              showing the world that software can be free, open, and
              revolutionary.
            </li>
            <li>
              <span className="text-yellow-400">Warren Buffet</span>, who can
              make compounding sound cooler than any action movie.
            </li>
            <li>
              <span className="text-red-400">Shahrukh Khan</span>, the king of
              Bollywood, proving dreams are worth chasing.
            </li>
            <li>
              <span className="text-blue-400">Arijit Singh</span>, whose voice
              feels like the soundtrack of my soul.
            </li>
            <li>
              <span className="text-purple-400">Socrates</span>, reminding me to
              always question everything—even this list.
            </li>
          </ul>
        </p>

        {/* Closing Thought */}
        <p className="mt-6 text-lg leading-relaxed">
          I'm constantly learning and exploring, not just in tech but in life.
          Let's connect if you're as curious about the world as I am!
        </p>
      </div>
    </div>
  );
};

export default About;
