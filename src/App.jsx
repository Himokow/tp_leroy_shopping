import React, { useEffect } from 'react'
import './App.css'
import Home from "./_components/Home/home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/index';
import FruitsService from './_services/fruits.service'
import 'antd/dist/antd.css'
import CustomLayout from "./_components/Layout/layout";
import Pay from "./_components/Pay/pay";
import Payment from "./_components/Pay/payment";
import Confirm from "./_components/Pay/confirm";
import Admin from "./_components/Admin/admin";

function App() {

  return (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <CustomLayout>
        <Switch>
          <Route exact path = "/">
            <Home/>
          </Route>
          <Route path='/pay'>
            <Pay/>
          </Route>
          <Route path='/payment'>
            <Payment/>
          </Route>
          <Route path='/confirm'>
            <Confirm/>
          </Route>
          <Route path='/admin'>
            <Admin/>
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
        </CustomLayout>
      </Router>
    </PersistGate>
  </Provider>
  )
}

export default App
