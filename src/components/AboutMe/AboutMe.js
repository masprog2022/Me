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
              Full stack web and mobile developer with background knowledge of
              MERN stacks with redux, along with a knack of building
              applications with utmost efficiency. Strong professional with a
              BSC willing to be an asset for an organization.
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>Here are a Few Highlights:</span>
              </div>

              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Full Stack web and mobile development</span>
              </div>

              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Full Stack web and mobile development</span>
              </div>

              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Full Stack web and mobile development</span>
              </div>

              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Full Stack web and mobile development</span>
              </div>

              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Full Stack web and mobile development</span>
              </div>

              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Full Stack web and mobile development</span>
              </div>

              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Full Stack web and mobile development</span>
              </div>

              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Full Stack web and mobile development</span>
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
