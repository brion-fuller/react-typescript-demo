import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

interface SideBarProps {
  open: boolean;
};

interface SideBarState {
  open: boolean;
};

class SideBar extends React.Component<SideBarProps, SideBarState> {
  render() {
    return (
      <Drawer open={this.props.open}>
        <MenuItem>Menu Item</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
      </Drawer>
    );
  }
}
export default SideBar;
