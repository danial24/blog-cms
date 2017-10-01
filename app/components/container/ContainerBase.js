// import { browserHistory } from "react-router/es6";
import React from "react";

export default class ContainerBase extends React.Component{
  // log(message){
  //   DebugHelper.log(message);
  // }
  static contextTypes ={
    router:React.PropTypes.object
  }
  // navigateBackListener(){
  //     browserHistory.goBack();
  // }
  componentWillMount(){

  }
  componentDidMount(){

  }
  componentWillUnmount(){

  }
}