import data from "../data/index.json";
export default function About() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            I’m Navneet Nishchal, a full stack MERN developer who loves crafting
            smooth, user-friendly web applications. I specialize in MongoDB,
            Express.js, React, and Node.js, and I enjoy bringing dynamic and
            responsive designs to life.
          </p>
          <p className="hero--section-description">
            Driven by a genuine curiosity and a desire to learn, I keep up with
            the latest tech trends and advancements. I'm committed to delivering
            high-quality, innovative solutions, and I thrive in collaborative 
            environments where I can take on new challenges and contribute to the
            team's success.

          </p>
        </div>
      </div>
    </section>
  );
}
