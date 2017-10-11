import ContainerBase from './ContainerBase';
import React from 'react';
import { Link } from 'react-router';
import HomeScreenStore from '../../stores/HomeScreenStore';
import * as ActionTypes from '../../actions/ActionTypes';
import HomeScreenInteractor from '../../interactors/HomeScreenInteractor';
import CircularProgress from 'material-ui/CircularProgress';

export default class HomeScreen extends ContainerBase {

    constructor(props) {
        super(props);
        this.state = HomeScreenStore.getLandingData();
    }
    componentWillMount() {
        super.componentWillMount();
        this.handleResponse = this.handleResponse.bind(this);
        HomeScreenInteractor.getBlogsData();

    }
    componentDidMount() {
        super.componentDidMount();
        HomeScreenStore.subscribe(this.handleResponse);
    }
    componentWillUnmount() {
        super.componentWillUnmount();
        HomeScreenStore.unsubscribe(this.handleResponse);
    }
    handleResponse() {
        switch (HomeScreenStore.actionType) {
            case ActionTypes.FETCH_BLOGS_DATA:
                this.state = HomeScreenStore.getLandingData();
                this.setState(this.state);
                break;
            default:
                break;
        }
    }
    getBlogsListItem() {
        if (this.state.loading) {
            return <CircularProgress size={60} thickness={7} />
        } else if (this.state.error) {
            <p>{"Something went wrong."}</p>
        } else {
            return this.getHorizontalListView();
        }
    }
    getListingItem(item, index){
        return (
            <li key={index}>
                <p>{item.title}</p>
                <p>{item.content}</p>
                <p>{item.author}</p>
                <p>{item.created_at}</p>
            </li>
        );
    }
    getHorizontalListView(){
        var layoutWidth = ((210 * this.state.blogsList.length) + 10) + 'px';
        return (
          <div className="scrollabe-content-panel popular-up-comming">
            <div className="scrollable-panel clearfix" style={{width:layoutWidth}}>
              <ul className="unstyled inline-block">
                {this.state.blogsList.map(function(item,index){
                  return this.getListingItem(item,index);
                }.bind(this))}
              </ul>
            </div>
          </div>
        );
      }
    render() {
        return (<div>

            <Link to={"/listing"}>
                Home Screen
            </Link>
            {this.getBlogsListItem()}
        </div>);
    }
}