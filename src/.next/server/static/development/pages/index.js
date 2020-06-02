module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prismic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../prismic */ \"./prismic.ts\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (class extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  static async getInitialProps({\n    req,\n    res,\n    query,\n    pathname\n  }) {\n    try {\n      console.log(query.language);\n      const home = await Object(_prismic__WEBPACK_IMPORTED_MODULE_1__[\"Client\"])(req).getSingle('homepage', {\n        lang: query.language\n      });\n      const pageURL = req ? req.protocol + '://' + req.headers.host + req.url : window.location.origin + pathname;\n\n      if (!home) {\n        res.statusCode = 404;\n        const error = {\n          statusCode: 404\n        };\n        return {\n          error\n        };\n      }\n\n      return {\n        home,\n        pageURL\n      };\n    } catch (error) {\n      return {\n        error: true\n      };\n    }\n  }\n\n  render() {\n    return __jsx(\"div\", null, \"index.html\", console.log(this.props));\n  }\n\n}); // const Index = (props: any) => {\n//     return (\n//         <div>\n//             index.html\n//         </div>\n//     )\n// };\n// Index.getInitialProps = async ({ req, res, query, pathname }: { req: IncomingMessage, res: any, query: any, pathname: string })  => {\n//     console.log(\"ELO\")\n//     try {\n//         const home = await Client(req).getSingle('homepage', { lang: query.language });\n//         const pageURL = req ? req.protocol + '://' + req.headers.host + req.url : window.location.origin + pathname;\n//         if (!home) {\n//             res.statusCode = 404;\n//             const error = {\n//                 statusCode: 404\n//             };\n//             return { error }\n//         }\n//         console.log(home)\n//         return { home, pageURL };\n//     } catch (error) {\n//         return { error: true };\n//     }\n// }\n// export default Index;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsInJlcSIsInJlcyIsInF1ZXJ5IiwicGF0aG5hbWUiLCJjb25zb2xlIiwibG9nIiwibGFuZ3VhZ2UiLCJob21lIiwiQ2xpZW50IiwiZ2V0U2luZ2xlIiwibGFuZyIsInBhZ2VVUkwiLCJwcm90b2NvbCIsImhlYWRlcnMiLCJob3N0IiwidXJsIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJzdGF0dXNDb2RlIiwiZXJyb3IiLCJyZW5kZXIiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVBO0FBRWUsNkVBQWNBLDRDQUFLLENBQUNDLFNBQXBCLENBQThGO0FBRTVHLGVBQWFDLGVBQWIsQ0FBNkI7QUFBRUMsT0FBRjtBQUFPQyxPQUFQO0FBQVlDLFNBQVo7QUFBbUJDO0FBQW5CLEdBQTdCLEVBQThIO0FBQzdILFFBQUk7QUFDTUMsYUFBTyxDQUFDQyxHQUFSLENBQVlILEtBQUssQ0FBQ0ksUUFBbEI7QUFDVCxZQUFNQyxJQUFJLEdBQUcsTUFBTUMsdURBQU0sQ0FBQ1IsR0FBRCxDQUFOLENBQVlTLFNBQVosQ0FBc0IsVUFBdEIsRUFBa0M7QUFBRUMsWUFBSSxFQUFFUixLQUFLLENBQUNJO0FBQWQsT0FBbEMsQ0FBbkI7QUFFQSxZQUFNSyxPQUFPLEdBQUdYLEdBQUcsR0FBR0EsR0FBRyxDQUFDWSxRQUFKLEdBQWUsS0FBZixHQUF1QlosR0FBRyxDQUFDYSxPQUFKLENBQVlDLElBQW5DLEdBQTBDZCxHQUFHLENBQUNlLEdBQWpELEdBQXVEQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCLEdBQXlCZixRQUFuRzs7QUFFQSxVQUFJLENBQUNJLElBQUwsRUFBVztBQUNWTixXQUFHLENBQUNrQixVQUFKLEdBQWlCLEdBQWpCO0FBRUEsY0FBTUMsS0FBSyxHQUFHO0FBQ2JELG9CQUFVLEVBQUU7QUFEQyxTQUFkO0FBSUEsZUFBTztBQUFFQztBQUFGLFNBQVA7QUFDQTs7QUFFRCxhQUFPO0FBQUViLFlBQUY7QUFBUUk7QUFBUixPQUFQO0FBQ0EsS0FqQkQsQ0FpQkUsT0FBT1MsS0FBUCxFQUFjO0FBQ2YsYUFBTztBQUFFQSxhQUFLLEVBQUU7QUFBVCxPQUFQO0FBQ0E7QUFDRDs7QUFFREMsUUFBTSxHQUFHO0FBQ0YsV0FDQSxpQ0FFS2pCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtpQixLQUFqQixDQUZMLENBREE7QUFNTjs7QUFoQzJHLEMsR0FtQzdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlIH0gZnJvbSAnaHR0cCc7XG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tICcuLi9wcmlzbWljJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8eyBob21lOiBhbnksIGNvbmZpZ3VyYXRpb246IGFueSwgcGFnZVVSTDogc3RyaW5nLCBlcnJvcjogYW55IH0+IHtcblxuXHRzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxLCByZXMsIHF1ZXJ5LCBwYXRobmFtZSB9OiB7IHJlcTogSW5jb21pbmdNZXNzYWdlLCByZXM6IGFueSwgcXVlcnk6IGFueSwgcGF0aG5hbWU6IHN0cmluZyB9KSB7XG5cdFx0dHJ5IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHF1ZXJ5Lmxhbmd1YWdlKVxuXHRcdFx0Y29uc3QgaG9tZSA9IGF3YWl0IENsaWVudChyZXEpLmdldFNpbmdsZSgnaG9tZXBhZ2UnLCB7IGxhbmc6IHF1ZXJ5Lmxhbmd1YWdlIH0pO1xuXG5cdFx0XHRjb25zdCBwYWdlVVJMID0gcmVxID8gcmVxLnByb3RvY29sICsgJzovLycgKyByZXEuaGVhZGVycy5ob3N0ICsgcmVxLnVybCA6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyBwYXRobmFtZTtcblxuXHRcdFx0aWYgKCFob21lKSB7XG5cdFx0XHRcdHJlcy5zdGF0dXNDb2RlID0gNDA0O1xuXG5cdFx0XHRcdGNvbnN0IGVycm9yID0ge1xuXHRcdFx0XHRcdHN0YXR1c0NvZGU6IDQwNFxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdHJldHVybiB7IGVycm9yIH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHsgaG9tZSwgcGFnZVVSTCB9O1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRyZXR1cm4geyBlcnJvcjogdHJ1ZSB9O1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIGluZGV4Lmh0bWxcbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnByb3BzKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG5cdH1cbn1cblxuLy8gY29uc3QgSW5kZXggPSAocHJvcHM6IGFueSkgPT4ge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDxkaXY+XG4vLyAgICAgICAgICAgICBpbmRleC5odG1sXG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgIClcbi8vIH07XG5cbi8vIEluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHJlcSwgcmVzLCBxdWVyeSwgcGF0aG5hbWUgfTogeyByZXE6IEluY29taW5nTWVzc2FnZSwgcmVzOiBhbnksIHF1ZXJ5OiBhbnksIHBhdGhuYW1lOiBzdHJpbmcgfSkgID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhcIkVMT1wiKVxuLy8gICAgIHRyeSB7XG4vLyAgICAgICAgIGNvbnN0IGhvbWUgPSBhd2FpdCBDbGllbnQocmVxKS5nZXRTaW5nbGUoJ2hvbWVwYWdlJywgeyBsYW5nOiBxdWVyeS5sYW5ndWFnZSB9KTtcblxuLy8gICAgICAgICBjb25zdCBwYWdlVVJMID0gcmVxID8gcmVxLnByb3RvY29sICsgJzovLycgKyByZXEuaGVhZGVycy5ob3N0ICsgcmVxLnVybCA6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyBwYXRobmFtZTtcblxuLy8gICAgICAgICBpZiAoIWhvbWUpIHtcbi8vICAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNDA0O1xuXG4vLyAgICAgICAgICAgICBjb25zdCBlcnJvciA9IHtcbi8vICAgICAgICAgICAgICAgICBzdGF0dXNDb2RlOiA0MDRcbi8vICAgICAgICAgICAgIH07XG5cbi8vICAgICAgICAgICAgIHJldHVybiB7IGVycm9yIH1cbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGhvbWUpXG5cbi8vICAgICAgICAgcmV0dXJuIHsgaG9tZSwgcGFnZVVSTCB9O1xuLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgICAgIHJldHVybiB7IGVycm9yOiB0cnVlIH07XG4vLyAgICAgfVxuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./prismic-configuration.json":
/*!************************************!*\
  !*** ./prismic-configuration.json ***!
  \************************************/
/*! exports provided: apiEndpoint, accessToken, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"apiEndpoint\\\":\\\"https://itberries.cdn.prismic.io/api/v2\\\",\\\"accessToken\\\":\\\"\\\"}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3ByaXNtaWMtY29uZmlndXJhdGlvbi5qc29uLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./prismic-configuration.json\n");

/***/ }),

/***/ "./prismic.ts":
/*!********************!*\
  !*** ./prismic.ts ***!
  \********************/
/*! exports provided: Client, Prismic, linkResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Client\", function() { return Client; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Prismic\", function() { return Prismic; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"linkResolver\", function() { return linkResolver; });\n/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prismic-javascript */ \"prismic-javascript\");\n/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prismic_javascript__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prismic_configuration_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prismic-configuration.json */ \"./prismic-configuration.json\");\nvar _prismic_configuration_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./prismic-configuration.json */ \"./prismic-configuration.json\", 1);\n/* harmony import */ var _routing_configuration_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routing-configuration.json */ \"./routing-configuration.json\");\nvar _routing_configuration_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./routing-configuration.json */ \"./routing-configuration.json\", 1);\n\n\n\nconst Client = (req = null) => {\n  const options = {\n    req: req,\n    accessToken: _prismic_configuration_json__WEBPACK_IMPORTED_MODULE_1__.accessToken\n  };\n  return Prismic.client(_prismic_configuration_json__WEBPACK_IMPORTED_MODULE_1__.apiEndpoint, options);\n};\nconst Prismic = prismic_javascript__WEBPACK_IMPORTED_MODULE_0___default.a;\nconst linkResolver = (doc, context) => {\n  const page = _routing_configuration_json__WEBPACK_IMPORTED_MODULE_2__[context ? `${doc.type}/${context}` : doc.type];\n\n  if (page) {\n    let pageRoute = page.languages[doc.lang];\n    let uid = doc.uid || '';\n    let segment = pageRoute.segment ? pageRoute.segment + '/' : '';\n    let suffix = pageRoute.suffix ? '/' + pageRoute.suffix : '';\n    return '/' + doc.lang + '/' + segment + uid + suffix;\n  } else {\n    return '/';\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmlzbWljLnRzP2RmZDUiXSwibmFtZXMiOlsiQ2xpZW50IiwicmVxIiwib3B0aW9ucyIsImFjY2Vzc1Rva2VuIiwiUHJpc21pY0NvbmZpZyIsIlByaXNtaWMiLCJjbGllbnQiLCJhcGlFbmRwb2ludCIsIlByaXNtaWNMaWIiLCJsaW5rUmVzb2x2ZXIiLCJkb2MiLCJjb250ZXh0IiwicGFnZSIsIlJvdXRpbmdDb25maWciLCJ0eXBlIiwicGFnZVJvdXRlIiwibGFuZ3VhZ2VzIiwibGFuZyIsInVpZCIsInNlZ21lbnQiLCJzdWZmaXgiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBRVEsTUFBT0EsTUFBTSxHQUFJLENBQUNDLEdBQTRCLEdBQUksSUFBakMsS0FBMEM7QUFDL0QsUUFBTUMsT0FBTyxHQUFHO0FBQ2xCRCxPQUFHLEVBQUVBLEdBRGE7QUFFbEJFLGVBQVcsRUFBRUMsd0RBQWEsQ0FBQ0Q7QUFGVCxHQUFoQjtBQUtILFNBQVFFLE9BQU8sQ0FBQ0MsTUFBUixDQUFlRix3REFBYSxDQUFDRyxXQUE3QixFQUEwQ0wsT0FBMUMsQ0FBUjtBQUNBLENBUE87QUFTRCxNQUFNRyxPQUFPLEdBQUdHLHlEQUFoQjtBQUVBLE1BQU1DLFlBQVksR0FBRyxDQUFDQyxHQUFELEVBQWtFQyxPQUFsRSxLQUF3RjtBQUNoSCxRQUFNQyxJQUFTLEdBQUdDLHdEQUFhLENBQUNGLE9BQU8sR0FBSSxHQUFFRCxHQUFHLENBQUNJLElBQUssSUFBR0gsT0FBUSxFQUExQixHQUE4QkQsR0FBRyxDQUFDSSxJQUExQyxDQUEvQjs7QUFFSCxNQUFJRixJQUFKLEVBQVU7QUFDVCxRQUFJRyxTQUFTLEdBQUdILElBQUksQ0FBQ0ksU0FBTCxDQUFlTixHQUFHLENBQUNPLElBQW5CLENBQWhCO0FBQ0EsUUFBSUMsR0FBRyxHQUFHUixHQUFHLENBQUNRLEdBQUosSUFBVyxFQUFyQjtBQUNBLFFBQUlDLE9BQU8sR0FBR0osU0FBUyxDQUFDSSxPQUFWLEdBQW9CSixTQUFTLENBQUNJLE9BQVYsR0FBb0IsR0FBeEMsR0FBOEMsRUFBNUQ7QUFDQSxRQUFJQyxNQUFNLEdBQUdMLFNBQVMsQ0FBQ0ssTUFBVixHQUFtQixNQUFNTCxTQUFTLENBQUNLLE1BQW5DLEdBQTRDLEVBQXpEO0FBRUEsV0FBTyxNQUFNVixHQUFHLENBQUNPLElBQVYsR0FBaUIsR0FBakIsR0FBdUJFLE9BQXZCLEdBQWlDRCxHQUFqQyxHQUF1Q0UsTUFBOUM7QUFDQSxHQVBELE1BT087QUFDTixXQUFPLEdBQVA7QUFDQTtBQUNELENBYk0iLCJmaWxlIjoiLi9wcmlzbWljLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICBQcmlzbWljTGliICBmcm9tICAncHJpc21pYy1qYXZhc2NyaXB0J1xuaW1wb3J0ICBQcmlzbWljQ29uZmlnICBmcm9tICAnLi9wcmlzbWljLWNvbmZpZ3VyYXRpb24uanNvbidcbmltcG9ydCB7IEluY29taW5nTWVzc2FnZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBDb250ZW50RG9jdW1lbnRUeXBlIH0gZnJvbSAnLi9Db250ZW50RG9jdW1lbnRUeXBlJztcbmltcG9ydCBSb3V0aW5nQ29uZmlnIGZyb20gJy4vcm91dGluZy1jb25maWd1cmF0aW9uLmpzb24nO1xuXG5leHBvcnQgIGNvbnN0ICBDbGllbnQgID0gKHJlcSA6IEluY29taW5nTWVzc2FnZSB8IG51bGwgPSAgbnVsbCkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG5cdFx0cmVxOiByZXEsXG5cdFx0YWNjZXNzVG9rZW46IFByaXNtaWNDb25maWcuYWNjZXNzVG9rZW5cbiAgICB9O1xuICAgIFxuXHRyZXR1cm4gIFByaXNtaWMuY2xpZW50KFByaXNtaWNDb25maWcuYXBpRW5kcG9pbnQsIG9wdGlvbnMpXG59XG5cbmV4cG9ydCBjb25zdCBQcmlzbWljID0gUHJpc21pY0xpYjtcblxuZXhwb3J0IGNvbnN0IGxpbmtSZXNvbHZlciA9IChkb2MgOiB7IHR5cGUgOiBDb250ZW50RG9jdW1lbnRUeXBlLCB1aWQ6IHN0cmluZywgbGFuZzogc3RyaW5nIH0sIGNvbnRleHQ/IDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcGFnZTogYW55ID0gUm91dGluZ0NvbmZpZ1tjb250ZXh0ID8gYCR7ZG9jLnR5cGV9LyR7Y29udGV4dH1gIDogZG9jLnR5cGVdO1xuXG5cdGlmIChwYWdlKSB7XG5cdFx0bGV0IHBhZ2VSb3V0ZSA9IHBhZ2UubGFuZ3VhZ2VzW2RvYy5sYW5nXTtcblx0XHRsZXQgdWlkID0gZG9jLnVpZCB8fCAnJztcblx0XHRsZXQgc2VnbWVudCA9IHBhZ2VSb3V0ZS5zZWdtZW50ID8gcGFnZVJvdXRlLnNlZ21lbnQgKyAnLycgOiAnJztcblx0XHRsZXQgc3VmZml4ID0gcGFnZVJvdXRlLnN1ZmZpeCA/ICcvJyArIHBhZ2VSb3V0ZS5zdWZmaXggOiAnJztcblxuXHRcdHJldHVybiAnLycgKyBkb2MubGFuZyArICcvJyArIHNlZ21lbnQgKyB1aWQgKyBzdWZmaXg7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuICcvJztcblx0fVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./prismic.ts\n");

/***/ }),

/***/ "./routing-configuration.json":
/*!************************************!*\
  !*** ./routing-configuration.json ***!
  \************************************/
/*! exports provided: homepage, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"homepage\\\":{\\\"page\\\":\\\"index\\\",\\\"languages\\\":{\\\"pl\\\":{\\\"pattern\\\":\\\"/:language(pl)\\\",\\\"segment\\\":\\\"\\\"},\\\"en\\\":{\\\"pattern\\\":\\\"/:language(en)\\\",\\\"segment\\\":\\\"\\\"}}}}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3JvdXRpbmctY29uZmlndXJhdGlvbi5qc29uLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./routing-configuration.json\n");

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/matthew/Documents/ITBERRIES/src/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "prismic-javascript":
/*!*************************************!*\
  !*** external "prismic-javascript" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prismic-javascript\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcmlzbWljLWphdmFzY3JpcHRcIj83OGYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InByaXNtaWMtamF2YXNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByaXNtaWMtamF2YXNjcmlwdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prismic-javascript\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });