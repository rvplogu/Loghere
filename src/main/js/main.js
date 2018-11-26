import React from 'react';
import LoginPage from './container/LoginPage';
import { Route, Switch, HashRouter } from 'react-router-dom';
import ProfilePageContainer from './container/ProfilePageContainer';
import TimeSheetContainer from './container/TimeSheetContainer';
import ResetPasswordContainer from './container/ResetPasswordContainer';

class Main extends React.Component {
  render(){
    alert('Hello world')
    return(
      <HashRouter>
        <Switch>
          <Route path="/signin" component={LoginPage} />
          <Route path="/profile" component={ProfilePageContainer} />
          <Route path="/timesheet" component={TimeSheetContainer} />
          <Route path="/reset" component={ResetPasswordContainer} />
        </Switch>
      </HashRouter>
    );
  }
}

export default Main;