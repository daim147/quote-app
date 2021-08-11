import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NewQoute from "./Pages/NewQoute";
import AllQoutes from "./Pages/AllQoutes";
import QouteDetail from "./Pages/QouteDetail";
import Layout from "./components/layout/Layout";
import NotFound from "./Pages/NotFound";
const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/qoutes" />
        </Route>
        <Route path="/qoutes" exact>
          <AllQoutes />
        </Route>
        <Route path="/new-qoute">
          <NewQoute />
        </Route>
        <Route path="/qoutes/:qouteId">
          {" "}
          {/* Component = {component} it will give history object to props */}
          <QouteDetail /> {/* it will not give history object to props */}
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
