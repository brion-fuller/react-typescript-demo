import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

interface AppProps {};

interface AppState {
  open: boolean,
};

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps){
    super(props);
    this.state = {
      open: false
    }
  }
  handleToggle = () => this.setState({open: !this.state.open});
  render() {
    return (
      <div style={{display: 'flex'}}>
        <Drawer open={this.state.open} style={this.state.open ? {flex: '0 0 256px'}: {flex: '0 0 0px'}}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
        <div className='container' style={{flex:'1 1 80%'}}>
          <AppBar onLeftIconButtonTouchTap={this.handleToggle}/>
        </div>
      </div>
    );
  }
}
export default App;
