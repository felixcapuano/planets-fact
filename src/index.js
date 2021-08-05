import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App/App';

import { MatomoProvider, createInstance } from '@datapunt/matomo-tracker-react';
import { v4 as uuidv4 } from 'uuid';

const matomo = createInstance({
  urlBase: 'http://localhost:8000/',
  siteId: 1,
  userId: uuidv4(), // optional, default value: `undefined`.
  //   trackerUrl: 'https://LINK.TO.DOMAIN/tracking.php', // optional, default value: `${urlBase}matomo.php`
  //   srcUrl: 'https://LINK.TO.DOMAIN/tracking.js', // optional, default value: `${urlBase}matomo.js`
    disabled: false, // optional, false by default. Makes all tracking calls no-ops if set to true.
  //   heartBeat: { // optional, enabled by default
  //     active: true, // optional, default value: true
  //     seconds: 10 // optional, default value: `15
  //   },
  //   linkTracking: false, // optional, default value: true
  //   configurations: { // optional, default value: {}
  //     // any valid matomo configuration, all below are optional
  //     disableCookies: true,
  //     setSecureCookie: true,
  //     setRequestMethod: 'POST'
  //   }
});

ReactDOM.render(
  <MatomoProvider value={matomo}>
    <Router>
      <App />
    </Router>
  </MatomoProvider>,
  document.getElementById('root')
);
