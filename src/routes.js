import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import App from './Practice/1';
import Show from './Practice/2';
import ClassComponent from './Practice/HOC';
import FormikForm from './Practice/formikForm';
import ResponsiveGrid from './Practice/ResponsiveGrid';
import UseCallBack from './Practice/useCallback';
import UseMemo from './Practice/useMemo';
import Counter from './Practice/useReducer';
import Compponet from './Practice/common';
import TestMemo from './Practice/new';
import UseMomos from './Practice/4';

export default function Routes() {
  return (
      <Router>
          <Switch>
              <Route exact path="/" component={ClassComponent} />
              <Route exact path="/c" component={Compponet} />
              <Route exact path="/usecallback" component={UseCallBack} />
              <Route exact path="/usememo" component={UseMemo} />
              <Route exact path="/usereducer" component={Counter} />
              <Route exact path="/threejs" component={App} />
              <Route exact path="/res" component={ResponsiveGrid} />
              <Route exact path="/formik" component={FormikForm} />
              <Route exact path="/2" component={Show} />
              <Route exact path="/new" component={TestMemo} />
              <Route exact path="/4" component={UseMomos} />
              <Redirect exact to="/" />
          </Switch>
      </Router>
  );
}