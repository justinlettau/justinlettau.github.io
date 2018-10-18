import React, { Component } from 'react';

import ContactList from '../contact-list/ContactList';

export default class Contacts extends Component {

  /**
   * Render.
   */
  render() {
    return (
      <section className="p-5 bg-shade">
        <div className="text-center">
          <h1 className="font-weight-light">Get in touch</h1>
          <p className="lead">Feel free to reach out to me!</p>
        </div>
        <ContactList />
      </section>
    );
  }
}
