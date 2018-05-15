
import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import RecipeBox from '../containers/RecipeBox';
import NewItem from '../containers/NewItem';
import Home from "../containers/Home";
import Update from "../containers/Update";
import Delete from "../containers/Delete";

import '../index.css';


export default class extends Component {
  render() {
    return(
      <div>
        <Route  exact path='/' component={Home}/>
        <Route  exact path='/recipebox' component={RecipeBox}/>
        <Route  exact path='/newitem' component={NewItem}/>
        <Route  exact path='/update' component={Update}/>
        <Route  exact path='/delete' component={Delete}/>
      </div>
    );
  }
}
