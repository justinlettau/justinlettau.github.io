import { Link } from 'gatsby';
import * as React from 'react';

const NotFoundPage = () => {
  return (
    <main>
      <title>Not found</title>

      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <p className="title">Page not found</p>
            <p className="subtitle">
              Sorry{' '}
              <span role="img" aria-label="Pensive emoji">
                😔
              </span>{' '}
              we couldn’t find what you were looking for.
            </p>
            <Link to="/">Go home</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFoundPage;
