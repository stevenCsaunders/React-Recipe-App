
import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import RecipeBox from '../containers/RecipeBox';
import NewItem from '../containers/NewItem';
import Home from "../containers/Home";
import Update from "../containers/Update";
import Delete from "../containers/Delete";
import Recipe from "../containers/Recipe";


import '../index.css';


export default class extends Component {
  render() {
    return(
      <div>
        <Route  exact path='/' component={Home}/>
        <Route  path='/recipebox' component={RecipeBox}/>
        <Route  path="/one/:id" component={Recipe} />
        <Route  path='/newitem' component={NewItem}/>
        <Route  path='/update' component={Update}/>
        <Route  path='/delete' component={Delete}/>
      </div>
    );
  }
}
