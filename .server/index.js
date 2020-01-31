/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "includes/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/koot/ReactSPA/server/index.js":
/*!****************************************************!*\
  !*** ./node_modules/koot/ReactSPA/server/index.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_create_koa_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/create-koa-app */ "./node_modules/koot/libs/create-koa-app.js");
/* harmony import */ var _libs_create_koa_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_libs_create_koa_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaults_koa_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../defaults/koa-static */ "./node_modules/koot/defaults/koa-static.js");
/* harmony import */ var _defaults_koa_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_defaults_koa_static__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_get_dist_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/get-dist-path */ "./node_modules/koot/utils/get-dist-path.js");
/* harmony import */ var _utils_get_dist_path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_get_dist_path__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable no-console */
 // import { server as serverConfig } from '__KOOT_PROJECT_CONFIG_PORTION_SERVER_PATHNAME__';


 // import getDirDistPublic from '../../libs/get-dir-dist-public';



var koaStatic = __webpack_require__(/*! koa-static */ "koa-static");

var convert = __webpack_require__(/*! koa-convert */ "koa-convert");

var errorMsg = __webpack_require__(/*! ../../libs/error-msg */ "./node_modules/koot/libs/error-msg.js");

var validatePort = __webpack_require__(/*! ../../libs/validate-port */ "./node_modules/koot/libs/validate-port.js");
/**
 * 启动 SPA 服务器
 * @async
 */


var startSPAServer = async function startSPAServer() {
  if (false) {}
  console.log("\r\n  \x1B[93m[koot/server]\x1B[0m initializing..."); // const { before: serverBefore, after: serverAfter } = serverConfig;
  // 决定服务器启动端口
  // 如果端口不可用，取消启动流程

  /** @type {Number} 服务器启动端口 */

  var port = await validatePort();
  if (!port) throw new Error(errorMsg('VALIDATE_PORT', 'unavailable')); // 创建 Koa 实例 (app)

  /** @type {Koa} Koa 服务器实例 */

  var app = _libs_create_koa_app__WEBPACK_IMPORTED_MODULE_1___default()(); // 挂载中间件: 静态服务器

  app.use(staticMiddleware(function () {
    // if (typeof serverConfig.koaStatic === 'object')
    //     return serverConfig.koaStatic;
    // if (typeof serverConfig.static === 'object')
    //     return serverConfig.static;
    return {};
  }())); // 生命周期: 服务器启动前
  // if (typeof serverBefore === 'function') await serverBefore(app);
  // 生命周期: 服务器即将启动
  // if (typeof serverAfter === 'function') await serverAfter(app);
  // 启动服务器

  await new Promise(function (resolve) {
    app.listen(port);
    setTimeout(function () {
      console.log("\x1B[32m\u221A\x1B[0m " + "\x1B[93m[koot/server]\x1B[0m listening port \x1B[32m".concat(port, "\x1B[0m"));
      console.log(' ');
      return resolve();
    });
  }).catch(function (err) {
    if (err instanceof Error) err.message = errorMsg('KOA_APP_LAUNCH', err.message);
    throw err;
  });
};

startSPAServer().catch(function (err) {
  console.error(err);
}); //

/**
 * KOA 中间件: 静态资源
 * @param {Object} koaStaticConfig
 * @return {Function}
 */

var staticMiddleware = function staticMiddleware() {
  var koaStaticConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var dir = _utils_get_dist_path__WEBPACK_IMPORTED_MODULE_3___default()();
  var config = Object.assign({}, _defaults_koa_static__WEBPACK_IMPORTED_MODULE_2___default.a, koaStaticConfig); // console.log('koa-statc', {
  //     dir,
  //     config,
  //     koaStaticDefaults,
  //     koaStaticConfig
  // });

  return convert(koaStatic(dir, config));
};

/***/ }),

/***/ "./node_modules/koot/defaults/koa-static.js":
/*!**************************************************!*\
  !*** ./node_modules/koot/defaults/koa-static.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  maxage: 0,
  hidden: false,
  index: 'index.html',
  defer: false,
  gzip: true,
  extensions: false
};

/***/ }),

/***/ "./node_modules/koot/libs/create-koa-app.js":
/*!**************************************************!*\
  !*** ./node_modules/koot/libs/create-koa-app.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Koa = __webpack_require__(/*! koa */ "koa");

var helmet = __webpack_require__(/*! koa-helmet */ "koa-helmet");

var removeSlashes = __webpack_require__(/*! ./koa-middlewares/remove-slashes */ "./node_modules/koot/libs/koa-middlewares/remove-slashes.js");
/**
 * 创建 Koa App
 * @returns {Object} app
 */


var create = function create() {
  var app = new Koa();
  app.use(helmet());
  app.use(removeSlashes);
  return app;
};

module.exports = create;

/***/ }),

/***/ "./node_modules/koot/libs/error-msg.js":
/*!*********************************************!*\
  !*** ./node_modules/koot/libs/error-msg.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * 生成错误信息
 * @param {String} msg
 * @returns {String}
 */
var errorMsg = function errorMsg(type, msg) {
  if (typeof type === 'string' && typeof msg === 'string') return "".concat(type, "::").concat(msg);
  return type;
};

module.exports = errorMsg;

/***/ }),

/***/ "./node_modules/koot/libs/get-dir-dev-tmp.js":
/*!***************************************************!*\
  !*** ./node_modules/koot/libs/get-dir-dev-tmp.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! path */ "path");

var getCwd = __webpack_require__(/*! ../utils/get-cwd */ "./node_modules/koot/utils/get-cwd.js");
/**
 * _仅针对开发环境_ 获取开发环境临时目录
 * @param {String} [cwd]
 * @param {String} [type]
 * @returns {String} 如果提供 `type`，则返回对应类型的目录
 */


module.exports = function () {
  var cwd = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getCwd();
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return path.resolve(cwd, 'logs/dev', type ? ".".concat(type) : '');
};

/***/ }),

/***/ "./node_modules/koot/libs/get-free-port.js":
/*!*************************************************!*\
  !*** ./node_modules/koot/libs/get-free-port.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var portfinder = __webpack_require__(/*! portfinder */ "portfinder");
/**
 * 获取可用端口
 * @async
 * @param {Number|Number[]|Object} 正在使用、被占用或保留的端口
 * @returns {Number}
 */


module.exports = async function (portUsed) {
  var portStart = 3000;
  var portEnd = 65535;
  /** @type {Array[]} 使用 portfinder 检查的端口号范围组 */

  var ranges = [[portStart, portEnd]]; // console.log('portUsed', portUsed)

  /** @type {Number[]} 忽略的端口号 */

  var portsIgnore = [];

  if (isNumber(portUsed)) {
    portsIgnore.push(parseInt(portUsed));
  } else if (Array.isArray(portUsed)) {
    portUsed.filter(function (value) {
      return isNumber(value);
    }).forEach(function (port) {
      return portsIgnore.push(parseInt(port));
    });
  } else if (_typeof(portUsed) === 'object') {
    Object.values(portUsed).filter(function (value) {
      return isNumber(value);
    }).forEach(function (port) {
      return portsIgnore.push(parseInt(port));
    });
  } // console.log('portsIgnore', portsIgnore)
  // 如果存在忽略的端口号，修改 ranges 为多组模式


  if (portsIgnore.length) {
    ranges.shift();
    var lastPort = portStart;
    portsIgnore.forEach(function (port) {
      ranges.push([lastPort, port - 1]);
      lastPort = port;
    });
  } // console.log('ranges', ranges)


  for (var _i = 0, _ranges = ranges; _i < _ranges.length; _i++) {
    var _ranges$_i = _slicedToArray(_ranges[_i], 2),
        start = _ranges$_i[0],
        end = _ranges$_i[1];

    var result = await getFreePort(start, end); // console.log(result)

    if (result) return result;
  }
};

var isNumber = function isNumber(value) {
  return Boolean(typeof value === 'number' || !isNaN(value));
};
/**
 * 获取范围内可用的端口
 * @param {Number} start 
 * @param {Number} end 
 * @returns {Number}
 */


var getFreePort = async function getFreePort(start, end) {
  return portfinder.getPortPromise({
    port: start,
    // minimum port
    stopPort: end // maximum port

  }).then(function (port) {
    //
    // `port` is guaranteed to be a free port
    // in this scope.
    //
    return port;
  }).catch(function ()
  /*err*/
  {//
    // Could not get a free port, `err` contains the reason.
    //
  });
};

/***/ }),

/***/ "./node_modules/koot/libs/koa-middlewares/remove-slashes.js":
/*!******************************************************************!*\
  !*** ./node_modules/koot/libs/koa-middlewares/remove-slashes.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * KOA 中间件: 移除 URL 起始部分的多余斜线
 * @param {Object} koaStaticConfig
 * @return {Function}
 */
var removeSlashesMiddleware = async function removeSlashesMiddleware(ctx, next) {
  if (/^\/{2}/.test(ctx.url)) {
    return ctx.redirect(ctx.origin + ctx.url.replace(/^\/{2}/, '/'));
  }

  await next();
};

module.exports = removeSlashesMiddleware;

/***/ }),

/***/ "./node_modules/koot/libs/validate-port.js":
/*!*************************************************!*\
  !*** ./node_modules/koot/libs/validate-port.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var fs = __webpack_require__(/*! fs-extra */ "fs-extra");

var isPortReachable = __webpack_require__(/*! is-port-reachable */ "is-port-reachable");

var inquirer = __webpack_require__(/*! inquirer */ "inquirer"); // const osLocale = require('os-locale')


var getPathnameDevServerStart = __webpack_require__(/*! ../utils/get-pathname-dev-server-start */ "./node_modules/koot/utils/get-pathname-dev-server-start.js");

var getFreePort = __webpack_require__(/*! ./get-free-port */ "./node_modules/koot/libs/get-free-port.js");
/**
 * @async
 * @returns {Number|Boolean} 如果最终没有结果，返回 false，否则返回可用的端口数
 */


var doValidatePort = async function doValidatePort() {
  // [开发环境] 如果 flag 文件中写有端口，直接使用该端口
  if (false) { var infos; } // const locale = osLocale.sync()
  // console.log('locale', locale)
  // 如果环境变量中不存在 SERVER_PORT 同时全局变量 __SERVER_PORT__ 存在可用值，赋值环境变量
  // __SERVER_PORT__ 为 webpack 打包时使用 definePlugin 替换入的全局变量值


  if (typeof process.env.SERVER_PORT === 'undefined' && "string" !== 'undefined') process.env.SERVER_PORT = "8081";
  /** @type {Boolean} 环境变量 SERVER_PORT 的端口号是否可用 */

  var isPortInEnvFree = await isPortFree(process.env.SERVER_PORT); // 如果可用，返回该端口号，结束

  if (isPortInEnvFree) return process.env.SERVER_PORT; // 如果不可用，输出日志

  logPortTaken(process.env.SERVER_PORT); // [开发环境] 修改 flag 文件，标记端口被占用，并结束

  if (false) {}
  /** @type {Boolean} 端口是否被占用 */


  var isPortTaken = true;
  /** @type {Number} 端口结果 */

  var port;

  while (isPortTaken) {
    var askForPort = await inquirer.prompt([{
      type: 'input',
      name: 'port',
      message: 'Please input a new port number (leave empty for cancel)',
      validate: function validate(input) {
        if (!input) return true;
        if (isNaN(input)) return 'Must be a number or null';
        return true;
      }
    }]);

    if (!askForPort.port) {
      isPortTaken = false;
      port = undefined;
    } else {
      port = await isPortFree(askForPort.port);
      isPortTaken = !port ? true : false;
      if (isPortTaken) logPortTaken(askForPort.port);
    }
  }

  if (port) return port;
  return false;
};
/**
 * 验证目标端口是否可用
 * @async
 * @param {Number|String} port
 * @returns {Number|Boolean} 如果端口可用，返回该端口；如果不可用，返回 false
 */


var isPortFree = async function isPortFree(port) {
  var isPortOpen = !(await isPortReachable(port));
  if (isPortOpen) return port;
  return false;
};
/**
 * log: 目标端口被占用
 * @param {Number|String} port
 */


var logPortTaken = function logPortTaken(port) {
  console.log("\x1B[31m\xD7\x1B[0m " + "\x1B[93m[koot/server]\x1B[0m port \x1B[32m".concat(port, "\x1B[0m has been taken."));
};
/**
 * 验证服务器启动端口
 *
 * 依次检查以下变量/常量，当发现可用值时进入下一步
 * - `__SERVER_PORT__`
 * - `process.env.SERVER_PORT`
 *
 * 检查设定好的端口号是否可用
 * - 如果可用，直接返回结果
 * - 如果不可用，提示下一步操作
 * - 如果不可用同时之后的操作取消，返回 false
 *
 * _生产环境_
 * 设定环境变量
 * - `SERVER_PORT` -> 指定的端口
 *
 * _开发环境_
 * 设定环境变量
 * - `SERVER_PORT` -> 随机端口
 * - `SERVER_PORT_DEV_MAIN` -> 指定的端口
 *
 * @async
 * @returns {Number|Boolean} 如果最终没有结果，返回 false，否则返回可用的端口数
 */


var validatePort = async function validatePort() {
  var port = await doValidatePort();
  if (!port) return false;

  if (false) { var portFree; }

  return port;
}; // export default validatePort;


module.exports = validatePort;

/***/ }),

/***/ "./node_modules/koot/utils/get-cwd.js":
/*!********************************************!*\
  !*** ./node_modules/koot/utils/get-cwd.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * 获取运行目录
 * @returns {String}
 */
module.exports = function () {
  // console.log('process.env.KOOT_CWD', process.env.KOOT_CWD)
  // console.log('process.cwd()', process.cwd())
  return typeof process.env.KOOT_CWD === 'string' ? process.env.KOOT_CWD : process.cwd();
};

/***/ }),

/***/ "./node_modules/koot/utils/get-dist-path.js":
/*!**************************************************!*\
  !*** ./node_modules/koot/utils/get-dist-path.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fs = __webpack_require__(/*! fs-extra */ "fs-extra");

var path = __webpack_require__(/*! path */ "path");

var getCwd = __webpack_require__(/*! ./get-cwd */ "./node_modules/koot/utils/get-cwd.js");

var p;
/**
 * 获取打包结果路径
 * @returns {String} 打包结果路径 (硬盘绝对路径)
 */

module.exports = function () {
  // console.log('global.KOOT_DIST_DIR', global.KOOT_DIST_DIR)
  if (typeof p !== 'string') {
    p = typeof global.KOOT_DIST_DIR === 'string' ? global.KOOT_DIST_DIR : function () {
      var cwd = getCwd();
      var parent = path.resolve(cwd, '..');
      var result = path.resolve(cwd, "dist");

      while (!fs.existsSync(result) && cwd !== parent) {
        cwd = parent;
        parent = path.resolve(cwd, '..');
        result = path.resolve(cwd, "dist");
      }

      if (fs.existsSync(result)) return result;
      return path.resolve(cwd, "dist");
    }();
  }

  return p;
};

/***/ }),

/***/ "./node_modules/koot/utils/get-pathname-dev-server-start.js":
/*!******************************************************************!*\
  !*** ./node_modules/koot/utils/get-pathname-dev-server-start.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! path */ "path");

var getDirDevTmp = __webpack_require__(/*! ../libs/get-dir-dev-tmp */ "./node_modules/koot/libs/get-dir-dev-tmp.js");

module.exports = function (cwd) {
  return path.resolve(getDirDevTmp(cwd), '.server-start');
};

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
( false ? undefined : _typeof(module)) === "object" ? module.exports : {});

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./node_modules/koot/ReactSPA/server ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\@diablohu\2020-japan-tour.diablohu.com\node_modules\koot\ReactSPA\server */"./node_modules/koot/ReactSPA/server/index.js");


/***/ }),

/***/ "fs-extra":
/*!***************************!*\
  !*** external "fs-extra" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),

/***/ "inquirer":
/*!***************************!*\
  !*** external "inquirer" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inquirer");

/***/ }),

/***/ "is-port-reachable":
/*!************************************!*\
  !*** external "is-port-reachable" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("is-port-reachable");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),

/***/ "koa-convert":
/*!******************************!*\
  !*** external "koa-convert" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-convert");

/***/ }),

/***/ "koa-helmet":
/*!*****************************!*\
  !*** external "koa-helmet" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-helmet");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-static");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "portfinder":
/*!*****************************!*\
  !*** external "portfinder" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("portfinder");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map