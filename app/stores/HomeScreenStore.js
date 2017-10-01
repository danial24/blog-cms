import { Store } from 'phrontend';
import { FETCH_BLOGS_DATA } from '../actions/ActionTypes';

class HomeScreenStore extends Store {

    handler(payload) {
        var emitChanges = true;

        switch (payload.actionType) {
            case FETCH_BLOGS_DATA:
                //setBlogsData
                break;
            default:
                emitChanges = false;
                break;
        }
        if(emitChanges){
            this.actionType = payload.actionType;
            this.emitChange();
        }
    }
}

export default new HomeScreenStore();