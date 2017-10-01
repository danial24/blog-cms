import NetworkRequestsHelper from './NetworkRequestsHelper';

class WebService {
    getBlogsData(handleResponse){
        var url = "";
        NetworkRequestsHelper.get(url, handleResponse);
    }
}

export default new WebService();
