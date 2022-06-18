import './Resume.css'

const divStyle = {
  opacity: '5',
  transform: 'translateY(1px)',
}

export default function Resume() {
  return (
    <div className="about-me-container" style={{ divStyle }}>
      <div className="about-me-parent">
        <div className="heading-container">
          <div className="screen-heading">
            <span>Resume</span>
          </div>
          <div className="screen-sub-heading">
            <span>Check out my Resume</span>
          </div>
          <div className="heading-separator">
            <div className="separator-line"></div>
            <div className="separator-blob">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
