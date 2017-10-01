import DebugHelper from './DebugHelper';

var environmentProduction = false;

class NetworkRequestsHelper{

  constructor(){
    this.get = this.get.bind(this);
    this.onFailureActions = this.onFailureActions.bind(this);
    this.onSuccessActions = this.onSuccessActions.bind(this);
    this.perofrmPostRequest = this.perofrmPostRequest.bind(this);
    this.performGetRequest = this.performGetRequest.bind(this);
    this.getCurrentXHR  = this.getCurrentXHR.bind(this);
  }
  get(url, handleResponse){
    this.performGetRequest(url, handleResponse);
  }
  post(url,postObject, handleResponse){
    this.perofrmPostRequest(url,postObject, handleResponse);
  }
  put(url,postObject, handleResponse){
    this.perofrmPutRequest(url,postObject, handleResponse);
  }
  getXhrRequestObject(url,handleResponse){
    DebugHelper.log("url : " + url);
    var xhr = new XMLHttpRequest();
    var _this = this;
    xhr.onload = function (e) {
      _this.onSuccessActions(xhr,handleResponse);
    }
    xhr.onerror = function (e) {
      _this.onFailureActions(xhr,handleResponse);
    };
    xhr.requestUrl = url;
    return xhr;
  }
  sendXhrRequest(xhr, data){
    xhr.send(data);
  }
  getCurrentXHR(){
    return this.xhr;
  }

  performGetRequest (url, handleResponse) {
    var xhr = this.xhr = this.getXhrRequestObject(url,handleResponse);
    xhr.open("GET", url, true);
    this.sendXhrRequest(xhr,null);
  }
  perofromRequest(url,postObject,handleResponse,method){
    var xhr = this.getXhrRequestObject(url,handleResponse);
    DebugHelper.log(postObject);
    xhr.open(method, url, true);
    xhr.setRequestHeader("Content-Type","application/json");
    this.sendXhrRequest(xhr,JSON.stringify(postObject));
  }
  perofrmPutRequest(url,postObject,handleResponse){
    this.perofromRequest(url,postObject,handleResponse,"PUT");
  }
  perofrmPostRequest(url,postObject,handleResponse){
    this.perofromRequest(url,postObject,handleResponse,"POST");
  }
  getErrorObject(){
    return {error : "Something Went Wrong"};
  }
  onFailureActions(xhr,handleResponse){
    var error = this.getErrorObject();
    error.responseText = xhr.responseText;
    DebugHelper.log(error);
    if(handleResponse){
      handleResponse(error);
    }
  }
  getResponseObject(xhr){
    try {
      return {data:JSON.parse(xhr.responseText)};
    }
    catch(e){
      return xhr.responseText;
    }
  }
  onSuccessActions(xhr,handleResponse){
    var error = this.getErrorObject();
    var _this = this;
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {

        var responseObject = this.getResponseObject(xhr);
        if(typeof responseObject === 'object'){
          responseObject.responseURL = xhr.responseURL;
          if(!responseObject.responseURL){
            responseObject.responseURL = xhr.requestUrl;// fallback to manually saved url for older browsers
          }
        }
        DebugHelper.log(responseObject);
        if(handleResponse){
          handleResponse(responseObject);
        }
      } else {
        _this.onFailureActions(xhr,handleResponse);
      }
    };
  }
}

export default new NetworkRequestsHelper();
