import ContainerBase from './ContainerBase';
import React from 'react';
import { Link } from 'react-router';
import HomeScreenStore from '../../stores/HomeScreenStore';
import * as ActionTypes from '../../actions/ActionTypes';

export default class HomeScreen extends ContainerBase {

    componentWillMount() {
        super.componentWillMount();
        this.handleResponse = this.handleResponse.bind(this);
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
                break;
            default:
                break;
        }
    }
    render() {
        return (<div>
            <Link to={"/listing"}>
                Home Screen
            </Link>
        </div>);
    }
}