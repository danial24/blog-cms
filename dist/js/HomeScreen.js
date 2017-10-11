webpackJsonp([0],{

/***/ "./app/actions/ActionCreators.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phrontend = __webpack_require__("./node_modules/phrontend/lib/index.js");

var _ActionTypes = __webpack_require__("./app/actions/ActionTypes.js");

var ActionTypes = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ActionCreators = function () {
    function ActionCreators() {
        _classCallCheck(this, ActionCreators);
    }

    _createClass(ActionCreators, [{
        key: 'dispatchFetchBlogsData',
        value: function dispatchFetchBlogsData(response) {
            _phrontend.Dispatcher.dispatch(ActionTypes.FETCH_BLOGS_DATA, response);
        }
    }]);

    return ActionCreators;
}();

exports.default = new ActionCreators();

/***/ }),

/***/ "./app/actions/ActionTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FETCH_BLOGS_DATA = exports.FETCH_BLOGS_DATA = "FETCH_BLOGS_DATA";

/***/ }),

/***/ "./app/components/container/ContainerBase.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import { browserHistory } from "react-router/es6";


var ContainerBase = function (_React$Component) {
  _inherits(ContainerBase, _React$Component);

  function ContainerBase() {
    _classCallCheck(this, ContainerBase);

    return _possibleConstructorReturn(this, (ContainerBase.__proto__ || Object.getPrototypeOf(ContainerBase)).apply(this, arguments));
  }

  _createClass(ContainerBase, [{
    key: "componentWillMount",

    // navigateBackListener(){
    //     browserHistory.goBack();
    // }
    value: function componentWillMount() {}
    // log(message){
    //   DebugHelper.log(message);
    // }

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }]);

  return ContainerBase;
}(_react2.default.Component);

ContainerBase.contextTypes = {
  router: _react2.default.PropTypes.object };
exports.default = ContainerBase;

/***/ }),

/***/ "./app/components/container/HomeScreen.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ContainerBase2 = __webpack_require__("./app/components/container/ContainerBase.js");

var _ContainerBase3 = _interopRequireDefault(_ContainerBase2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__("./node_modules/react-router/lib/index.js");

var _HomeScreenStore = __webpack_require__("./app/stores/HomeScreenStore.js");

var _HomeScreenStore2 = _interopRequireDefault(_HomeScreenStore);

var _ActionTypes = __webpack_require__("./app/actions/ActionTypes.js");

var ActionTypes = _interopRequireWildcard(_ActionTypes);

var _HomeScreenInteractor = __webpack_require__("./app/interactors/HomeScreenInteractor.js");

var _HomeScreenInteractor2 = _interopRequireDefault(_HomeScreenInteractor);

var _CircularProgress = __webpack_require__("./node_modules/material-ui/CircularProgress/index.js");

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeScreen = function (_ContainerBase) {
    _inherits(HomeScreen, _ContainerBase);

    function HomeScreen(props) {
        _classCallCheck(this, HomeScreen);

        var _this = _possibleConstructorReturn(this, (HomeScreen.__proto__ || Object.getPrototypeOf(HomeScreen)).call(this, props));

        _this.state = _HomeScreenStore2.default.getLandingData();
        return _this;
    }

    _createClass(HomeScreen, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            _get(HomeScreen.prototype.__proto__ || Object.getPrototypeOf(HomeScreen.prototype), 'componentWillMount', this).call(this);
            this.handleResponse = this.handleResponse.bind(this);
            _HomeScreenInteractor2.default.getBlogsData();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            _get(HomeScreen.prototype.__proto__ || Object.getPrototypeOf(HomeScreen.prototype), 'componentDidMount', this).call(this);
            _HomeScreenStore2.default.subscribe(this.handleResponse);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _get(HomeScreen.prototype.__proto__ || Object.getPrototypeOf(HomeScreen.prototype), 'componentWillUnmount', this).call(this);
            _HomeScreenStore2.default.unsubscribe(this.handleResponse);
        }
    }, {
        key: 'handleResponse',
        value: function handleResponse() {
            switch (_HomeScreenStore2.default.actionType) {
                case ActionTypes.FETCH_BLOGS_DATA:
                    this.state = _HomeScreenStore2.default.getLandingData();
                    this.setState(this.state);
                    break;
                default:
                    break;
            }
        }
    }, {
        key: 'getBlogsListItem',
        value: function getBlogsListItem() {
            if (this.state.loading) {
                return _react2.default.createElement(_CircularProgress2.default, { size: 60, thickness: 7 });
            } else if (this.state.error) {
                _react2.default.createElement(
                    'p',
                    null,
                    "Something went wrong."
                );
            } else {
                return this.getHorizontalListView();
            }
        }
    }, {
        key: 'getListingItem',
        value: function getListingItem(item, index) {
            return _react2.default.createElement(
                'li',
                { key: index },
                _react2.default.createElement(
                    'p',
                    null,
                    item.title
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    item.content
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    item.author
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    item.created_at
                )
            );
        }
    }, {
        key: 'getHorizontalListView',
        value: function getHorizontalListView() {
            var layoutWidth = 210 * this.state.blogsList.length + 10 + 'px';
            return _react2.default.createElement(
                'div',
                { className: 'scrollabe-content-panel popular-up-comming' },
                _react2.default.createElement(
                    'div',
                    { className: 'scrollable-panel clearfix', style: { width: layoutWidth } },
                    _react2.default.createElement(
                        'ul',
                        { className: 'unstyled inline-block' },
                        this.state.blogsList.map(function (item, index) {
                            return this.getListingItem(item, index);
                        }.bind(this))
                    )
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: "/listing" },
                    'Home Screen'
                ),
                this.getBlogsListItem()
            );
        }
    }]);

    return HomeScreen;
}(_ContainerBase3.default);

exports.default = HomeScreen;

/***/ }),

/***/ "./app/interactors/HomeScreenInteractor.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _WebService = __webpack_require__("./app/services/WebService.js");

var _WebService2 = _interopRequireDefault(_WebService);

var _ActionCreators = __webpack_require__("./app/actions/ActionCreators.js");

var _ActionCreators2 = _interopRequireDefault(_ActionCreators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomeScreenInteractor = function () {
    function HomeScreenInteractor() {
        _classCallCheck(this, HomeScreenInteractor);
    }

    _createClass(HomeScreenInteractor, [{
        key: 'getBlogsData',
        value: function getBlogsData() {
            _WebService2.default.getBlogsData(_ActionCreators2.default.dispatchFetchBlogsData);
        }
    }]);

    return HomeScreenInteractor;
}();

exports.default = new HomeScreenInteractor();

/***/ }),

/***/ "./app/services/NetworkRequestsHelper.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DebugHelper = __webpack_require__("./app/utils/DebugHelper.js");

var _DebugHelper2 = _interopRequireDefault(_DebugHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var environmentProduction = false;

var NetworkRequestsHelper = function () {
  function NetworkRequestsHelper() {
    _classCallCheck(this, NetworkRequestsHelper);

    this.get = this.get.bind(this);
    this.onFailureActions = this.onFailureActions.bind(this);
    this.onSuccessActions = this.onSuccessActions.bind(this);
    this.perofrmPostRequest = this.perofrmPostRequest.bind(this);
    this.performGetRequest = this.performGetRequest.bind(this);
    this.getCurrentXHR = this.getCurrentXHR.bind(this);
  }

  _createClass(NetworkRequestsHelper, [{
    key: 'makeCorsGetRequest',
    value: function makeCorsGetRequest(url, handleResponse) {
      // This is a sample server that supports CORS.
      var _this = this;
      var xhr = this.createCORSRequest('GET', url);
      if (!xhr) {
        alert('CORS not supported');
        return;
      }

      xhr.onload = function (e) {
        _this.onSuccessActions(xhr, handleResponse);
      };
      xhr.onerror = function (e) {
        _this.onFailureActions(xhr, handleResponse);
      };
      xhr.setRequestHeader("Authorization", "Basic " + btoa("admin@local.com:admin123"));

      xhr.send();
    }
  }, {
    key: 'createCORSRequest',
    value: function createCORSRequest(method, url) {
      var xhr = new XMLHttpRequest();
      if ("withCredentials" in xhr) {
        console.log("cors supported");
        // XHR for Chrome/Firefox/Opera/Safari.
        xhr.open(method, url, true);
      } else if (typeof XDomainRequest != "undefined") {
        // XDomainRequest for IE.
        xhr = new XDomainRequest();
        xhr.open(method, url);
      } else {
        // CORS not supported.
        xhr = null;
      }
      return xhr;
    }
  }, {
    key: 'get',
    value: function get(url, handleResponse) {
      this.performGetRequest(url, handleResponse);
    }
  }, {
    key: 'post',
    value: function post(url, postObject, handleResponse) {
      this.perofrmPostRequest(url, postObject, handleResponse);
    }
  }, {
    key: 'put',
    value: function put(url, postObject, handleResponse) {
      this.perofrmPutRequest(url, postObject, handleResponse);
    }
  }, {
    key: 'getXhrRequestObject',
    value: function getXhrRequestObject(url, handleResponse) {
      _DebugHelper2.default.log("url : " + url);
      var xhr = new XMLHttpRequest();
      var _this = this;
      xhr.onload = function (e) {
        _this.onSuccessActions(xhr, handleResponse);
      };
      xhr.onerror = function (e) {
        _this.onFailureActions(xhr, handleResponse);
      };
      xhr.requestUrl = url;
      return xhr;
    }
  }, {
    key: 'sendXhrRequest',
    value: function sendXhrRequest(xhr, data) {
      xhr.setRequestHeader("Authorization", "Basic " + btoa("admin@local.com:admin123"));
      xhr.send(data);
    }
  }, {
    key: 'getCurrentXHR',
    value: function getCurrentXHR() {
      return this.xhr;
    }
  }, {
    key: 'performGetRequest',
    value: function performGetRequest(url, handleResponse) {
      var xhr = this.xhr = this.getXhrRequestObject(url, handleResponse);
      xhr.open("GET", url, true);
      this.sendXhrRequest(xhr, null);
    }
  }, {
    key: 'perofromRequest',
    value: function perofromRequest(url, postObject, handleResponse, method) {
      var xhr = this.getXhrRequestObject(url, handleResponse);
      _DebugHelper2.default.log(postObject);
      xhr.open(method, url, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      this.sendXhrRequest(xhr, JSON.stringify(postObject));
    }
  }, {
    key: 'perofrmPutRequest',
    value: function perofrmPutRequest(url, postObject, handleResponse) {
      this.perofromRequest(url, postObject, handleResponse, "PUT");
    }
  }, {
    key: 'perofrmPostRequest',
    value: function perofrmPostRequest(url, postObject, handleResponse) {
      this.perofromRequest(url, postObject, handleResponse, "POST");
    }
  }, {
    key: 'getErrorObject',
    value: function getErrorObject() {
      return { error: "Something Went Wrong" };
    }
  }, {
    key: 'onFailureActions',
    value: function onFailureActions(xhr, handleResponse) {
      var error = this.getErrorObject();
      error.responseText = xhr.responseText;
      _DebugHelper2.default.log(error);
      if (handleResponse) {
        handleResponse(error);
      }
    }
  }, {
    key: 'getResponseObject',
    value: function getResponseObject(xhr) {
      try {
        return { data: JSON.parse(xhr.responseText) };
      } catch (e) {
        return xhr.responseText;
      }
    }
  }, {
    key: 'onSuccessActions',
    value: function onSuccessActions(xhr, handleResponse) {
      var error = this.getErrorObject();
      var _this = this;
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {

          var responseObject = this.getResponseObject(xhr);
          if ((typeof responseObject === 'undefined' ? 'undefined' : _typeof(responseObject)) === 'object') {
            responseObject.responseURL = xhr.responseURL;
            if (!responseObject.responseURL) {
              responseObject.responseURL = xhr.requestUrl; // fallback to manually saved url for older browsers
            }
          }
          _DebugHelper2.default.log(responseObject);
          if (handleResponse) {
            handleResponse(responseObject);
          }
        } else {
          _this.onFailureActions(xhr, handleResponse);
        }
      };
    }
  }]);

  return NetworkRequestsHelper;
}();

exports.default = new NetworkRequestsHelper();

/***/ }),

/***/ "./app/services/WebService.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _NetworkRequestsHelper = __webpack_require__("./app/services/NetworkRequestsHelper.js");

var _NetworkRequestsHelper2 = _interopRequireDefault(_NetworkRequestsHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WebService = function () {
    function WebService() {
        _classCallCheck(this, WebService);
    }

    _createClass(WebService, [{
        key: "getBlogsData",
        value: function getBlogsData(handleResponse) {
            var url = "https://secure-taiga-47420.herokuapp.com/api/blogs";
            console.log(url);
            _NetworkRequestsHelper2.default.makeCorsGetRequest(url, handleResponse);
        }
    }]);

    return WebService;
}();

exports.default = new WebService();

/***/ }),

/***/ "./app/stores/HomeScreenStore.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phrontend = __webpack_require__("./node_modules/phrontend/lib/index.js");

var _ActionTypes = __webpack_require__("./app/actions/ActionTypes.js");

var _ValueVerificationHelper = __webpack_require__("./app/utils/ValueVerificationHelper.js");

var _ValueVerificationHelper2 = _interopRequireDefault(_ValueVerificationHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeScreenStore = function (_Store) {
    _inherits(HomeScreenStore, _Store);

    function HomeScreenStore() {
        _classCallCheck(this, HomeScreenStore);

        var _this = _possibleConstructorReturn(this, (HomeScreenStore.__proto__ || Object.getPrototypeOf(HomeScreenStore)).call(this));

        _this.initLandingData();
        return _this;
    }

    _createClass(HomeScreenStore, [{
        key: 'initLandingData',
        value: function initLandingData() {
            this.landingData = {
                loading: true,
                error: "",
                blogsList: []
            };
        }
    }, {
        key: 'getLandingData',
        value: function getLandingData() {
            return this.landingData;
        }
    }, {
        key: 'handler',
        value: function handler(payload) {
            var emitChanges = true;

            switch (payload.actionType) {
                case _ActionTypes.FETCH_BLOGS_DATA:
                    console.log(payload.data);
                    this.setBlogsData(payload.data);
                    break;
                default:
                    emitChanges = false;
                    break;
            }
            if (emitChanges) {
                this.actionType = payload.actionType;
                this.emitChange();
            }
        }
    }, {
        key: 'setBlogsData',
        value: function setBlogsData(response) {
            this.landingData.loading = false;
            this.landingData.error = _ValueVerificationHelper2.default.getError(response);
            if (_ValueVerificationHelper2.default.isValueMissing(this.landingData.error)) {
                this.landingData = Object.assign({
                    loading: false,
                    error: this.landingData.error,
                    blogsList: response.data
                });
            }
        }
    }]);

    return HomeScreenStore;
}(_phrontend.Store);

exports.default = new HomeScreenStore();

/***/ }),

/***/ "./app/utils/DebugHelper.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEBUG = true;

var DebugHelper = function () {
  function DebugHelper() {
    _classCallCheck(this, DebugHelper);
  }

  _createClass(DebugHelper, [{
    key: "log",
    value: function log(message) {
      if (DEBUG) {
        console.log(message);
      }
    }
  }]);

  return DebugHelper;
}();

exports.default = new DebugHelper();

/***/ }),

/***/ "./app/utils/ValueVerificationHelper.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DebugHelper = __webpack_require__("./app/utils/DebugHelper.js");

var _DebugHelper2 = _interopRequireDefault(_DebugHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ValueVerificationHelper = function () {
  function ValueVerificationHelper() {
    _classCallCheck(this, ValueVerificationHelper);
  }

  _createClass(ValueVerificationHelper, [{
    key: 'isValueMissing',
    value: function isValueMissing(text) {
      var value = text;
      try {
        value = text.trim();
      } catch (err) {}
      return value === '' || value === 'null' || value === 'N/A' || value == null || value === undefined || value === 'undefined' || value.prop && value.prop.constructor === Array && !this.listContainsData(value);
    }
  }, {
    key: 'isFailed',
    value: function isFailed(response) {
      return response.error !== undefined || response.data !== undefined && (!this.isValueMissing(response.data.error) || !this.isValueMissing(response.data.errors));
    }
  }, {
    key: 'isSuccessfull',
    value: function isSuccessfull(response) {
      return !this.isFailed(response);
    }
  }, {
    key: 'isDefined',
    value: function isDefined(object) {
      return object !== undefined && object !== null;
    }
  }, {
    key: 'allNotDefined',
    value: function allNotDefined() {
      for (var i = 0; i < arguments.length; i++) {
        if (this.isDefined(arguments[i])) {
          return false;
        }
      }
      return true;
    }
  }, {
    key: 'getSuccessMessage',
    value: function getSuccessMessage(response) {
      if (response.success) {
        return response.success;
      }
      if (response.data && response.data.success) {
        return response.data.success;
      }
    }
  }, {
    key: 'getErrorOrSuccessMessage',
    value: function getErrorOrSuccessMessage(response) {
      if (this.isSuccessfull(response)) {
        return this.getSuccessMessage(response);
      } else {
        return this.getError(response);
      }
    }
  }, {
    key: 'getBooleanValue',
    value: function getBooleanValue(booleanVaue) {
      return this.isValueMissing(booleanVaue) ? false : booleanVaue;
    }
  }, {
    key: 'oneNotDefined',
    value: function oneNotDefined() {
      for (var i = 0; i < arguments.length; i++) {
        if (!this.isDefined(arguments[i])) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: 'getError',
    value: function getError(response) {
      var error = response.error !== undefined ? response.error : response.data.error || response.data.errors;
      if (this.isDefined(error) && error.constructor === Array && this.listContainsData(error)) {
        return error[0];
      }
      return error;
    }
  }, {
    key: 'listContainsData',
    value: function listContainsData(list) {
      return this.isDefined(list) && list.length > 0;
    }
  }]);

  return ValueVerificationHelper;
}();

exports.default = new ValueVerificationHelper();

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/assign.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/fn/object/assign.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/extends.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/assign.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-assign.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/material-ui/CircularProgress/CircularProgress.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _autoPrefix = __webpack_require__("./node_modules/material-ui/utils/autoPrefix.js");

var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

var _transitions = __webpack_require__("./node_modules/material-ui/styles/transitions.js");

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRelativeValue(value, min, max) {
  var clampedValue = Math.min(Math.max(min, value), max);
  return clampedValue / (max - min);
}

function getArcLength(fraction, props) {
  return fraction * Math.PI * (props.size - props.thickness);
}

function getStyles(props, context) {
  var max = props.max,
      min = props.min,
      size = props.size,
      value = props.value;
  var palette = context.muiTheme.baseTheme.palette;


  var styles = {
    root: {
      position: 'relative',
      display: 'inline-block',
      width: size,
      height: size
    },
    wrapper: {
      width: size,
      height: size,
      display: 'inline-block',
      transition: _transitions2.default.create('transform', '20s', null, 'linear'),
      transitionTimingFunction: 'linear'
    },
    svg: {
      width: size,
      height: size,
      position: 'relative'
    },
    path: {
      stroke: props.color || palette.primary1Color,
      strokeLinecap: 'round',
      transition: _transitions2.default.create('all', '1.5s', null, 'ease-in-out')
    }
  };

  if (props.mode === 'determinate') {
    var relVal = getRelativeValue(value, min, max);
    styles.path.transition = _transitions2.default.create('all', '0.3s', null, 'linear');
    styles.path.strokeDasharray = getArcLength(relVal, props) + ', ' + getArcLength(1, props);
  }

  return styles;
}

var CircularProgress = function (_Component) {
  (0, _inherits3.default)(CircularProgress, _Component);

  function CircularProgress() {
    (0, _classCallCheck3.default)(this, CircularProgress);
    return (0, _possibleConstructorReturn3.default)(this, (CircularProgress.__proto__ || (0, _getPrototypeOf2.default)(CircularProgress)).apply(this, arguments));
  }

  (0, _createClass3.default)(CircularProgress, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.scalePath(this.refs.path);
      this.rotateWrapper(this.refs.wrapper);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.scalePathTimer);
      clearTimeout(this.rotateWrapperTimer);
    }
  }, {
    key: 'scalePath',
    value: function scalePath(path) {
      var _this2 = this;

      var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (this.props.mode !== 'indeterminate') return;

      step %= 3;

      if (step === 0) {
        path.style.strokeDasharray = getArcLength(0, this.props) + ', ' + getArcLength(1, this.props);
        path.style.strokeDashoffset = 0;
        path.style.transitionDuration = '0ms';
      } else if (step === 1) {
        path.style.strokeDasharray = getArcLength(0.7, this.props) + ', ' + getArcLength(1, this.props);
        path.style.strokeDashoffset = getArcLength(-0.3, this.props);
        path.style.transitionDuration = '750ms';
      } else {
        path.style.strokeDasharray = getArcLength(0.7, this.props) + ', ' + getArcLength(1, this.props);
        path.style.strokeDashoffset = getArcLength(-1, this.props);
        path.style.transitionDuration = '850ms';
      }

      this.scalePathTimer = setTimeout(function () {
        return _this2.scalePath(path, step + 1);
      }, step ? 750 : 250);
    }
  }, {
    key: 'rotateWrapper',
    value: function rotateWrapper(wrapper) {
      var _this3 = this;

      if (this.props.mode !== 'indeterminate') return;

      _autoPrefix2.default.set(wrapper.style, 'transform', 'rotate(0deg)');
      _autoPrefix2.default.set(wrapper.style, 'transitionDuration', '0ms');

      setTimeout(function () {
        _autoPrefix2.default.set(wrapper.style, 'transform', 'rotate(1800deg)');
        _autoPrefix2.default.set(wrapper.style, 'transitionDuration', '10s');
        _autoPrefix2.default.set(wrapper.style, 'transitionTimingFunction', 'linear');
      }, 50);

      this.rotateWrapperTimer = setTimeout(function () {
        return _this3.rotateWrapper(wrapper);
      }, 10050);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          innerStyle = _props.innerStyle,
          size = _props.size,
          thickness = _props.thickness,
          other = (0, _objectWithoutProperties3.default)(_props, ['style', 'innerStyle', 'size', 'thickness']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
        _react2.default.createElement(
          'div',
          { ref: 'wrapper', style: prepareStyles((0, _simpleAssign2.default)(styles.wrapper, innerStyle)) },
          _react2.default.createElement(
            'svg',
            {
              viewBox: '0 0 ' + size + ' ' + size,
              style: prepareStyles(styles.svg)
            },
            _react2.default.createElement('circle', {
              ref: 'path',
              style: prepareStyles(styles.path),
              cx: size / 2,
              cy: size / 2,
              r: (size - thickness) / 2,
              fill: 'none',
              strokeWidth: thickness,
              strokeMiterlimit: '20'
            })
          )
        )
      );
    }
  }]);
  return CircularProgress;
}(_react.Component);

CircularProgress.defaultProps = {
  mode: 'indeterminate',
  value: 0,
  min: 0,
  max: 100,
  size: 40,
  thickness: 3.5
};
CircularProgress.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
CircularProgress.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Override the progress's color.
   */
  color: _propTypes2.default.string,
  /**
   * Style for inner wrapper div.
   */
  innerStyle: _propTypes2.default.object,
  /**
   * The max value of progress, only works in determinate mode.
   */
  max: _propTypes2.default.number,
  /**
   * The min value of progress, only works in determinate mode.
   */
  min: _propTypes2.default.number,
  /**
   * The mode of show your progress, indeterminate
   * for when there is no value for progress.
   */
  mode: _propTypes2.default.oneOf(['determinate', 'indeterminate']),
  /**
   * The diameter of the progress in pixels.
   */
  size: _propTypes2.default.number,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Stroke width in pixels.
   */
  thickness: _propTypes2.default.number,
  /**
   * The value of progress, only works in determinate mode.
   */
  value: _propTypes2.default.number
} : {};
exports.default = CircularProgress;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/material-ui/CircularProgress/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _CircularProgress = __webpack_require__("./node_modules/material-ui/CircularProgress/CircularProgress.js");

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _CircularProgress2.default;

/***/ }),

/***/ "./node_modules/material-ui/styles/transitions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {

  easeOutFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
  easeInOutFunction: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',

  easeOut: function easeOut(duration, property, delay, easeFunction) {
    easeFunction = easeFunction || this.easeOutFunction;

    if (property && Object.prototype.toString.call(property) === '[object Array]') {
      var transitions = '';
      for (var i = 0; i < property.length; i++) {
        if (transitions) transitions += ',';
        transitions += this.create(duration, property[i], delay, easeFunction);
      }

      return transitions;
    } else {
      return this.create(duration, property, delay, easeFunction);
    }
  },
  create: function create(duration, property, delay, easeFunction) {
    duration = duration || '450ms';
    property = property || 'all';
    delay = delay || '0ms';
    easeFunction = easeFunction || 'linear';

    return property + ' ' + duration + ' ' + easeFunction + ' ' + delay;
  }
};

/***/ }),

/***/ "./node_modules/material-ui/utils/autoPrefix.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  set: function set(style, key, value) {
    style[key] = value;
  }
};

/***/ }),

/***/ "./node_modules/simple-assign/index.js":
/***/ (function(module, exports) {

module.exports = function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};


/***/ })

});