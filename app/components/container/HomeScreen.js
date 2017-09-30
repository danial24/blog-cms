import ContainerBase from './ContainerBase';
import React from 'react';

export default class HomeScreen extends ContainerBase{

    // componentWillMount(){
    //     this.navigateToListing = this.navigateToListing.bind(this);
    // }
    // navigateToListing(){
    //     this.context.router.push({
    //         pathname:"/listing"
    //     });
    // }
    render(){
        return (<div>
            Home Screen
            </div>);
    }
}