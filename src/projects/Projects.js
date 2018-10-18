import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { Component } from 'react';

export default class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = { repos: [] };
  }

  /**
   * Component did mount.
   */
  componentDidMount() {
    this.getRepos();
  }

  /**
   * Get most starred repositories.
   */
  getRepos() {
    axios.get('https://api.github.com/users/justinlettau/repos')
      .then(res => {
        const repos = res.data.sort((a, b) => b.stargazers_count - a.stargazers_count);
        repos.length = 6;

        this.setState({ repos });
      });
  }

  /**
   * Render.
   */
  render() {
    return (
      <section className="p-5">
        <div className="container">
          <div className="text-center">
            <h1 className="font-weight-light">Open source projects</h1>
            <p className="lead">Some side projects for fun.</p>
          </div>
          <hr className="my-5" />
          <div className="row">
            {this.state.repos.map(item =>
              <div className="col-md-6 col-lg-4 mb-5" key={item.id}>
                <div className="h-100 d-flex flex-column">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <div className="mt-auto">
                    <a href={item.html_url} target="_blank" rel="noreferrer noopener" className="btn btn-outline-primary" title={item.name}>
                      <FontAwesomeIcon icon={['fab', 'github']} />
                      <span className="ml-2">Source</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <hr className="my-5" />
        <div className="text-center">
          <a href="https://github.com/justinlettau" target="_blank" rel="noreferrer noopener" title="GitHub" className="btn btn-outline-success">
            <span className="mr-2">Check out more on GitHub</span>
            <FontAwesomeIcon icon="arrow-right" />
          </a>
        </div>
      </section>
    );
  }
}
