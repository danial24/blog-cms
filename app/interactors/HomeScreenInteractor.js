import WebService from '../services/WebService';
import ActionCreators from '../actions/ActionCreators';

class HomeScreenInteractor {
    getBlogsData() {
        WebService.getBlogsData(ActionCreators.dispatchFetchBlogsData);
    }
}
export default new HomeScreenInteractor();