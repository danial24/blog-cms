import React from 'react';
import { Route,RouteHandler} from "react-router/es6";

export default class App extends React.Component{

    render() {
        return (
            <div id="maincanvas" className="maincanvas">
              {this.props.children}
            </div>
        );
      }
}