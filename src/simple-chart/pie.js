(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["simple-chart"] = factory();
	else
		root["simple-chart"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/example/pie.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/chart/chart.ts":
/*!****************************!*\
  !*** ./app/chart/chart.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __read = (this && this.__read) || function (o, n) {\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\n    if (!m) return o;\n    var i = m.call(o), r, ar = [], e;\n    try {\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\n    }\n    catch (error) { e = { error: error }; }\n    finally {\n        try {\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\n        }\n        finally { if (e) throw e.error; }\n    }\n    return ar;\n};\nvar __spread = (this && this.__spread) || function () {\n    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));\n    return ar;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar index_1 = __webpack_require__(/*! ./shape/index */ \"./app/chart/shape/index.ts\");\nvar tool_1 = __webpack_require__(/*! ../utils/tool */ \"./app/utils/tool.ts\");\nvar Chart = (function () {\n    function Chart() {\n        this.recoverShapes = [];\n        this.legends = [];\n        this.style = {\n            colors: ['#f2711c', '#fbbd08', '#b5cc18', '#21ba45', '#00b5ad', '#2185d0', '#6435c9', '#a333c8', '#e03997', '#a5673f'],\n            font: '12px sans-serif',\n            legend: {\n                orient: 'horizontal',\n                position: ['left', 'top']\n            },\n            nameStyle: '{a}%',\n            valueStyle: '{c}%'\n        };\n        this.padding = [40, 20, 40, 60];\n    }\n    Chart.prototype.initStyle = function () {\n        if (this.option.style) {\n            this.style = Object.assign(this.style, this.option.style);\n            if (this.option.style.legend) {\n                this.style.legend = Object.assign(this.style.legend, this.option.style.legend);\n            }\n        }\n    };\n    Chart.prototype.precentToFloat = function (value) {\n        return parseInt(value.slice(0, -1)) / 100;\n    };\n    Chart.prototype.initLegend = function () {\n        var _this = this;\n        var option = this.option;\n        if (!option.legend || !option.style.legend) {\n            return false;\n        }\n        this.legends = this.option.legend.map(function (name, index) {\n            var legend = new index_1.Legend();\n            legend.stage2d = _this.stage2d;\n            legend.chart2d = _this;\n            legend.name = name;\n            legend.shape = _this.shapes[index];\n            legend.pattern = option.style.colors[index];\n            legend.mouseOverPattern = tool_1.lighten(option.style.colors[index]);\n            return legend;\n        });\n    };\n    Chart.prototype.setLegend = function (context) {\n        var _a, _b;\n        var legend = (_b = (_a = this.option) === null || _a === void 0 ? void 0 : _a.style) === null || _b === void 0 ? void 0 : _b.legend;\n        if (!legend) {\n            return false;\n        }\n        var _c = this.option.style.legend, orient = _c.orient, position = _c.position;\n        var xIncrement = 0, yIncrement = 0;\n        this.legends.forEach(function (legend) {\n            var measure = context.measureText(legend.name);\n            legend.width = measure.width + 24;\n            legend.x = xIncrement;\n            legend.y = yIncrement;\n            if (orient === 'vertical') {\n                yIncrement += measure.actualBoundingBoxRight;\n            }\n            else {\n                xIncrement += legend.width;\n            }\n        });\n        var _d = __read(position || ['left', 'top'], 2), offsetX = _d[0], offsetY = _d[1];\n        switch (offsetX) {\n            case 'left':\n                offsetX = 0;\n                break;\n            case 'center':\n                offsetX = (this.stage2d.width / 2) - (xIncrement / 2);\n                break;\n            case 'right':\n                offsetX = this.stage2d.width - xIncrement;\n                break;\n            default:\n                offsetX = 0;\n                break;\n        }\n        switch (offsetY) {\n            case 'top':\n                offsetY = 20;\n                break;\n            case 'center':\n                offsetY = (this.stage2d.height / 2) - (yIncrement / 2);\n                break;\n            case 'bottom':\n                offsetY = this.stage2d.height - yIncrement - 10;\n                break;\n            default:\n                offsetY = 20;\n                break;\n        }\n        this.legends.forEach(function (legend) {\n            legend.x = legend.x + offsetX;\n            legend.y = legend.y + offsetY;\n        });\n    };\n    Chart.prototype.paint = function () {\n        var _this = this;\n        var scene = this.stage2d.getScene();\n        scene.initContext(this.option.style);\n        this.setLegend(scene.context);\n        console.log(\"this.shapes\", this.shapes);\n        scene.paint(function () {\n            _this.shapes.forEach(function (shape) {\n                shape.paint(scene.context);\n            });\n            _this.legends.forEach(function (legend) {\n                legend.paint(scene.context);\n            });\n        });\n    };\n    Chart.prototype.paintAxis = function () {\n        console.log(\"222\", 222);\n        var option = this.option;\n        var axis = new index_1.Axis();\n        console.log(\"axis\", axis);\n        axis.width = this.stage2d.width - this.padding[1] - this.padding[3];\n        axis.height = this.stage2d.height - this.padding[0] - this.padding[2];\n        axis.x = this.padding[3];\n        axis.y = this.padding[0];\n        axis.xLabel = option.xAxis.data;\n        var flatValues = option.data.flat();\n        var maxValue = Math.max.apply(null, flatValues);\n        var minValue = Math.min.apply(Math, __spread(flatValues));\n        axis.yLabel = this.getScaleMark(maxValue, minValue);\n        var scene = this.stage2d.getScene();\n        scene.initContext(this.option.style);\n        scene.paintOnce(function () {\n            axis.paint(scene.context);\n        });\n        return [axis.yLabel[0], axis.yLabel[axis.yLabel.length - 1]];\n    };\n    Chart.prototype.getScaleMark = function (max, min) {\n        var power = -6;\n        var absMax = Math.max(Math.abs(max - min), max);\n        while (absMax > Math.pow(10, power)) {\n            power += 1;\n        }\n        var part = Math.pow(10, power - 1);\n        if (max < Math.pow(10, power - 1) * 3) {\n            part = part / 2;\n        }\n        if (max > Math.pow(10, power - 1) * 6) {\n            part = part * 2;\n        }\n        var floor = 0;\n        if (min < 0) {\n            while (floor > min) {\n                floor -= part;\n            }\n        }\n        var scaleMark = [floor];\n        while (floor < max) {\n            floor += part;\n            scaleMark.push(Math.round(floor * 100000) / 100000);\n        }\n        return scaleMark;\n    };\n    Chart.prototype.addRecoverShapes = function (shape, props) {\n        this.recoverShapes.push({\n            shape: shape,\n            props: props\n        });\n    };\n    Chart.prototype.recover = function () {\n        this.recoverShapes.forEach(function (v) {\n            v.shape.animate(v.props);\n        });\n        this.recoverShapes = [];\n    };\n    return Chart;\n}());\nexports.default = Chart;\n\n\n//# sourceURL=webpack://simple-chart/./app/chart/chart.ts?");

/***/ }),

/***/ "./app/chart/chartBar.ts":
/*!*******************************!*\
  !*** ./app/chart/chartBar.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __read = (this && this.__read) || function (o, n) {\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\n    if (!m) return o;\n    var i = m.call(o), r, ar = [], e;\n    try {\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\n    }\n    catch (error) { e = { error: error }; }\n    finally {\n        try {\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\n        }\n        finally { if (e) throw e.error; }\n    }\n    return ar;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar chart_1 = __importDefault(__webpack_require__(/*! ./chart */ \"./app/chart/chart.ts\"));\nvar index_1 = __webpack_require__(/*! ./shape/index */ \"./app/chart/shape/index.ts\");\nvar tool_1 = __webpack_require__(/*! ../utils/tool */ \"./app/utils/tool.ts\");\nvar ChartBar = (function (_super) {\n    __extends(ChartBar, _super);\n    function ChartBar(option, stage2d) {\n        var _this = _super.call(this) || this;\n        _this.option = option;\n        _this.stage2d = stage2d;\n        _this.initOptions();\n        return _this;\n    }\n    ChartBar.prototype.initOptions = function () {\n        var _this = this;\n        this.initStyle();\n        var _a = this, option = _a.option, stage2d = _a.stage2d, style = _a.style;\n        if (option.padding) {\n            this.padding = option.padding;\n        }\n        console.log(\"111\", 111);\n        var _b = __read(this.paintAxis(), 2), floor = _b[0], ceil = _b[1];\n        this.shapes = [];\n        if (option.data && option.data.length) {\n            var width = this.stage2d.width - this.padding[1] - this.padding[3];\n            var height_1 = this.stage2d.height - this.padding[0] - this.padding[2];\n            var groupPartWidth_1 = width / option.data.length;\n            var createBar_1 = function (value, index, groupIndex, groupLength) {\n                var shape = new index_1.Bar();\n                shape.stage2d = _this.stage2d;\n                shape.chart2d = _this;\n                var partWidth = groupPartWidth_1 / groupLength * 0.8;\n                console.log(\"height, value, ceil, floor\", height_1, value, ceil, floor);\n                shape.height = (value - floor) / (ceil - floor) * height_1;\n                shape.width = partWidth * 0.8;\n                shape.x = (partWidth * groupIndex) + (partWidth * 0.1) + (groupPartWidth_1 * index) + _this.padding[3] + (groupPartWidth_1 / groupLength * 0.1);\n                shape.y = height_1 - shape.height + _this.padding[0];\n                shape.pattern = style.colors[groupIndex];\n                shape.mouseOverPattern = tool_1.lighten(style.colors[groupIndex]);\n                shape.name = option.legend[groupIndex];\n                shape.value = value;\n                _this.shapes.push(shape);\n            };\n            option.data.forEach(function (item, index) {\n                if (typeof item === 'number') {\n                    createBar_1(item, index, index, 1);\n                }\n                else {\n                    item.forEach(function (v, i) {\n                        createBar_1(v, index, i, item.length);\n                    });\n                }\n            });\n        }\n        this.initLegend();\n    };\n    ChartBar.prototype.setPie = function () {\n    };\n    return ChartBar;\n}(chart_1.default));\nexports.default = ChartBar;\n\n\n//# sourceURL=webpack://simple-chart/./app/chart/chartBar.ts?");

/***/ }),

/***/ "./app/chart/chartPie.ts":
/*!*******************************!*\
  !*** ./app/chart/chartPie.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar chart_1 = __importDefault(__webpack_require__(/*! ./chart */ \"./app/chart/chart.ts\"));\nvar index_1 = __webpack_require__(/*! ./shape/index */ \"./app/chart/shape/index.ts\");\nvar tool_1 = __webpack_require__(/*! ../utils/tool */ \"./app/utils/tool.ts\");\nvar ChartPie = (function (_super) {\n    __extends(ChartPie, _super);\n    function ChartPie(option, stage2d) {\n        var _this = _super.call(this) || this;\n        _this.option = option;\n        _this.stage2d = stage2d;\n        _this.initOptions();\n        _this.setPie();\n        return _this;\n    }\n    ChartPie.prototype.initOptions = function () {\n        var _this = this;\n        this.initStyle();\n        var _a = this, option = _a.option, stage2d = _a.stage2d, style = _a.style;\n        if (typeof option.radius === 'undefined') {\n            option.radius = Math.round(Math.min(stage2d.width, stage2d.height) / 2 * 0.8);\n        }\n        else {\n            option.radius = Math.round(Math.min(stage2d.width, stage2d.height) / 2 * this.precentToFloat(option.radius));\n        }\n        if (typeof option.center === 'undefined') {\n            option.center = [Math.round(stage2d.width / 2), Math.round(stage2d.height / 2)];\n        }\n        else {\n            option.center[0] = Math.round(stage2d.width * this.precentToFloat(option.center[0]));\n            option.center[1] = Math.round(stage2d.height * this.precentToFloat(option.center[1]));\n        }\n        if (typeof option.legend === 'undefined') {\n            option.legend = option.data;\n        }\n        this.shapes = [];\n        if (option.data && option.data.length) {\n            option.data.forEach(function (item, index) {\n                var shape = new index_1.Pie();\n                shape.stage2d = _this.stage2d;\n                shape.chart2d = _this;\n                shape.x = option.center[0];\n                shape.y = option.center[1];\n                shape.originalX = option.center[0];\n                shape.originalY = option.center[1];\n                shape.pattern = style.colors[index];\n                shape.mouseOverPattern = tool_1.lighten(style.colors[index]);\n                shape.name = option.legend[index];\n                shape.value = item;\n                shape.radius = option.radius;\n                shape.sAngle = -Math.PI / 2;\n                shape.eAngle = -Math.PI / 2;\n                _this.shapes.push(shape);\n            });\n        }\n        this.initLegend();\n    };\n    ChartPie.prototype.setPie = function () {\n        var _this = this;\n        var total = this.shapes.reduce(function (num, shape) {\n            if (!shape.disabled) {\n                num += shape.value;\n            }\n            return num;\n        }, 0);\n        var sAngle = -Math.PI / 2;\n        var eAngle = -Math.PI / 2;\n        this.shapes.forEach(function (shape) {\n            if (shape.disabled) {\n                shape.precent = 0;\n            }\n            else {\n                shape.precent = shape.value / total * 100;\n            }\n            eAngle += shape.precent / 50 * Math.PI;\n            shape.animate({\n                eAngle: eAngle,\n                sAngle: sAngle\n            });\n            sAngle = eAngle;\n            var style = _this.style;\n            if (typeof style.nameStyle === 'function') {\n                shape.nameText = style.nameStyle(shape.name, shape.value, shape.precent);\n            }\n            if (typeof style.nameStyle === 'string') {\n                shape.nameText = style.nameStyle.replace('{a}', shape.name).replace('{b}', shape.value.toString()).replace('{c}', Math.round(shape.precent).toString());\n            }\n            if (typeof style.valueStyle === 'function') {\n                shape.valueText = style.valueStyle(shape.name, shape.value, shape.precent);\n            }\n            if (typeof style.valueStyle === 'string') {\n                shape.valueText = style.valueStyle.replace('{a}', shape.name).replace('{b}', shape.value.toString()).replace('{c}', Math.round(shape.precent).toString());\n            }\n        });\n    };\n    return ChartPie;\n}(chart_1.default));\nexports.default = ChartPie;\n\n\n//# sourceURL=webpack://simple-chart/./app/chart/chartPie.ts?");

/***/ }),

/***/ "./app/chart/charts.ts":
/*!*****************************!*\
  !*** ./app/chart/charts.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Charts = void 0;\nvar stage_1 = __importDefault(__webpack_require__(/*! ./stage */ \"./app/chart/stage.ts\"));\nvar chartPie_1 = __importDefault(__webpack_require__(/*! ./chartPie */ \"./app/chart/chartPie.ts\"));\nvar chartBar_1 = __importDefault(__webpack_require__(/*! ./chartBar */ \"./app/chart/chartBar.ts\"));\nvar Charts = (function () {\n    function Charts(element) {\n        this.legendList = [];\n        this.charts = [];\n        this.recoverAnimateList = [];\n        this.legendOffsetTop = 20;\n        this.tip = null;\n        if (element) {\n            this.stage2d = new stage_1.default(element);\n        }\n    }\n    Charts.prototype.setOption = function (_a) {\n        var type = _a.type, option = __rest(_a, [\"type\"]);\n        this.charts = [];\n        var chart;\n        switch (type) {\n            case 'pie':\n                chart = new chartPie_1.default(option, this.stage2d);\n                break;\n            case 'bar':\n                chart = new chartBar_1.default(option, this.stage2d);\n                break;\n            default:\n                break;\n        }\n        this.charts.push(chart);\n        this.render();\n    };\n    Charts.prototype.render = function () {\n        this.charts.forEach(function (chart) {\n            chart.paint();\n        });\n    };\n    Charts.prototype.addEventListener = function (event, callback) {\n        this.stage2d.addEventListener(event, callback);\n    };\n    return Charts;\n}());\nexports.Charts = Charts;\n\n\n//# sourceURL=webpack://simple-chart/./app/chart/charts.ts?");

/***/ }),

/***/ "./app/chart/event.ts":
/*!****************************!*\
  !*** ./app/chart/event.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Event2d = (function () {\n    function Event2d(event, callback) {\n        this.eventType = event;\n        this.callback = callback;\n    }\n    return Event2d;\n}());\nexports.default = Event2d;\n\n\n//# sourceURL=webpack://simple-chart/./app/chart/event.ts?");

/***/ }),

/***/ "./app/chart/point.ts":
/*!****************************!*\
  !*** ./app/chart/point.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Point = (function () {\n    function Point(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n    return Point;\n}());\nexports.default = Point;\n\n\n//# sourceURL=webpack://simple-chart/./app/chart/point.ts?");

/***/ }),

/***/ "./app/chart/queue.ts":
/*!****************************!*\
  !*** ./app/chart/queue.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Queue = (function () {\n    function Queue() {\n        this.items = [];\n    }\n    Queue.prototype.enqueue = function (item) {\n        this.items.push(item);\n    };\n    Queue.prototype.dequeue = function () {\n        return this.items.shift();\n    };\n    Queue.prototype.front = function () {\n        return this.items[0];\n    };\n    Queue.prototype.isEmpty = function () {\n        return this.items.length == 0;\n    };\n    Queue.prototype.size = function () {\n        return this.items.length;\n    };\n    Queue.prototype.clear = function () {\n        this.items = [];\n    };\n    return Queue;\n}());\nexports.default = Queue;\n\n\n//# sourceURL=webpack://simple-chart/./app/chart/queue.ts?");

/***/ }),

/***/ "./app/chart/scene.ts":
/*!****************************!*\
  !*** ./app/chart/scene.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Scene = (function () {\n    function Scene(stage2d) {\n        this.stage2d = stage2d;\n        var canvas = document.createElement('canvas');\n        canvas.width = stage2d.width;\n        canvas.height = stage2d.height;\n        canvas.style.position = 'absolute';\n        this.stage2d.container.appendChild(canvas);\n        var context = canvas.getContext('2d');\n        if (context) {\n            this.context = context;\n        }\n    }\n    Scene.prototype.initContext = function (style) {\n        this.context.strokeStyle = '#ffffff';\n        this.context.lineJoin = 'bevel';\n        this.context.miterLimit = 1;\n        this.context.textAlign = 'center';\n        this.context.textBaseline = 'middle';\n        this.context.font = style.font;\n        this.context.fillStyle = '#ffffff';\n    };\n    Scene.prototype.paint = function (fn) {\n        var _this = this;\n        var frame = function () {\n            if (_this.stage2d.isVisibility) {\n                var _a = _this.stage2d, width = _a.width, height = _a.height, translateX = _a.translateX, translateY = _a.translateY, scale = _a.scale;\n                _this.context.clearRect(0, 0, width, height);\n                _this.context.globalAlpha = 1;\n                _this.context.save();\n                _this.context.translate(translateX, translateY);\n                _this.context.scale(scale, scale);\n                fn(_this.context);\n                _this.context.restore();\n                _this.stage2d.clearEventPoint();\n            }\n            requestAnimationFrame(frame);\n        };\n        requestAnimationFrame(frame);\n    };\n    Scene.prototype.paintOnce = function (fn) {\n        var _this = this;\n        var frame = function () {\n            if (_this.stage2d.isVisibility) {\n                var _a = _this.stage2d, width = _a.width, height = _a.height, translateX = _a.translateX, translateY = _a.translateY, scale = _a.scale;\n                _this.context.clearRect(0, 0, width, height);\n                _this.context.globalAlpha = 1;\n                _this.context.save();\n                _this.context.translate(translateX, translateY);\n                _this.context.scale(scale, scale);\n                fn(_this.context);\n                _this.context.restore();\n            }\n        };\n        requestAnimationFrame(frame);\n    };\n    return Scene;\n}());\nexports.default = Scene;\n\n\n//# sourceURL=webpack://simple-chart/./app/chart/scene.ts?");

/***/ }),

/***/ "./app/chart/shape/axis.ts":
/*!*********************************!*\
  !*** ./app/chart/shape/axis.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar shape_1 = __importDefault(__webpack_require__(/*! ./shape */ \"./app/chart/shape/shape.ts\"));\nvar Axis = (function (_super) {\n    __extends(Axis, _super);\n    function Axis() {\n        var _this = _super.call(this) || this;\n        _this.type = 'axis';\n        _this.pattern = '#ffffff';\n        _this.mouseOverPattern = '#ffffff';\n        _this.name = 'axis';\n        _this.width = 0;\n        _this.height = 0;\n        _this.x = 0;\n        _this.y = 0;\n        _this.xLabel = [];\n        _this.yLabel = [];\n        _this.type = 'legend';\n        return _this;\n    }\n    Axis.prototype.clickAnimate = function () {\n    };\n    Axis.prototype.paint = function (context) {\n        var _this = this;\n        context.save();\n        context.strokeStyle = '#000';\n        context.fillStyle = '#000';\n        context.beginPath();\n        var partWidth = this.width / this.xLabel.length;\n        context.moveTo(this.x, this.y + this.height);\n        context.lineTo(this.x + this.width, this.y + this.height);\n        this.xLabel.forEach(function (item, index) {\n            context.moveTo(_this.x + (partWidth * index), _this.y + _this.height);\n            context.lineTo(_this.x + (partWidth * index), _this.y + _this.height + 5);\n            context.fillText(item, _this.x + (partWidth * index) + (partWidth / 2), _this.y + _this.height + 10);\n        });\n        context.moveTo(this.x + (partWidth * this.xLabel.length), this.y + this.height);\n        context.lineTo(this.x + (partWidth * this.xLabel.length), this.y + this.height + 5);\n        context.closePath();\n        context.stroke();\n        context.textAlign = 'right';\n        context.beginPath();\n        var partHeight = this.height / (this.yLabel.length - 1);\n        this.yLabel.reverse().forEach(function (item, index) {\n            if (index < _this.yLabel.length - 1) {\n                context.moveTo(_this.x, _this.y + (partHeight * index));\n                context.lineTo(_this.x + _this.width, _this.y + (partHeight * index));\n            }\n            context.fillText(item.toString(), _this.x - 5, _this.y + (partHeight * index));\n        });\n        context.closePath();\n        context.strokeStyle = '#ddd';\n        context.stroke();\n        context.restore();\n    };\n    return Axis;\n}(shape_1.default));\nexports.default = Axis;\n\n\n//# sourceURL=webpack://simple-chart/./app/chart/shape/axis.ts?");

/***/ }),

/***/ "./app/chart/shape/bar.ts":
/*!********************************!*\
  !*** ./app/chart/shape/bar.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar shape_1 = __importDefault(__webpack_require__(/*! ./shape */ \"./app/chart/shape/shape.ts\"));\nvar Bar = (function (_super) {\n    __extends(Bar, _super);\n    function Bar() {\n        var _this = _super.call(this) || this;\n        _this.type = 'axis';\n        _this.width = 0;\n        _this.height = 0;\n        _this.x = 0;\n        _this.y = 0;\n        _this.pattern = '#ffffff';\n        _this.mouseOverPattern = '#ffffff';\n        _this.name = '';\n        _this.value = 0;\n        _this.index = 0;\n        _this.groupIndex = 0;\n        _this.groupLength = 0;\n        _this.type = 'bar';\n        return _this;\n    }\n    Bar.prototype.clickAnimate = function () {\n    };\n    Bar.prototype.paint = function (context) {\n        context.save();\n        context.beginPath();\n        context.moveTo(this.x, this.y);\n        context.rect(this.x, this.y, this.width, this.height);\n        context.closePath();\n        if (context.isPointInPath(this.stage2d.mouseX, this.stage2d.mouseY)) {\n            context.fillStyle = this.mouseOverPattern;\n            this.triggerEvent();\n        }\n        else {\n            context.fillStyle = this.pattern;\n        }\n        context.stroke();\n        context.fill();\n        context.restore();\n    };\n    return Bar;\n}(shape_1.default));\nexports.default = Bar;\n\n\n//# sourceURL=webpack://simple-chart/./app/chart/shape/bar.ts?");

/***/ }),

/***/ "./app/chart/shape/index.ts":
/*!**********************************!*\
  !*** ./app/chart/shape/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Bar = exports.Axis = exports.Legend = exports.Pie = void 0;\nvar pie_1 = __importDefault(__webpack_require__(/*! ./pie */ \"./app/chart/shape/pie.ts\"));\nexports.Pie = pie_1.default;\nvar legend_1 = __importDefault(__webpack_require__(/*! ./legend */ \"./app/chart/shape/legend.ts\"));\nexports.Legend = legend_1.default;\nvar axis_1 = __importDefault(__webpack_require__(/*! ./axis */ \"./app/chart/shape/axis.ts\"));\nexports.Axis = axis_1.default;\nvar bar_1 = __importDefault(__webpack_require__(/*! ./bar */ \"./app/chart/shape/bar.ts\"));\nexports.Bar = bar_1.default;\n\n\n//# sourceURL=webpack://simple-chart/./app/chart/shape/index.ts?");

/***/ }),

/***/ "./app/chart/shape/legend.ts":
/*!***********************************!*\
  !*** ./app/chart/shape/legend.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar shape_1 = __importDefault(__webpack_require__(/*! ./shape */ \"./app/chart/shape/shape.ts\"));\nvar Legend = (function (_super) {\n    __extends(Legend, _super);\n    function Legend() {\n        var _this = _super.call(this) || this;\n        _this.type = 'legend';\n        _this.width = 0;\n        _this.pattern = '#ffffff';\n        _this.mouseOverPattern = '#ffffff';\n        _this.name = '';\n        _this.value = 0;\n        _this.type = 'legend';\n        return _this;\n    }\n    Legend.prototype.clickAnimate = function () {\n        this.disabled = !this.disabled;\n        var shape = this.shape;\n        if (this.disabled) {\n            this.shape.disabled = true;\n        }\n        else {\n            this.shape.disabled = false;\n        }\n        switch (this.shape.type) {\n            case 'pie':\n                this.chart2d.setPie();\n                break;\n            default:\n                break;\n        }\n    };\n    Legend.prototype.paint = function (context) {\n        context.save();\n        context.strokeStyle = this.pattern;\n        context.beginPath();\n        context.arc(this.x + 5, this.y, 5, 0, Math.PI * 2);\n        if (context.isPointInPath(this.stage2d.mouseX, this.stage2d.mouseY)) {\n            context.arc(this.x + 5, this.y, 6, 0, Math.PI * 2);\n            this.triggerEvent();\n        }\n        context.closePath();\n        if (this.disabled) {\n            context.fillStyle = '#c9c9c9';\n            context.strokeStyle = '#c9c9c9';\n        }\n        else {\n            context.fillStyle = '#000';\n        }\n        context.fillText(this.name, this.x + 4 + this.width / 2, this.y);\n        context.stroke();\n        context.restore();\n    };\n    return Legend;\n}(shape_1.default));\nexports.default = Legend;\n\n\n//# sourceURL=webpack://simple-chart/./app/chart/shape/legend.ts?");

/***/ }),

/***/ "./app/chart/shape/pie.ts":
/*!********************************!*\
  !*** ./app/chart/shape/pie.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar shape_1 = __importDefault(__webpack_require__(/*! ./shape */ \"./app/chart/shape/shape.ts\"));\nvar Pie = (function (_super) {\n    __extends(Pie, _super);\n    function Pie() {\n        var _this = _super.call(this) || this;\n        _this.originalX = 0;\n        _this.originalY = 0;\n        _this.pattern = '#ffffff';\n        _this.mouseOverPattern = '#ffffff';\n        _this.name = '';\n        _this.value = 0;\n        _this.radius = 0;\n        _this.precent = 0;\n        _this.sAngle = 0;\n        _this.eAngle = 0;\n        _this.nameText = '';\n        _this.nameStyle = '';\n        _this.valueText = '';\n        _this.valueStyle = '';\n        _this.type = 'pie';\n        return _this;\n    }\n    Pie.prototype.clickAnimate = function () {\n        var radian = (this.eAngle - this.sAngle) / 2 + this.sAngle + (0.5 * Math.PI);\n        var x = this.x + Math.sin(radian) * 10;\n        var y = this.y - Math.cos(radian) * 10;\n        this.chart2d.addRecoverShapes(this, {\n            x: this.x,\n            y: this.y\n        });\n        this.animate({\n            x: x,\n            y: y\n        });\n        this.recoverAnimateIng = true;\n    };\n    Pie.prototype.paintPie = function (context) {\n        context.beginPath();\n        context.moveTo(this.x, this.y);\n        context.arc(this.x, this.y, this.radius, this.sAngle, this.eAngle);\n        context.closePath();\n        if (context.isPointInPath(this.stage2d.mouseX, this.stage2d.mouseY)) {\n            context.fillStyle = this.mouseOverPattern;\n            this.triggerEvent();\n        }\n        else {\n            context.fillStyle = this.pattern;\n        }\n        context.stroke();\n        context.fill();\n    };\n    Pie.prototype.paint = function (context) {\n        context.save();\n        this.paintPie(context);\n        context.restore();\n        var radian = (this.eAngle - this.sAngle) / 2 + this.sAngle + (0.5 * Math.PI);\n        if (!this.disabled) {\n            var x = this.x + Math.sin(radian) * (this.radius * .7);\n            var y = this.y - Math.cos(radian) * (this.radius * .7);\n            context.fillText(this.valueText, x, y);\n        }\n        if (!this.disabled) {\n            var sx = this.originalX + Math.sin(radian) * (this.radius + 4);\n            var sy = this.originalY - Math.cos(radian) * (this.radius + 4);\n            var ex = this.originalX + Math.sin(radian) * (this.radius + 20);\n            var ey = this.originalY - Math.cos(radian) * (this.radius + 20);\n            context.save();\n            context.strokeStyle = this.pattern;\n            context.beginPath();\n            context.moveTo(sx, sy);\n            context.lineTo(ex, ey);\n            context.stroke();\n            context.fillStyle = this.pattern;\n            if (radian < Math.PI) {\n                context.textAlign = \"left\";\n                context.fillText(this.nameText, ex + 3, ey);\n            }\n            else {\n                context.textAlign = \"right\";\n                context.fillText(this.nameText, ex - 3, ey);\n            }\n            context.restore();\n        }\n    };\n    return Pie;\n}(shape_1.default));\nexports.default = Pie;\n\n\n//# sourceURL=webpack://simple-chart/./app/chart/shape/pie.ts?");

/***/ }),

/***/ "./app/chart/shape/shape.ts":
/*!**********************************!*\
  !*** ./app/chart/shape/shape.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar constants_1 = __webpack_require__(/*! ../../constants */ \"./app/constants.ts\");\nvar Shape = (function () {\n    function Shape() {\n        this.x = 0;\n        this.y = 0;\n        this.disabled = false;\n        this.recoverAnimateIng = false;\n    }\n    Shape.prototype.clickAnimate = function () {\n    };\n    Shape.prototype.easeOut = function (t, b, c, d) {\n        return -c * (t /= d) * (t - 2) + b;\n    };\n    Shape.prototype.animate = function (props, speed) {\n        var _this = this;\n        if (speed === void 0) { speed = 400; }\n        var initialValues = {};\n        var changeValues = {};\n        for (var key in props) {\n            if (key === 'eAngle') {\n                initialValues[key] = (this[key] * 100);\n                changeValues[key] = (props[key] * 100 - initialValues[key]);\n            }\n            else {\n                initialValues[key] = this[key];\n                changeValues[key] = (props[key] - this[key]);\n            }\n        }\n        var time = 0;\n        var durationTime = speed / 1000;\n        var step = function () {\n            time = time + _this.stage2d.interval;\n            if (time > speed) {\n                time = speed;\n            }\n            for (var key in changeValues) {\n                if (key === 'eAngle') {\n                    _this[key] = _this.easeOut(time / 1000, initialValues[key], changeValues[key], durationTime) / 100;\n                }\n                else {\n                    _this[key] = _this.easeOut(time / 1000, initialValues[key], changeValues[key], durationTime);\n                }\n            }\n            if (time < speed) {\n                requestAnimationFrame(step);\n            }\n        };\n        requestAnimationFrame(step);\n    };\n    Shape.prototype.triggerEvent = function () {\n        var _this = this;\n        var events = this.stage2d.events;\n        if (events.length > 0) {\n            events.forEach(function (event, index) {\n                switch (event.eventType) {\n                    case constants_1.CLICK:\n                        var clickPointQueue = _this.stage2d.clickPointQueue;\n                        if (!clickPointQueue.isEmpty()) {\n                            clickPointQueue.dequeue();\n                            event.callback(_this.getStageEvent());\n                            _this.chart2d.recover();\n                            if (_this.recoverAnimateIng) {\n                                _this.recoverAnimateIng = false;\n                            }\n                            else {\n                                _this.clickAnimate();\n                            }\n                        }\n                        break;\n                    default:\n                        break;\n                }\n            });\n        }\n    };\n    Shape.prototype.getStageEvent = function () {\n        return {\n            mouseX: Math.round(this.stage2d.mouseX / this.stage2d.pixelRatio),\n            mouseY: Math.round(this.stage2d.mouseY / this.stage2d.pixelRatio),\n            pageX: this.stage2d.pageX,\n            pageY: this.stage2d.pageY,\n            target: this\n        };\n    };\n    return Shape;\n}());\nexports.default = Shape;\n\n\n//# sourceURL=webpack://simple-chart/./app/chart/shape/shape.ts?");

/***/ }),

/***/ "./app/chart/stage.ts":
/*!****************************!*\
  !*** ./app/chart/stage.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar queue_1 = __importDefault(__webpack_require__(/*! ./queue */ \"./app/chart/queue.ts\"));\nvar scene_1 = __importDefault(__webpack_require__(/*! ./scene */ \"./app/chart/scene.ts\"));\nvar point_1 = __importDefault(__webpack_require__(/*! ./point */ \"./app/chart/point.ts\"));\nvar event_1 = __importDefault(__webpack_require__(/*! ./event */ \"./app/chart/event.ts\"));\nvar constants_1 = __webpack_require__(/*! ../constants */ \"./app/constants.ts\");\nvar tool_1 = __webpack_require__(/*! ../utils/tool */ \"./app/utils/tool.ts\");\nvar lastIDOMHighResTimeStamp = 0;\nvar Stage = (function () {\n    function Stage(container) {\n        var _this = this;\n        this.scenes = [];\n        this.scale = 1;\n        this.translateX = 0;\n        this.translateY = 0;\n        this.pixelRatio = 1;\n        this.mouseX = 0;\n        this.mouseY = 0;\n        this.pageX = 0;\n        this.pageY = 0;\n        this.interval = 0;\n        this.isVisibility = true;\n        this.clickPointQueue = new queue_1.default();\n        this.mouseupPointQueue = new queue_1.default();\n        this.mousedownPointQueue = new queue_1.default();\n        this.mousemovePointQueue = new queue_1.default();\n        this.container = container;\n        this.width = container.clientWidth;\n        this.height = container.clientHeight;\n        this.container.style.position = 'relative';\n        var rect = container.getBoundingClientRect();\n        this.offsetX = rect.x;\n        this.offsetY = rect.y;\n        var context = document.createElement('canvas').getContext('2d');\n        if (context) {\n            this.setPixelRatio(context);\n        }\n        this.events = [];\n        this.initEventListener();\n        document.addEventListener(\"visibilitychange\", function () {\n            _this.isVisibility = document.visibilityState === 'visible';\n        });\n        this.requestAnimationFrame();\n    }\n    Stage.prototype.initEventListener = function () {\n        var _this = this;\n        document.addEventListener(\"mouseup\", function (e) {\n        }, false);\n        this.container.addEventListener(\"mousedown\", function (e) {\n        }, false);\n        this.container.addEventListener(\"click\", function (e) {\n            _this.clickPointQueue.enqueue(new point_1.default(_this.mouseX, _this.mouseY));\n        }, false);\n        this.container.addEventListener(\"mousemove\", function (e) {\n            _this.pageX = e.pageX;\n            _this.pageY = e.pageY;\n            _this.mouseX = (e.pageX - _this.offsetX) * _this.pixelRatio;\n            _this.mouseY = (e.pageY - _this.offsetY) * _this.pixelRatio;\n            _this.mousemovePointQueue.enqueue(new point_1.default(_this.mouseX, _this.mouseY));\n        }, false);\n        this.container.addEventListener(\"DOMMouseScroll\", function (e) {\n        }, false);\n    };\n    Stage.prototype.getScene = function () {\n        var scene = new scene_1.default(this);\n        this.scenes.push(scene);\n        return scene;\n    };\n    Stage.prototype.setPixelRatio = function (context) {\n        this.pixelRatio = tool_1.getPixelRatio(context);\n    };\n    Stage.prototype.addEventListener = function (event, callback) {\n        var eventConst;\n        switch (event) {\n            case 'click':\n                eventConst = constants_1.CLICK;\n                break;\n            case 'mouseup':\n                eventConst = constants_1.MOUSEUP;\n                break;\n            case 'mousedown':\n                eventConst = constants_1.MOUSEDOWN;\n                break;\n            case 'mousemove':\n                eventConst = constants_1.MOUSEMOVE;\n                break;\n            case 'DOMMouseScroll':\n                eventConst = constants_1.MOUSESCROLL;\n                break;\n            default:\n                eventConst = constants_1.CLICK;\n                break;\n        }\n        this.events.push(new event_1.default(eventConst, callback));\n        console.log(\"this.events\", this.events);\n    };\n    Stage.prototype.clearEventPoint = function () {\n        this.clickPointQueue.clear();\n        this.mouseupPointQueue.clear();\n        this.mousedownPointQueue.clear();\n        this.mousemovePointQueue.clear();\n    };\n    Stage.prototype.requestAnimationFrame = function () {\n        var _this = this;\n        var frame = function (iDOMHighResTimeStamp) {\n            _this.interval = iDOMHighResTimeStamp - lastIDOMHighResTimeStamp;\n            lastIDOMHighResTimeStamp = iDOMHighResTimeStamp;\n            requestAnimationFrame(frame);\n        };\n        requestAnimationFrame(frame);\n    };\n    return Stage;\n}());\nexports.default = Stage;\n\n\n//# sourceURL=webpack://simple-chart/./app/chart/stage.ts?");

/***/ }),

/***/ "./app/constants.ts":
/*!**************************!*\
  !*** ./app/constants.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.MOUSESCROLL = exports.MOUSEUP = exports.MOUSEMOVE = exports.MOUSEDOWN = exports.CLICK = void 0;\nexports.CLICK = Symbol('click');\nexports.MOUSEDOWN = Symbol('mousedown');\nexports.MOUSEMOVE = Symbol('mousemove');\nexports.MOUSEUP = Symbol('mouseup');\nexports.MOUSESCROLL = Symbol('mousescroll');\n\n\n//# sourceURL=webpack://simple-chart/./app/constants.ts?");

/***/ }),

/***/ "./app/example/pie.ts":
/*!****************************!*\
  !*** ./app/example/pie.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar index_1 = __importDefault(__webpack_require__(/*! ../index */ \"./app/index.ts\"));\nvar myChart = document.createElement('div');\nmyChart.className = 'chart';\ndocument.body.appendChild(myChart);\nvar pieOption = {\n    type: 'pie',\n    style: {\n        colors: ['#f2711c', '#fbbd08', '#b5cc18', '#21ba45', '#00b5ad', '#2185d0', '#6435c9', '#a333c8', '#e03997', '#a5673f'],\n        font: '12px sans-serif',\n        valueStyle: '{c}%',\n        nameStyle: '{a} {c}%',\n        legend: {\n            orient: 'horizontal',\n            position: ['center', 'bottom']\n        }\n    },\n    radius: '60%',\n    center: ['50%', '50%'],\n    legend: ['台式电脑', '笔记本', '平板电脑', '手机', '交换机', '路由器', '服务器'],\n    data: [334, 211, 186, 412, 218, 162, 128]\n};\nvar chart = new index_1.default(myChart);\nchart.setOption(pieOption);\nchart.addEventListener('click', function (e) {\n    console.log('click e: ', e.target.name);\n});\n\n\n//# sourceURL=webpack://simple-chart/./app/example/pie.ts?");

/***/ }),

/***/ "./app/index.ts":
/*!**********************!*\
  !*** ./app/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar charts_1 = __webpack_require__(/*! ~/chart/charts */ \"./app/chart/charts.ts\");\nexports.default = charts_1.Charts;\n\n\n//# sourceURL=webpack://simple-chart/./app/index.ts?");

/***/ }),

/***/ "./app/utils/tool.ts":
/*!***************************!*\
  !*** ./app/utils/tool.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.getPixelRatio = exports.darken = exports.lighten = void 0;\nfunction rgbToHex(r, g, b) {\n    var hex = ((r << 16) | (g << 8) | b).toString(16);\n    return \"#\" + new Array(Math.abs(hex.length - 7)).join('0') + hex;\n}\nfunction hexToRgb(hex) {\n    var rgb = [];\n    for (var i = 1; i < 7; i += 2) {\n        rgb.push(parseInt(\"0x\" + hex.slice(i, i + 2), 16));\n    }\n    return rgb;\n}\nfunction lighten(hex) {\n    var rgb = hexToRgb(hex);\n    var arr = rgb.map(function (v) {\n        return Math.min(v + 10, 255);\n    });\n    return rgbToHex(arr[0], arr[1], arr[2]);\n}\nexports.lighten = lighten;\nfunction darken(hex) {\n    var rgb = hexToRgb(hex);\n    var arr = rgb.map(function (v) {\n        return Math.max(v - 10, 0);\n    });\n    return rgbToHex(arr[0], arr[1], arr[2]);\n}\nexports.darken = darken;\nfunction getPixelRatio(context) {\n    return (window.devicePixelRatio || 1) / 1;\n}\nexports.getPixelRatio = getPixelRatio;\n;\n\n\n//# sourceURL=webpack://simple-chart/./app/utils/tool.ts?");

/***/ })

/******/ });
});