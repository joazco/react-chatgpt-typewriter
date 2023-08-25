"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var ChatGPTTypewriterEffect = function (_a) {
    var text = _a.text, _b = _a.delay, delay = _b === void 0 ? 10 : _b, _c = _a.fill, fill = _c === void 0 ? '#E8E8E8' : _c, width = _a.width, height = _a.height, _d = _a.marginLeft, marginLeft = _d === void 0 ? '3px' : _d, hideWhenFinished = _a.hideWhenFinished, onChange = _a.onChange, onFinished = _a.onFinished;
    var _e = (0, react_1.useState)(''), displayedText = _e[0], setDisplayedText = _e[1];
    var _f = (0, react_1.useState)(false), isFinished = _f[0], setIsFinished = _f[1];
    var style = (0, react_1.useMemo)(function () {
        var s = {
            marginLeft: marginLeft,
        };
        if (width) {
            s.width = width;
        }
        if (height) {
            s.height = height;
        }
        return s;
    }, [width, height]);
    var show = (0, react_1.useMemo)(function () {
        if (hideWhenFinished && isFinished) {
            return false;
        }
        return true;
    }, [hideWhenFinished, isFinished]);
    (0, react_1.useEffect)(function () {
        var index = 0;
        var interval = setInterval(function () {
            if (index < text.length) {
                var nextText_1 = text[index];
                index++;
                setDisplayedText(function (prevText) {
                    if (typeof nextText_1 === 'undefined')
                        return prevText;
                    var finalText = prevText + nextText_1;
                    if (onChange) {
                        onChange(finalText);
                    }
                    return finalText;
                });
            }
            else {
                setIsFinished(true);
                clearInterval(interval);
            }
        }, delay);
        return function () {
            setDisplayedText('');
            clearInterval(interval);
        };
    }, [text, delay]);
    (0, react_1.useEffect)(function () {
        if (isFinished && onFinished) {
            onFinished();
        }
    }, [isFinished]);
    return ((0, jsx_runtime_1.jsxs)("span", __assign({ className: "text-animation-chatgpt" }, { children: [displayedText, show && ((0, jsx_runtime_1.jsx)("svg", __assign({ viewBox: "8 4 8 16", xmlns: "http://www.w3.org/2000/svg", className: "cursor", style: style }, { children: (0, jsx_runtime_1.jsx)("rect", { x: "10", y: "10", width: "12", height: "12", fill: fill }) })))] })));
};
exports.default = ChatGPTTypewriterEffect;
