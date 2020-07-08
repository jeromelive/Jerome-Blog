/*
 * @Author: your name
 * @Date: 2020-07-08 14:11:32
 * @LastEditTime: 2020-07-08 14:13:05
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Jerome-Blog\project\webpack-test\output\bundle.js
 */ 
(function (modules) {
    function require(id) {
        const [fn, mapping] = modules[id];

        function localRequire(relativePath) {
            return require(mapping[relativePath]);
        }
        const module = {
            exports: {}
        }
        fn(localRequire, module, module.exports);
        return module.exports;
    }
    require(0);
})({
    0: [
        function (require, module, exports) {
            "use strict";

            var _info = _interopRequireDefault(require("./info.js"));

            var _const = require("./const.js");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                };
            }

            console.log(_const.company);
            console.log(_info["default"]);
        },
        {
            "./info.js": 1,
            "./const.js": 2
        }
    ],

    1: [
        function (require, module, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports["default"] = void 0;

            var _const = require("./const.js");

            var _default = "\u4F60\u597D\uFF0C".concat(_const.company);

            exports["default"] = _default;
        },
        {
            "./const.js": 3
        }
    ],

    2: [
        function (require, module, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.company = void 0;
            var company = '360金融';
            exports.company = company;
        },
        {}
    ],

    3: [
        function (require, module, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.company = void 0;
            var company = '360金融';
            exports.company = company;
        },
        {}
    ],
})