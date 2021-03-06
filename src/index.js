import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { BrowserRouter} from 'react-router-dom';

ReactDOM.render(





  <React.StrictMode>

<CssBaseline />
  <Container maxWidth="lg">

  <BrowserRouter>
    <App />

    </BrowserRouter>
  </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
