import React from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import ComponentTest from "~/app/containers/ComponentTest";
import "antd/dist/antd.min.css";
import "~/assets/scss/App.scss";
import "~/assets/css/app.css";

const App = withRouter(
  React.memo(function App() {
    return (
      <>
        <div className="container bg-gray-100">
          <div className="container-fluid">
            <Link to="/">Home</Link>
            <Link to="/livetv">LiveTV</Link>
            <Link to="/category">Category</Link>
            <Link to="/rapviet">Rapviet</Link>
          </div>
        </div>
        <div className="container bg-gray-100">
          <React.Suspense fallback={<div>Loading...</div>}>
            <h1 className="text-primary text-4xl font-bold">
              Hello world! I am using React
            </h1>
            <Switch>
              <Route path="/" exact>
                <ComponentTest text="Home" />
              </Route>
              <Route path="/livetv" exact>
                <ComponentTest text="rout2" />
              </Route>
              <Route path="/category" exact>
                <ComponentTest text="rout3" />
              </Route>
              <Route path="/rapviet" exact>
                <ComponentTest text="rout4" />
              </Route>
            </Switch>
          </React.Suspense>
        </div>
      </>
    );
  })
);

export default App;
