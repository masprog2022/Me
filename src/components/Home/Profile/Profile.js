import Typical from 'react-typical'
import './Profile.css'

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/mauro-manuel-522947b2/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/masprogevolution/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://github.com/masprog2022/">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {''}
              Olá, Eu sou o <span className="highlighted-text">Mauro</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {' '}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={['QA 👨‍💻', 1000, 'Fullstack Developer 👨‍💻', 1000]}
                />
              </h1>
              <span className="profile-role-tagline">
                Habilidade de construir aplicativos com operações front-end e
                back-end
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {''}
              Contacte-me{' '}
            </button>
            <a href="ehizcv.pdf" download="Mauro ehizcv.pdf">
              <button className="btn highlighted-btn">Download CV</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  )
}
