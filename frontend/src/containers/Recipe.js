import React, { Component } from 'react';
import gql from "graphql-tag"
import { client } from '../endpoints/Endpoint'
import { Link  }from 'react-router-dom'
import '../index.css';


import Nav from '../components/Nav'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';





export default class extends Component{
  state = {
    name: '',
    description: '',
    ingredients: '',
    instructions: '',
    id: ''
  }

  async componentDidMount(){
    console.log("From CDM: ", this.props.match.params.id)

    let temp1 = await client.query({
      query: gql`
          query{
              recipe(where: { id: "${this.props.match.params.id}" }){
                  id
                  name
                  ingredients
                  description
                  instructions
              }
          }
      `}).then((result) => { return result.data.recipe } )

    await console.log("La Data: ", temp1 )
    await this.setState({ name: temp1.name, description: temp1.description, ingredients: temp1.ingredients, instructions: temp1.instructions, id: temp1.id })

  }

  render(){
    console.log("The Toketn inside of CWM: ", this.props.match.params.id)




    return(
      <div>
        <Nav />
        <h1>Recipe: {this.state.name}</h1>
        <br/>

        <div><strong>Name:</strong> {this.state.name}</div>
        <div><strong>Description: </strong>{this.state.description}</div>
        <div><strong>Ingredients: </strong>{this.state.ingredients}</div>
        <div><strong>Instructions: </strong>{this.state.instructions}</div>

        <br/>
        <div>
        <IconMenu
          iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem primaryText="Update Recipe" containerElement={<Link to={``} />}/>
          <MenuItem primaryText="Delete Recipe" containerElement={<Link to={``} />}/>
        </IconMenu>
        </div>
      </div>
    )
  }
}


 // {this.state.recipes[0] ? this.state.recipes.map((info) => { return <RecipeTemplate key={info.id} data={info} /> }) : <div>${window.onload = loadRecipe}</div>}
