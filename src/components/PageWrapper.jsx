import PropTypes from 'prop-types';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import styles from './PageWrapper.module.scss';

class PageWrapper extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div id={styles['main-layout']}>
        <Header />
        <div className={styles.children}>{children}</div>
        <Footer />
      </div>
    );
  }
}

PageWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
};

export default PageWrapper;
