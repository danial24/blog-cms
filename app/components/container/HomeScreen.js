import ContainerBase from './ContainerBase';
import React from 'react';
import { Link } from 'react-router';
import HomeScreenStore from '../../stores/HomeScreenStore';
import * as ActionTypes from '../../actions/ActionTypes';
import HomeScreenInteractor from '../../interactors/HomeScreenInteractor';
import CircularProgress from 'material-ui/CircularProgress';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

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



    getListingItem(item, index) {
        // return (
        //     <li key={index}>
        //         <p>{item.title}</p>
        //         <p>{item.content}</p>
        //         <p>{item.author}</p>
        //         <p>{item.created_at}</p>
        //     </li>
        // );

        return (
            <li className="small-card" key={index + 100} >
                {/* {this.getImageComponent(item)} */}
                <div className="card-content card-content-liner-3">
                    <ul className="unstyled list-data">
                        <li className="lable-item">
                            {item.title}
                        </li>
                        <li className="car-review">
                            <p className="">{item.content}</p>
                        </li>
                        <li className="grey">{"Posted By: " + item.author}</li>
                        <li className="grey">{item.created_at}</li>
                    </ul>
                </div>
            </li>
        );
    }
    getHorizontalListView() {
        var list = this.state.blogsList;
        var layoutWidth = ((210 * this.state.blogsList.length) + 10) + 'px';
        return (
            <div className="scrollabe-content-panel popular-up-comming">
                <div className="scrollable-panel clearfix" style={{ width: layoutWidth }}>
                    <ul className="unstyled inline-block">
                        {list.map(function (item, index) {
                            return this.getListingItem(item, index);
                        }.bind(this))}
                    </ul>
                </div>
            </div>
        );
    }

    getDrawerItem() {
        return (
            <div>

                <Drawer open={true}>
                    <MenuItem>Sports</MenuItem>
                    <MenuItem>Music</MenuItem>
                    <MenuItem>Gaming</MenuItem>
                    <MenuItem>Videos</MenuItem>
                    <MenuItem>TV News</MenuItem>
                    <MenuItem>News</MenuItem>
                </Drawer>
            </div>
        );
    }

    render() {
        return (<div>
            <h2 className="gutter">POPULAR BLOGS</h2>
            {this.getBlogsListItem()}
        </div>);
    }

}