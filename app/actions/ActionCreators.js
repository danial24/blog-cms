import {Dispatcher} from 'phrontend';
import * as ActionTypes from './ActionTypes';

class ActionCreators{
    dispatchFetchBlogsData(response){
        Dispatcher.dispatch(ActionTypes.FETCH_BLOGS_DATA, response);
    }
}
export  default new ActionCreators();