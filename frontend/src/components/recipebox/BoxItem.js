import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Link  }from 'react-router-dom'


export default class extends Component {
  render() {

    return (
      <div>
        <IconMenu
          iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem primaryText="View Recipe" containerElement={<Link to={`/recipe/${this.props.data.id}`} />}/>
        </IconMenu>
        <div><h2>{this.props.data.name}</h2></div>
        <div><p>{this.props.data.description} </p></div>
      </div>
    )
  }
}