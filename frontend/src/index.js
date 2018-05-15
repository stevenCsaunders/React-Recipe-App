import React from 'react';
import ReactDOM from 'react-dom';
import MUIThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {BrowserRouter as Router} from 'react-router-dom';
import Paper from 'material-ui/Paper'
import { ApolloProvider } from "react-apollo"

import Routes from './config/Routes'
import { client } from './containers/endpoints/Endpoint'

const App = () => (
  <ApolloProvider client={client}>
    <MUIThemeProvider>
      <Router>
        <div>
          <Paper className={'paper'}>
            <Routes />
          </Paper>
        </div>
      </Router>
    </MUIThemeProvider>
  </ApolloProvider>
);


ReactDOM.render(<App />, document.getElementById('root'));
