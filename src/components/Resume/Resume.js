//import { faBars } from '@fortawesome/free-solid-svg-icons'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
              <span>Education e Certification</span>
            </div>

            <div className="resume-highlights">
              <div className="resume-highlights-education">
                <div className="highlight-blob"></div>
                <div className="resume-highlights-title">Computer Science</div>
              </div>

              <div className="resume-highlights-details">
                University Of Luanda 'Ex ISUTIC' / 2013 - 2017
              </div>
              <div className="resume-highlights-description">
                Dissertation: Development of Application for delivery to a
                restaurant Mundo Novo
              </div>
            </div>

            <div className="resume-highlights">
              <div className="resume-highlights-education">
                <div className="highlight-blob"></div>
                <div className="resume-highlights-title">SysOps e DevOps</div>
              </div>

              <div className="resume-highlights-details">
                Fundamentos do Git e Azure DevOps
              </div>
              <div className="resume-highlights-description">
                Terminal, Bash e VIM Essentials
              </div>
            </div>

            <div className="resume-highlights">
              <div className="resume-highlights-education">
                <div className="highlight-blob"></div>
                <div className="resume-highlights-title">Agile e ITSM</div>
              </div>

              <div className="resume-highlights-details">
                Scrum Foundations Professional Certificate SFPC
              </div>
              <div className="resume-highlights-description">
                Projectos ágeis com SCRUM
              </div>
            </div>
          </div>

          <div className="resume-card-content">
            <div className="resume-card-content-title">
              <img src={ImgSkills} alt="" className="imgEducation" />
              <span>Experience</span>
            </div>

            <div className="resume-highlights">
              <div className="resume-highlights-education">
                <div className="highlight-blob"></div>
                <div className="resume-highlights-title">
                  Software Quality Assurance Analyst
                </div>
              </div>

              <div className="resume-highlights-details">
                Unitel / 2018 - Present
              </div>
              <div className="resume-highlights-description">
                QA environment, incident and issue Management, Bugzilla, Jira
                System and Databases
              </div>
            </div>

            <div className="resume-highlights">
              <div className="resume-highlights-education">
                <div className="highlight-blob"></div>
                <div className="resume-highlights-title">
                  Full Stack web development
                </div>
              </div>

              <div className="resume-highlights-details">
                Hemaj Solutions / 2015 - 2016
              </div>
              <div className="resume-highlights-description">
                HTML5, CSS, Jquery, PHP, Simfony Framwork
              </div>
            </div>

            <div className="resume-highlights">
              <div className="resume-highlights-education">
                <div className="highlight-blob"></div>
                <div className="resume-highlights-title">
                  Instructor e IT Support
                </div>
              </div>

              <div className="resume-highlights-details">
                Hemaj Solutions / 2015 - 2016
              </div>
              <div className="resume-highlights-description">
                Databases, Hardware e Software
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
