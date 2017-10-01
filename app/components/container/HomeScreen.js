import ContainerBase from './ContainerBase';
import React from 'react';
import { Link } from 'react-router';

export default class HomeScreen extends ContainerBase {

    // componentWillMount(){
    //     this.navigateToListing = this.navigateToListing.bind(this);
    // }
    // navigateToListing(){
    //     this.context.router.push({
    //         pathname:"/listing"
    //     });
    // }
    render() {
        return (<div>
            <Link to={"/listing"}>
                Home Screen
            </Link>
        </div>);
    }
}