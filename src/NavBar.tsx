import * as React from 'react';
import AppBar from 'material-ui/AppBar';

interface NavBarProps {
  handleToggle(): void;
};

interface NavBarState {};


export default class NavBar extends React.Component<NavBarProps,NavBarState> {
  render(){
    return <AppBar onLeftIconButtonTouchTap={this.props.handleToggle}/>
  }
}