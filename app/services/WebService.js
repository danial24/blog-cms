import NetworkRequestsHelper from './NetworkRequestsHelper';

class WebService {
    getBlogsData(handleResponse){
        var url = "https://secure-taiga-47420.herokuapp.com/api/blogs";
        console.log(url);
        NetworkRequestsHelper.makeCorsGetRequest(url, handleResponse);
    }
}

export default new WebService();
