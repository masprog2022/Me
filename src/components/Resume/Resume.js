import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ImgEducation from '../../assets/Resume/education.svg'
import ImgSkills from '../../assets/Resume/programming-skills.svg'
import './Resume.css'

const divStyle = {
  opacity: '5',
  transform: 'translateY(1px)',
}

export default function Resume() {
  return (
    <div className="resume-container" style={{ divStyle }}>
      <div className="resume-parent">
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
        <div className="resume-card">
          <div className="resume-card-content">
            <div className="resume-card-content-title">
              <img src={ImgEducation} alt="" className="imgEducation" />
              <span>Education e Certification </span>
            </div>
            <div className="resume-card-content-box">
              <div className="box-group">
                <div className="box-group-date">
                  <FontAwesomeIcon
                    className="card-hamburger-box"
                    icon={faBars}
                    color="#ff5823"
                  />
                  <div className="resume-card-content-name">
                    <span>HTML</span>
                  </div>
                  <div className="resume-card-content-level">
                    <span>Basic</span>
                  </div>
                </div>

                <div className="box-group-date">
                  <FontAwesomeIcon
                    className="card-hamburger-box"
                    icon={faBars}
                    color="#ff5823"
                  />
                  <div className="resume-card-content-name">
                    <span>CSS</span>
                  </div>
                  <div className="resume-card-content-level">
                    <span>Advanced</span>
                  </div>
                </div>

                <div className="box-group-date">
                  <FontAwesomeIcon
                    className="card-hamburger-box"
                    icon={faBars}
                    color="#ff5823"
                  />
                  <div className="resume-card-content-name">
                    <span>Javascript</span>
                  </div>
                  <div className="resume-card-content-level">
                    <span>Intermediate</span>
                  </div>
                </div>
              </div>

              <div className="box-group">
                <div className="box-group-date">
                  <FontAwesomeIcon
                    className="card-hamburger-box"
                    icon={faBars}
                    color="#ff5823"
                  />
                  <div className="resume-card-content-name">
                    <span>Bootstrap</span>
                  </div>
                  <div className="resume-card-content-level">
                    <span>Intermediate</span>
                  </div>
                </div>

                <div className="box-group-date">
                  <FontAwesomeIcon
                    className="card-hamburger-box"
                    icon={faBars}
                    color="#ff5823"
                  />
                  <div className="resume-card-content-name">
                    <span>Git</span>
                  </div>
                  <div className="resume-card-content-level">
                    <span>Intermediate</span>
                  </div>
                </div>

                <div className="box-group-date">
                  <FontAwesomeIcon
                    className="card-hamburger-box"
                    icon={faBars}
                    color="#ff5823"
                  />
                  <div className="resume-card-content-name">
                    <span>React</span>
                  </div>
                  <div className="resume-card-content-level">
                    <span>Intermediate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="resume-card-content">
            <div className="resume-card-content-title">
              <img src={ImgSkills} alt="" className="imgEducation" />
              <span>Programing Skills</span>
            </div>
            <div className="resume-card-content-box">
              <div className="box-group">
                <div className="box-group-date">
                  <FontAwesomeIcon
                    className="card-hamburger-box"
                    icon={faBars}
                    color="#ff5823"
                  />
                  <div className="resume-card-content-name">
                    <span>HTML</span>
                  </div>
                  <div className="resume-card-content-level">
                    <span>Basic</span>
                  </div>
                </div>

                <div className="box-group-date">
                  <FontAwesomeIcon
                    className="card-hamburger-box"
                    icon={faBars}
                    color="#ff5823"
                  />
                  <div className="resume-card-content-name">
                    <span>CSS</span>
                  </div>
                  <div className="resume-card-content-level">
                    <span>Advanced</span>
                  </div>
                </div>

                <div className="box-group-date">
                  <FontAwesomeIcon
                    className="card-hamburger-box"
                    icon={faBars}
                    color="#ff5823"
                  />
                  <div className="resume-card-content-name">
                    <span>Javascript</span>
                  </div>
                  <div className="resume-card-content-level">
                    <span>Intermediate</span>
                  </div>
                </div>
              </div>

              <div className="box-group">
                <div className="box-group-date">
                  <FontAwesomeIcon
                    className="card-hamburger-box"
                    icon={faBars}
                    color="#ff5823"
                  />
                  <div className="resume-card-content-name">
                    <span>Bootstrap</span>
                  </div>
                  <div className="resume-card-content-level">
                    <span>Intermediate</span>
                  </div>
                </div>

                <div className="box-group-date">
                  <FontAwesomeIcon
                    className="card-hamburger-box"
                    icon={faBars}
                    color="#ff5823"
                  />
                  <div className="resume-card-content-name">
                    <span>Git</span>
                  </div>
                  <div className="resume-card-content-level">
                    <span>Intermediate</span>
                  </div>
                </div>

                <div className="box-group-date">
                  <FontAwesomeIcon
                    className="card-hamburger-box"
                    icon={faBars}
                    color="#ff5823"
                  />
                  <div className="resume-card-content-name">
                    <span>React</span>
                  </div>
                  <div className="resume-card-content-level">
                    <span>Intermediate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
