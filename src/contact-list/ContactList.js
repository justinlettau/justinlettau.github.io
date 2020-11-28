import './ContactList.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

export default class ContactList extends Component {
  /**
   * Contact list items.
   */
  items = [
    {
      name: 'GitHub',
      icon: ['fab', 'github'],
      link: 'https://github.com/justinlettau',
    },
    {
      name: 'NPM',
      icon: ['fab', 'npm'],
      link: 'https://www.npmjs.com/~justinlettau',
    },
    {
      name: 'Play Store',
      icon: ['fab', 'google-play'],
      link: 'https://play.google.com/store/apps/developer?id=Justin+Lettau',
    },
    {
      name: 'LinkedIn',
      icon: ['fab', 'linkedin'],
      link: 'https://www.linkedin.com/in/justin-lettau-aaa832a0',
    },
    {
      name: 'Email',
      icon: 'at',
      link: 'mailto:me@justinlettau.com',
    },
  ];

  /**
   * Render.
   */
  render() {
    return (
      <div className="contact-list">
        {this.items.map((item) => (
          <a
            href={item.link}
            className="contact-list-item"
            target="_blank"
            rel="noreferrer noopener"
            title={item.name}
            key={item.name}
          >
            <FontAwesomeIcon icon={item.icon} size="3x" />
          </a>
        ))}
      </div>
    );
  }
}
