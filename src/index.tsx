import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import * as reducers from './reducers';

import Hello from "./Hello/Hello";

//Issue below with spead operators
const reducer = combineReducers({
    routing: routerReducer,
    update: reducers.update
});

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor  preserveScrollTop={false} />
  </DockMonitor>
);

const store = createStore(
  reducer,
  DevTools.instrument()
);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router history={browserHistory}>
                <Route path="/" component={Hello}>
                </Route>
            </Router>
            <DevTools />
        </div>
    </Provider>,
    document.getElementById("app")
);