
import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import RecipeBox from '../containers/RecipeBox';
import NewItem from '../containers/NewItem';
import Home from "../containers/Home";
import Update from "../containers/Update";
import Recipe from "../containers/Recipe";


import '../index.css';


export default class extends Component {
  render() {
    return(
      <div>
        <Route  exact path='/' component={Home}/>
        <Route  path='/recipebox' component={RecipeBox}/>
        <Route  path="/recipe/:id" component={Recipe} />
        <Route  path='/newitem' component={NewItem}/>
        <Route  path='/update/:id' component={Update}/>
      </div>
    );
  }
}
