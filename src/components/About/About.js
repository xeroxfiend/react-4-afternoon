import React, {Component} from "react";
import {Link, Switch, Route} from "react-router-dom";
import History from "../History/History";
import Contact from "../Contact/Contact";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="subnav">
          <Link className="subnav_links" to="/about">
            <h3>About</h3>
          </Link>
          <Link className="subnav_links" to="/about/history">
            <h3>History</h3>
          </Link>
          <Link className="subnav_links" to="/about/contact">
            <h3>Contact</h3>
          </Link>
        </div>
        <div className="box">
          <Switch>
            <Route component={History} path="/about/history"></Route>
            <Route component={Contact} path="/about/contact"></Route>
            <Route
              component={() => (
                <div>
                  <h1 className="title">About WestSide University:</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod eu lorem et ultricies. In porta lorem at dui semper
                    porttitor. Nullam quis cursus dui. Cras tincidunt vehicula
                    tellus eu facilisis. Donec nisi turpis, iaculis et arcu a,
                    aliquet ultrices nisl. Nam in pharetra odio, ac blandit
                    metus. Suspendisse potenti. Praesent elementum diam non orci
                    cursus rutrum. Pellentesque condimentum ultrices dignissim.
                    Sed a tempor ligula, vel luctus sapien. Mauris vehicula
                    rutrum massa. Duis condimentum, ex quis ullamcorper rhoncus,
                    erat libero tempor arcu, condimentum facilisis tellus lectus
                    ut nunc. Pellentesque vitae faucibus diam. Vestibulum eu
                    erat ex. Ut justo neque, varius aliquet erat vel,
                    scelerisque convallis lacus. Mauris semper lorem mauris, sed
                    dignissim eros consectetur nec.
                  </p>
                </div>
              )}
              exact
              path="/about"
            ></Route>
          </Switch>
        </div>
      </div>
    );
  }
}
