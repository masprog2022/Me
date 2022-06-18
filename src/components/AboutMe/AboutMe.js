import './AboutMe.css'

const divStyle = {
  opacity: '5',
  transform: 'translateY(1px)',
}

export default function AboutMe() {
  return (
    <div className="about-me-container" style={{ divStyle }}>
      <div className="about-me-parent">
        <div className="heading-container">
          <div className="screen-heading">
            <span>About Me</span>
          </div>
          <div className="screen-sub-heading">
            <span>Learn more about me</span>
          </div>
          <div className="heading-separator">
            <div className="separator-line"></div>
            <div className="separator-blob">
              <div></div>
            </div>
          </div>
        </div>
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              Passionate about technology, I am an experienced software quality
              engineer. have web application development skills, and great
              ability to work in a team.
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>Here are a Few Highlights:</span>
              </div>

              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Software Quality Assurance Analyst </span>
              </div>

              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Full Stack web development</span>
              </div>

              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Interactive Front End as per the design</span>
              </div>

              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>UI/UX Designer</span>
              </div>

              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Building REST API</span>
              </div>

              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Managing database</span>
              </div>
            </div>

            <div className="">
              <a href="ehizcv.pdf" download="Mauro ehizcv.pdf">
                <button className="btn highlighted-btn">Download CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
