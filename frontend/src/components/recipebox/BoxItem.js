import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Link  }from 'react-router-dom'


export default class extends Component {
  render() {

    console.log('these are the props', this.props.data)

    return (
      <div>
        <div><strong>Name r: </strong>{this.props.data.name}</div>
        <div><strong>Description: </strong>{this.props.data.description}</div>

        <IconMenu
          iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem primaryText="View Recipe" containerElement={<Link to={`/one/${this.props.data.id}`} />}/>
        </IconMenu>
        <br/>
      </div>
    )
  }
}