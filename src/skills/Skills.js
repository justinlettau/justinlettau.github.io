import './Skills.scss';

import React, { Component } from 'react';

import angularPng from '../images/logos/angular.png';
import bootstrapPng from '../images/logos/bootstrap.png';
import csharpPng from '../images/logos/c-sharp.png';
import cssPng from '../images/logos/css.png';
import electronPng from '../images/logos/electron.png';
import expressPng from '../images/logos/express.png';
import gitPng from '../images/logos/git.png';
import gulpPng from '../images/logos/gulp.png';
import htmlPng from '../images/logos/html.png';
import ionicPng from '../images/logos/ionic.png';
import javascriptPng from '../images/logos/javascript.png';
import mongodbPng from '../images/logos/mongodb.png';
import nodejsPng from '../images/logos/nodejs.png';
import npmPng from '../images/logos/npm.png';
import pm2Png from '../images/logos/pm2.png';
import reactPng from '../images/logos/react.png';
import sassPng from '../images/logos/sass.png';
import sqlPng from '../images/logos/sql.png';
import threejsPng from '../images/logos/threejs.png';
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
      name: 'Electron',
      link: 'http://electron.atom.io/',
      image: electronPng
    },
    {
      name: 'Git',
      link: 'https://git-scm.com/',
      image: gitPng
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
      name: 'Gulp',
      link: 'http://gulpjs.com/',
      image: gulpPng
    },
    {
      name: 'HTML',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      image: htmlPng
    },
    {
      name: 'Ionic',
      link: 'http://ionicframework.com/',
      image: ionicPng
    },
    {
      name: 'Bootstrap',
      link: 'http://getbootstrap.com/',
      image: bootstrapPng
    },
    {
      name: 'NPM',
      link: 'https://www.npmjs.com/',
      image: npmPng
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
    },
    {
      name: 'MongoDB',
      link: 'https://www.mongodb.com/',
      image: mongodbPng
    },
    {
      name: 'Express',
      link: 'https://www.expressjs.com/',
      image: expressPng
    },
    {
      name: 'PM2',
      link: 'http://pm2.keymetrics.io/',
      image: pm2Png
    },
    {
      name: 'Three.js',
      link: 'https://threejs.org/',
      image: threejsPng
    },
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
            {this.items.map(item =>
              <a href={item.link} target="_blank"  rel="noreferrer noopener" className="skill-list-item" key={item.name}>
                <img src={item.image} alt={item.name} />
                <span>{item.name}</span>
              </a>
            )}
          </div>
        </div>
      </section>
    );
  }
}
