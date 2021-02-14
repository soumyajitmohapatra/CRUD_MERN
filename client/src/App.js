import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const Form = lazy(()=>import ('./Component/Form'))
const Table = lazy(()=>import('./Component/Users'))
const Edit = lazy(()=> import('./Component/Edit.user'))


function App() {
  return (
    <div className="App">
    <Router>
      <Suspense fallback={<div>Loading......</div>}>
      <Switch>
        <>
          <Route path='/' exact component={Form} />
          <Route path='/users' component={Table} />
          <Route path='/edit' component={Edit} />
        </>
      </Switch>
      </Suspense>
    </Router>
    </div>
  );
}

export default App;
