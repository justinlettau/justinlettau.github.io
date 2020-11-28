import './Home.scss';

import React, { Component } from 'react';

import ContactList from '../contact-list/ContactList';

export default class Home extends Component {
  /**
   * Render.
   */
  render() {
    return (
      <div className="home">
        <div className="container">
          <h1 className="home-title">
            Hello, I'm
            <span className="text-primary"> Justin Lettau</span>
          </h1>
          <p>I&apos;m a full-stack web developer.</p>
          <ContactList />
        </div>
      </div>
    );
  }
}
