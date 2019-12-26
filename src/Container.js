import React from "react";

import Home from "./Home";
import First from "./First";
import Second from "./Second";
import Third from "./Third";

import Header from "./Header";
import "./Container.css";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Switch, Route, withRouter } from "react-router-dom";

function Container({ location }) {
  return (
    <div>
      <Header />
      <div className="Wrapper" style={{ margin: "50px" }}>
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={{ enter: 900, exit: 900 }}
            classNames="fade"
          >
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/first" component={First} />
              <Route path="/second" component={Second} />
              <Route path="/third" component={Third} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

export default withRouter(Container);
