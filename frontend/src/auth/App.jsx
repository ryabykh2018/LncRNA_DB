import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Header from './components/Header'
import MainForm from './components/MainForm'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  typography: {
    flexGrow: 1,
    color: 'white',
    fontFamily: 'Roboto'
  }
};

class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Header />
        <MainForm />
      </div>
    );
  }
}

export default withStyles(styles)(App);
