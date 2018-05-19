import React, { Component, Fragment } from 'react';

import Search from '../components/Home/Search'
import Nav from '../components/Nav'

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <div>
          <h1>Recipe Box</h1>
        </div>
        <div>
          <Search />
        </div>
      </Fragment>
    );
  }
}
