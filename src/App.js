import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoadingSpinner from "./components/UI/LoadingSpinner";
const NotFound = React.lazy(() => import("./Pages/NotFound"));
const Layout = React.lazy(() => import("./components/layout/Layout"));
const QouteDetail = React.lazy(() => import("./Pages/QouteDetail"));
const AllQoutes = React.lazy(() => import("./Pages/AllQoutes"));
const NewQoute = React.lazy(() => import("./Pages/NewQoute"));
const App = () => {
  return (
    <Suspense
      fallback={
        <div className="centered">
          <LoadingSpinner />
        </div>
      }
    >
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
    </Suspense>
  );
};

export default App;
