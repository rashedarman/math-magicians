import React from 'react';
import styles from './Footer.module.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.copyrightText}>
        <p className={styles['copyright-text']}>
          Copyright &copy; Math Magicians 2023. All rights reserved.
        </p>
      </footer>
    );
  }
}

export default Footer;
