import React, { Component } from 'react';
import Home from './Pages/Home';
import Notfound404 from './Pages/Notfound404';
import MainLayout from './layout/MainLayout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
class App extends Component {
  render() {

    return (
      <React.Fragment>
        <BrowserRouter>
          <div>
            <MainLayout />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Home" component={Home} />
              {/* <Route path="/ProductDetail/:id" component={ProductDetail} />  */}
              <Route component={Notfound404} />
            </Switch>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
export default App;
