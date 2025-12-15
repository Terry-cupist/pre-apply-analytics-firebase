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
exports.getFirebaseInstance = exports.analytics = void 0;
exports.convertFirebaseUserProperties = convertFirebaseUserProperties;
var firebase_1 = require("./firebase");
exports.analytics = (0, firebase_1.getAnalytics)();
function convertFirebaseUserProperties(userProperties) {
    return Object.keys(userProperties).reduce(function (r, key) {
        var _a;
        if (userProperties[key]) {
            r[key] = (_a = userProperties[key]) === null || _a === void 0 ? void 0 : _a.toString();
        }
        return r;
    }, {});
}
var getFirebaseInstance = function (props) {
    return __assign({ log: function (_a) {
            var eventName = _a.eventName, params = _a.params;
            (0, firebase_1.logEvent)(exports.analytics, eventName, params);
        }, conversion: function (_a) {
            var code = _a.code;
            (0, firebase_1.logEvent)(exports.analytics, code);
        }, updateUserProperties: function (_a) {
            var userId = _a.userId, userProperties = _a.userProperties;
            if (userId) {
                (0, firebase_1.setUserId)(exports.analytics, userId);
            }
            (0, firebase_1.setUserProperties)(exports.analytics, convertFirebaseUserProperties(userProperties));
        }, logout: function () {
            (0, firebase_1.setUserId)(exports.analytics, null);
        } }, props);
};
exports.getFirebaseInstance = getFirebaseInstance;
//# sourceMappingURL=user-event.js.map