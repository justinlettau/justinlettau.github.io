import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';

import Contacts from '../contacts/Contacts';
import Home from '../home/Home';
import Projects from '../projects/Projects';
import Skills from '../skills/Skills';

library.add(fas, fab);

export default class App extends Component {

  /**
   * Render.
   */
  render() {
    return (
      <React.Fragment>
        <Home />
        <Skills />
        <Projects />
        <Contacts />
        <section className="p-5">
          <div className="copyright">&copy; Justin Lettau</div>
        </section>
      </React.Fragment>
    );
  }
}
