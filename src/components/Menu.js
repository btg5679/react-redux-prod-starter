import { css, StyleSheet } from 'aphrodite';
import React from 'react';
import { Link } from 'react-router-dom';

const styles = StyleSheet.create({
  header: {
    height: 25,
    width: 700,
    backgroundColor: '#000',
    color: '#fff',
    fontSize: 16,
    paddingTop: 6,
    paddingLeft: 5,
    cursor: 'pointer',
  },
  homeLink: {
    paddingRight: 20,
    color: '#fff',
    textDecoration: 'none',
  },
  link: {
    paddingRight: 20,
    color: '#fff',
    textDecoration: 'none',
  },
});

function Menu() {
  return (
    <div className={css(styles.header)}>
      <Link to="/" className={css(styles.homeLink)}>
        Home
      </Link>
      <Link to="/otherpage" className={css(styles.link)}>
        Other Page
      </Link>
    </div>
  );
}

export default Menu;
