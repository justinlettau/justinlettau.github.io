import {
  faGithub,
  faLinkedin,
  faNpm,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

const IndexPage = () => {
  return (
    <main>
      <title>Justin Lettau</title>

      <section className="hero is-fullheight bg">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-size-1 has-text-light has-text-weight-light">
              Hello, I'm <span className="has-text-primary">Justin Lettau</span>
            </h1>
            <p className="subtitle has-text-light">
              I'm a full-stack web developer.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="columns is-justify-content-space-between">
            <div className="column is-narrow">
              <p className="menu-label">Get in touch</p>
              <ul className="menu-list">
                <li>
                  <a
                    href="https://github.com/justinlettau"
                    className="icon-text"
                  >
                    <span className="icon">
                      <FontAwesomeIcon icon={faGithub} />
                    </span>
                    <span>GitHub</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.npmjs.com/~justinlettau"
                    className="icon-text"
                  >
                    <span className="icon">
                      <FontAwesomeIcon icon={faNpm} />
                    </span>
                    <span>NPM</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/justin-lettau-aaa832a0"
                    className="icon-text"
                  >
                    <span className="icon">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </span>
                    <span>LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="column is-narrow">
              <p className="is-size-7">&copy; Justin Lettau</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default IndexPage;
