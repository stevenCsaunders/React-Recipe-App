
import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class extends Component {

  render(){
    const handleClose = (match) => {
      window.location.replace(match)
    }
    return(
      <div>
        <Drawer
          docked={false}
          open={this.props.open}
          onRequestChange={this.props.change}
        >
          <MenuItem onClick={ () => handleClose ('/')}>Home</MenuItem>
          <MenuItem onClick={ () => handleClose ('/recipebox')}>Recipe Box</MenuItem>
          <MenuItem onClick={ () => handleClose ('/newitem')}>New Recipe</MenuItem>
        </Drawer>
      </div>

    );
  }
}