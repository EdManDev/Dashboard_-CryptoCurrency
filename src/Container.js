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
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={{ enter: 900, exit: 901 }}
          classNames="fade"
        >
          <div style={{ margin: "50px" }}>
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/first" component={First} />
              <Route path="/second" component={Second} />
              <Route path="/third" component={Third} />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default withRouter(Container);
