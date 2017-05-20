import * as React from 'react';
import * as ReactDOM from 'react-dom';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import customTheme from './theme';
import RaisedButton from 'material-ui/RaisedButton';

import NavBar from './NavBar';
import SideBar from './App';

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(customTheme)}>
    <SideBar />
  </MuiThemeProvider>
);


ReactDOM.render(
  <App />,
  document.getElementById('app')
);