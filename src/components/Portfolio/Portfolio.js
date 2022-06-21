import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ImgEducation from '../../assets/Resume/education.svg'
import ImgSkills from '../../assets/Resume/programming-skills.svg'
import './Resume.css'

const divStyle = {
  opacity: '5',
  transform: 'translateY(1px)',
}

export default function Portfolio() {
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
                    <span>Computer Science and Engineering</span>
                  </div>
                  <div className="resume-card-content-level">
                    <span>University of Luanda / 2013 - 2017</span>
                  </div>
                </div>

                <div className="box-group-date">
                  <FontAwesomeIcon
                    className="card-hamburger-box"
                    icon={faBars}
                    color="#ff5823"
                  />
                  <div className="resume-card-content-name">
                    <span>SysOps e DevOps</span>
                  </div>
                  <div className="resume-card-content-level">
                    <span>
                      Terminal, Bash e VIM Essentials / Fundamentos do Git e
                      Azure DevOps{' '}
                    </span>
                  </div>
                </div>

                <div className="box-group-date">
                  <FontAwesomeIcon
                    className="card-hamburger-box"
                    icon={faBars}
                    color="#ff5823"
                  />
                  <div className="resume-card-content-name">
                    <span>Agile</span>
                  </div>
                  <div className="resume-card-content-level">
                    <span>Projectos ágeis com SCRUM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="resume-card-content">
            <div className="resume-card-content-title">
              <img src={ImgSkills} alt="" className="imgEducation" />
              <span>Experience</span>
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
                    <span>Software QA Analyst</span>
                  </div>
                  <div className="resume-card-content-level">
                    <span>
                      {' '}
                      Unitel / 2018 - Present QA environment, incident and issue
                      Management, Bugzilla and Databases{' '}
                    </span>
                  </div>
                </div>

                <div className="box-group-date">
                  <FontAwesomeIcon
                    className="card-hamburger-box"
                    icon={faBars}
                    color="#ff5823"
                  />
                  <div className="resume-card-content-name">
                    <span>FullStack web development</span>
                  </div>
                  <div className="resume-card-content-level">
                    <span>
                      {' '}
                      Hemaj Solutions / 2015 - 2016 HTML5, CSS3, Jquery, PHP,
                      Symfony framework{' '}
                    </span>
                  </div>
                </div>

                <div className="box-group-date">
                  <FontAwesomeIcon
                    className="card-hamburger-box"
                    icon={faBars}
                    color="#ff5823"
                  />
                  <div className="resume-card-content-name">
                    <span>Instructor</span>
                  </div>
                  <div className="resume-card-content-level">
                    <span>Hemaj Solutions / 2015 - 2016 Database </span>
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
