import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/App.css';
import Helmet from 'react-helmet';
import { StyleSheet, css } from 'aphrodite';

const mapStateToProps = (state) => {
  return {};
};

const styles = StyleSheet.create({
  root: {
    maxWidth: 700,
    color: '#000',
    margin: '2rem auto',
  },
  title: {
    color: '#000',
    maxWidth: 300,
    fontSize: 56,
  },
  footer: {
    margin: '4rem auto',
    textAlign: 'center',
    color: '#b7b7b7',
  },
  footerLink: {
    display: 'inline-block',
    color: '#000',
    textDecoration: 'none',
  },
});

class App extends Component {
  updateState() {

  }

  render() {
    return (
      <div className={css(styles.root)}>
        <Helmet
          title="React Production Starter"
          titleTemplate="%s - React Production Starter"
        />
        <h1 className={css(styles.title)}>
          React
          Redux
          Starter
        </h1>
        <footer className={css(styles.footer)}>
        Twitter:
          {' '}
          <a
            className={css(styles.footerLink)}
            href="http://twitter.com/_bengarrison"
            target="_blank"
            rel="noopener noreferrer"
          >
          @_bengarrison
          </a>
          <br />
          Github:
          {' '}
          <a
            className={css(styles.footerLink)}
            href="https://github.com/btg5679/"
            target="_blank"
            rel="noopener noreferrer"
          >
          @btg5679
          </a>
        </footer>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
