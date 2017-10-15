import App from './components/App';


function errorLoading(err) {
  console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
  console.log("callBack");
  console.log(cb);
  return (module) => cb(null, module.default);
}

var childRoutesArray = [
{
    path: '/cms-blog.com/index.html',
    getComponent(location, cb) {
      System.import(/* webpackChunkName: "HomeScreen" */ './components/container/HomeScreen')
        .then(loadRoute(cb))
        .catch(errorLoading);
  }
},
{
  path: '/detail',
  getComponent(location, cb) {
    System.import(/* webpackChunkName: "Listing" */ './components/container/Listing')
      .then(loadRoute(cb))
      .catch(errorLoading);
}
}
];
export default {
  component: App,
  childRoutes: childRoutesArray,
};



