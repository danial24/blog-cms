import { Store } from 'phrontend';
import { FETCH_BLOGS_DATA } from '../actions/ActionTypes';
import ValueVerificationHelper from '../utils/ValueVerificationHelper';

class HomeScreenStore extends Store {

    constructor(){
        super();
        this.initLandingData();
    }
    initLandingData(){
        this.landingData = {
            loading:true,
            error:"",
            blogsList:[]
        };
    }
    getLandingData(){
        return this.landingData;
    }

    handler(payload) {
        var emitChanges = true;

        switch (payload.actionType) {
            case FETCH_BLOGS_DATA:
                console.log(payload.data);
                this.setBlogsData(payload.data);
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
    setBlogsData(response){
        this.landingData.loading = false;
        this.landingData.error = ValueVerificationHelper.getError(response);
        if(ValueVerificationHelper.isValueMissing(this.landingData.error)){
            this.landingData = Object.assign({
                loading:false,
                error:this.landingData.error,
                blogsList:response.data
            });
        }
    }
}

export default new HomeScreenStore();