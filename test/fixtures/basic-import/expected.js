function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const testModule = new Promise(resolve => {
  require.ensure([], require => {
    resolve(_interopRequireWildcard(require('test-module')));
  });
});
