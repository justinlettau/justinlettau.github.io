import './Skills.scss';

import React, { Component } from 'react';

import angularPng from '../images/logos/angular.png';
import csharpPng from '../images/logos/c-sharp.png';
import cssPng from '../images/logos/css.png';
import htmlPng from '../images/logos/html.png';
import javascriptPng from '../images/logos/javascript.png';
import nodejsPng from '../images/logos/nodejs.png';
import reactPng from '../images/logos/react.png';
import sassPng from '../images/logos/sass.png';
import sqlPng from '../images/logos/sql.png';
import typescriptPng from '../images/logos/typescript.png';

export default class Skills extends Component {
  /**
   * Skill items.
   */
  items = [
    {
      name: 'JavaScript',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      image: javascriptPng
    },
    {
      name: 'TypeScript',
      link: 'https://www.typescriptlang.org/',
      image: typescriptPng
    },
    {
      name: 'Angular',
      link: 'https://angular.io/',
      image: angularPng
    },
    {
      name: 'React',
      link: 'https://reactjs.org/',
      image: reactPng
    },
    {
      name: 'NodeJS',
      link: 'https://nodejs.org/',
      image: nodejsPng
    },
    {
      name: 'Sass',
      link: 'http://sass-lang.com/',
      image: sassPng
    },
    {
      name: 'CSS',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      image: cssPng
    },
    {
      name: 'HTML',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      image: htmlPng
    },
    {
      name: 'SQL',
      link: 'https://en.wikipedia.org/wiki/Microsoft_SQL_Server',
      image: sqlPng
    },
    {
      name: 'C#',
      link: 'https://en.wikipedia.org/wiki/C_Sharp_(programming_language)',
      image: csharpPng
    }
  ];

  /**
   * Render.
   */
  render() {
    return (
      <section className="p-5 bg-shade">
        <div className="container">
          <div className="text-center">
            <h1 className="font-weight-light">Acquired skill sets</h1>
            <p className="lead">Some of the technologies and tools I use and love.</p>
          </div>
          <hr className="my-5" />
          <div className="skill-list">
            {this.items.map(item => (
              <a href={item.link} target="_blank" rel="noreferrer noopener" className="skill-list-item" key={item.name}>
                <img src={item.image} alt={item.name} />
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
