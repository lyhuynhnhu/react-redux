import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './redux/reducers/index'
import reportWebVitals from './reportWebVitals';

import Phone from './components/registration-phone/phone'
import OTP from './components/registration-otp/otp'
import Profile from './components/update-profile/profile'

import './App.css';

const middleware = [ thunk ];
const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
)

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Phone} />
            <Route path="/registration-otp" component={OTP} />
            <Route path="/update-profile" component={Profile} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}
reportWebVitals();

export default App;
