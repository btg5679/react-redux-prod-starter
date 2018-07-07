import { css, StyleSheet } from 'aphrodite';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from '../components/Menu';
import '../styles/App.css';

const mapStateToProps = (state) => {
  return {};
};

const styles = StyleSheet.create({
  root: {
    maxWidth: 700,
    color: '#000',
    margin: '2rem auto',
  },
  header:{
    height:25,
    width:700,
    backgroundColor:"#000",
    color:"#fff",
    fontSize: 16,
    paddingTop: 6,
    paddingLeft: 5,
    cursor: "pointer"
  },
  homeLink: {
    paddingRight:20,
    color: '#fff',
    textDecoration: "none"
  },
  link: {
    paddingRight:20,
    color: '#fff',
    textDecoration: "none"
  }});

class OtherPage extends Component {
  updateState() {}

  render() {
    return (
      <div className={css(styles.root)}>
        <Menu />
      </div>
    );
  }
}

export default connect(mapStateToProps)(OtherPage);